import zarr
import json
from pathlib import Path
from typing import Dict, Optional

def inspect_zarr_store(zarr_path: Path) -> Dict:
    """
    Inspect a zarr store and extract actual compression and sharding settings.

    Returns dict with:
    - compression: compression codec name and level
    - sharded: whether sharding is enabled
    - chunks: chunk shape
    - dtype: data type
    - shape: array shape
    """
    try:
        # Open the zarr store
        store = zarr.open(zarr_path, mode='r')

        # Handle both Group (OME-Zarr) and Array
        if isinstance(store, zarr.Group):
            # OME-Zarr: inspect the '0' array (highest resolution)
            if '0' in store:
                arr = store['0']
            else:
                return {'error': 'OME-Zarr group missing "0" array'}
        else:
            arr = store

        result = {
            'shape': arr.shape,
            'dtype': str(arr.dtype),
            'chunks': arr.chunks if hasattr(arr, 'chunks') else None,
        }

        # Check for Zarr v3 (has metadata attribute)
        if hasattr(arr, 'metadata'):
            metadata = arr.metadata

            # Extract compression codec
            if hasattr(metadata, 'compressor'):
                compressor = metadata.compressor
                if compressor:
                    result['compression'] = str(compressor)
                else:
                    result['compression'] = 'None'
            elif hasattr(metadata, 'codecs'):
                # Zarr v3 uses codecs instead of compressor
                codecs = metadata.codecs
                compression_codecs = []
                for codec in codecs:
                    codec_str = str(codec)
                    if 'gzip' in codec_str.lower() or 'zstd' in codec_str.lower() or 'blosc' in codec_str.lower():
                        compression_codecs.append(codec_str)

                result['compression'] = ', '.join(compression_codecs) if compression_codecs else 'None'

            # Check for sharding (Zarr v3 feature)
            if hasattr(metadata, 'chunk_grid'):
                chunk_grid = str(metadata.chunk_grid)
                result['sharded'] = 'RegularChunkGrid' not in chunk_grid and 'shard' in chunk_grid.lower()
            else:
                result['sharded'] = False

        # Fallback for Zarr v2
        elif hasattr(arr, 'compressor'):
            compressor = arr.compressor
            if compressor:
                result['compression'] = str(compressor)
            else:
                result['compression'] = 'None'
            result['sharded'] = False  # Zarr v2 doesn't have sharding

        # Try to read zarr.json or .zarray for more details
        zarr_json_path = zarr_path / 'zarr.json'
        zarray_path = zarr_path / '.zarray'

        if zarr_json_path.exists():
            # Zarr v3
            with open(zarr_json_path, 'r') as f:
                zarr_config = json.load(f)

            # Look for compression in codecs
            if 'codecs' in zarr_config:
                compression_info = []
                sharding_info = None

                for codec in zarr_config['codecs']:
                    if isinstance(codec, dict):
                        codec_name = codec.get('name', '')

                        # Check for compression codecs
                        if 'gzip' in codec_name.lower():
                            level = codec.get('configuration', {}).get('level', 'unknown')
                            compression_info.append(f"gzip(level={level})")
                        elif 'zstd' in codec_name.lower():
                            level = codec.get('configuration', {}).get('level', 'unknown')
                            compression_info.append(f"zstd(level={level})")
                        elif 'blosc' in codec_name.lower():
                            compression_info.append(f"blosc")

                        # Check for sharding
                        if 'sharding' in codec_name.lower():
                            sharding_info = codec

                result['compression_detailed'] = ', '.join(compression_info) if compression_info else 'None'
                result['sharded_detailed'] = bool(sharding_info)

                if sharding_info:
                    shard_shape = sharding_info.get('configuration', {}).get('chunk_shape', 'unknown')
                    result['shard_shape'] = shard_shape

        elif zarray_path.exists():
            # Zarr v2
            with open(zarray_path, 'r') as f:
                zarr_config = json.load(f)

            compressor = zarr_config.get('compressor')
            if compressor:
                comp_id = compressor.get('id', 'unknown')
                if 'gzip' in comp_id.lower() or 'zlib' in comp_id.lower():
                    level = compressor.get('level', 'unknown')
                    result['compression_detailed'] = f"gzip(level={level})"
                else:
                    result['compression_detailed'] = comp_id
            else:
                result['compression_detailed'] = 'None'

            result['sharded_detailed'] = False

        return result

    except Exception as e:
        return {'error': str(e)}


# Base path
BASE_PATH = Path(r"\\rbo-s1\S1_DATA\isoview\foconnell\io_corrected_test")

# Find all zarr directories
zarr_dirs = []
for item in BASE_PATH.iterdir():
    if item.is_dir() and 'zarr' in item.name.lower():
        zarr_dirs.append(item)

print("Inspecting Zarr Metadata")
print("=" * 80)

results_list = []

for zarr_dir in sorted(zarr_dirs):
    print(f"\n{zarr_dir.name}:")
    print(f"  Path: {zarr_dir}")

    # Find a sample zarr store to inspect
    sample_stores = list(zarr_dir.rglob('*.zarr'))[:3]  # Get first 3 stores

    if not sample_stores:
        print("  No zarr stores found")
        continue

    print(f"  Inspecting {len(sample_stores)} sample stores...")

    # Inspect each sample
    all_same = True
    first_result = None

    for idx, store_path in enumerate(sample_stores):
        if store_path.is_dir():
            metadata = inspect_zarr_store(store_path)

            if idx == 0:
                first_result = metadata
            elif metadata != first_result:
                all_same = False

            if idx == 0:  # Print details of first store
                print(f"\n  Sample: {store_path.name}")

                if 'error' in metadata:
                    print(f"    ERROR: {metadata['error']}")
                else:
                    print(f"    Shape: {metadata.get('shape', 'unknown')}")
                    print(f"    Dtype: {metadata.get('dtype', 'unknown')}")
                    print(f"    Chunks: {metadata.get('chunks', 'unknown')}")
                    print(f"    Compression: {metadata.get('compression_detailed', metadata.get('compression', 'unknown'))}")
                    print(f"    Sharded: {metadata.get('sharded_detailed', metadata.get('sharded', 'unknown'))}")

                    if 'shard_shape' in metadata:
                        print(f"    Shard shape: {metadata['shard_shape']}")

    if all_same and first_result:
        print(f"\n  All {len(sample_stores)} samples have identical settings")

        # Create summary label
        comp = first_result.get('compression_detailed', first_result.get('compression', 'unknown'))
        sharded = first_result.get('sharded_detailed', first_result.get('sharded', False))

        label = f"{zarr_dir.name}: "

        # Extract compression level if present
        if 'gzip' in str(comp).lower():
            if 'level=' in str(comp):
                comp_level = str(comp).split('level=')[1].split(')')[0]
                label += f"gzip(level={comp_level})"
            else:
                label += "gzip"
        elif 'None' in str(comp):
            label += "no compression"
        else:
            label += str(comp)

        label += ", "
        label += "sharded" if sharded else "not sharded"

        results_list.append({
            'Directory': zarr_dir.name,
            'Actual Config': label,
            'Compression': comp,
            'Sharded': sharded,
            'Sample Shape': first_result.get('shape', 'unknown'),
            'Sample Chunks': first_result.get('chunks', 'unknown')
        })

        print(f"\n  ACTUAL: {label}")
    else:
        print(f"\n  WARNING: Stores have different settings!")

# Create summary table
print("\n" + "=" * 80)
print("METADATA SUMMARY")
print("=" * 80)

if results_list:
    df_metadata = pd.DataFrame(results_list)
    print(df_metadata[['Directory', 'Compression', 'Sharded', 'Sample Shape']].to_string(index=False))

    # Save to CSV
    output_csv = BASE_PATH / "zarr_metadata_inspection.csv"
    df_metadata.to_csv(output_csv, index=False)
    print(f"\nMetadata inspection saved to: {output_csv}")
else:
    print("No zarr stores inspected")

print("\nInspection complete!")
