# Light Beads Microscopy

This guide describes the data aquired on the [optimized](https://mbo.rockefeller.edu/tools/#opt-lbm) or [high-res](https://mbo.rockefeller.edu/tools/#high-res) light-beads microscopy (LBM) module.

Current LBM data is aquired with ScanImage aquisition software.

## Raw Data

ScanImage [Multi Region Of Interest (mROI)](https://docs.scanimage.org/Premium+Features/Multiple+Region+of+Interest+(MROI).html) outputs raw `.tiff` files made up of individual `Regions of Interest (ROI's)`.

In its raw form, data is saved as a 3-dimensional {ref}`multi-page tiff file <multipage_tiff>` with each ROI stacked vertically relative to the fast-galvo scan direction.

Each 2D image within this tiff file represents a page of the original document.

```{figure} ../_images/ex_deinterleave_nobg.svg

Raw data are stored first by z-plane, for each timepoint (1) before being deinterleaved (2).
This example shows a session with 2 ROI's shown vertically stacked with a black bar of ~14 pixels in between.
```

The location of each ROI is stored as a pixel coordinate used internally by the respective pipeline to orient each strip.

### Frame Ordering

ScanImage saves raw tiffs with each z-depth and timepoint interleaved [zT]:

- frame0 = time0_plane1
- frame1 = time0_plane2
- frame2 = time0_plane3
- frame3 = time1_plane1
- frame4 = time1_plane2

Data organized this way is generally incompatible with downstream processing libraries like suite2p, CaImAn and EXTRACT.

For compatibility, we reorganize the frames as follows:

- frame0 = time0_plane1
- frame1 = time1_plane1
- frame2 = time2_plane1
- frame3 = time0_plane2
- frame4 = time1_plane2

Thus a primary function of image assembly is to {ref}`ex_deinterleave`.

```{admonition} Note on Frames
:class: tip

Before beginning the recording session, users have the option to split frames in the recording across multiple `.tiff` files. This option is helpful as it requires less work in post-processing to ensure there isn't too much computer memory being used.

```

----

### Metadata

The primary distinction between Light-Beads Microscopy datasets and standard 2p datasets are how the data is organized on disk.

This information is stored in the [ScanImage Metadata](https://docs.scanimage.org/Appendix/ScanImage%2BBigTiff%2BSpecification.html#scanimage-bigtiff-specification).

(metadata_overview)=
#### Overview

ScanImage stores metadata about image size, frame rate, resolution, and regions of interest within the raw {code}`.tiff` file.

Each pipeline handles this metadata for you, and provides an interface to use these values throughout the pipeline.

There is primary metadata, intended for use in a typical processing run. Many of these values are derived from less-pertinent (secondary) metadata shown below.

:::{dropdown} Metadata (primary)
:chevron: down-up
:animate: fade-in-slide-down
:name: primary_metadata

| Name                  | Value            | Unit   | Description                                       |
|-----------------------|------------------|--------|---------------------------------------------------|
| tiff_length           | 2478             | px     | Height of the raw scanimage tiff.                 |
| tiff_width            | 145              | px     | Width of the raw scanimage tiff.                  |
| roi_width_px          | 144              | px     | Width of the region of interest (ROI).            |
| roi_height_px         | 600              | px     | Height of the region of interest (ROI).           |
| num_planes            | 30               | -      | Total number of recording z-planes.               |
| num_rois              | 4                | -      | Number of ScanImage regions of interest (ROIs).   |
| frame_rate            | 9.608            | Hz     | How many frames recorded / second.                |
| fov                   | [600, 600]       | um     | Area of full field of view.                       |
| pixel_resolution      | 1.0208           | um/px  | Each pixel corresponds to this many microns.      |

:::

:::{dropdown} Metadata (secondary)
:chevron: down-up
:animate: fade-in-slide-down
:name: secondary_metadata

There are additional metadata values used internally to locate files and to calculate the above values:

| Name                  | Value            | Unit     | Description                                       |
|-----------------------|------------------|----------|---------------------------------------------------|
| raw_filename          | 'high_res'       | -        | Raw data filename, without the extension.         |
| raw_filepath          | 'C:\Users\RBO\caiman_data'  | -         | Raw data directory.                   |
| objective_resolution  | 157.5000         | um/deg   | Resolution of the objective in microns/degree of the scan angle.        |
| center_xy             | [-15.2381, 0]    | deg      | Center coordinates for each ROI in the XY plane.  |
| size_xy               | [3.8095, 38.0952]| deg      | Size of each ROI, in units of resonant scan angle.|
| line_period           | 4.1565e-05       | s        | Time period for resonant scanner to scan a full line (row). |
| scan_frame_period     | 0.1041           | s        | Time period for resonant scanner to scan a full frame/image              |
| sample_format         | 'int16'          | -        | Data type holding the nubmer of bits per sample.  |

:::

(scanner_note)=
> **Note:**
> With multi-ROI tiffs, the size of your tiff given by `image_size` will be different from the number of pixels in x and y.
> This is due to the time it takes the scanner to move onto subsequent ROI's not being accounted for in `num_pixel_xy`.
> Internally, each pipeline checks for these metadata attributes and adjusts the final image accordingly.

--------

(using_metadata)=
#### Usage

Each pipeline comes stocked with methods to retrieve imaging metadata.

::::{tab-set}

:::{tab-item} Python Metadata
Python metadata is can be accessed with {func}`mbo_utilities.get_metadata()`.

```python
objective_resolution: 157.5000
center_xy: [-15.2381 0]
size_xy: [3.8095 38.0952]
num_pixel_xy: [144 1200]
image_length: 2478
image_width: 145
num_planes: 30
num_rois: 4
num_frames: 1730
frame_rate: 9.608
fov: [600 600]
pixel_resolution: 1.0208
sample_format: 'int16'
```

:::

:::{tab-item} MATLAB Metadata

MATLAB metadata can be retrieved with the [get_metadata()](https://millerbrainobservatory.github.io/LBM-CaImAn-MATLAB/api/utility.html#get_metadata) utility funciton.

```MATLAB

   >> get_metadata(fullfile(extract_path, "MH184_both_6mm_FOV_150_600um_depth_410mW_9min_no_stimuli_00001_00001.tiff"))

    ans =

      metadata contents:
             tiff_length = 2478
             tiff_width = 145
             roi_width_px = 144
             roi_height_px = 600
             num_rois = 4
             num_frames = 1730
             num_planes = 30  % stored in scanimage as channels 
             num_files = 1
             frame_rate = 9.60806
             fov = [600;600]
             pixel_resolution = 1.02083
             sample_format = int16
             raw_filename = high_res
             raw_filepath = C:\Users\RBO\caiman_data
             raw_fullfile = C:\Users\RBO\caiman_data\high_res.tif
             dataset_name = /Y
             trim_pixels = [6;6;17;0]
             % below used internally
             num_pixel_xy = [144;600]
             center_xy = [-1.428571429;0]
             line_period = 4.15652e-05
             scan_frame_period = 0.104079
             size_xy = [0.9523809524;3.80952381]
             objective_resolution = 157.5
             num_lines_between_scanfields = 24
```

:::

::::

(array_terms)=
### Array Terminology

Light-beads microscopy is a 2-photon imaging paradigm based on [ScanImage](https://docs.scanimage.org/index.html) acquisition software.

| Dimension | Description |
|-----------|-------------|
| [X, Y]    | 2D plane    |
| [X, Y, Z] | z-stack     |
| [X, Y, T] | 2D timeseries |
| [X, Y, Z, T] | 3D timeseries|

