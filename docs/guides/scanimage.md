# LBM Datasets

## ScanImage multi-ROI Recordings

ScanImage [mROI (Multi Region Of Interest)](https://docs.scanimage.org/Premium+Features/Multiple+Region+of+Interest+(MROI).html) outputs raw `.tiff` files made up of individual `Regions of Interest (ROI's)`.
In the raw output, these `ROIs` are vertically concatenated independent of their actual scan locations.
The location of each ROI is stored as a pixel coordinate used internally by the respective pipeline to orient each strip.

## Terms

Light-beads microscopy is a 2-photon imaging paradigm based on [ScanImage](https://docs.scanimage.org/index.html) acquisition software.

In its raw form, data is saved as a 3-dimensional multi-page tiff file. Each image within this tiff file represents a page of the original document.

## Frame Ordering

ScanImage saves the 4D volume with each plane interleaved, e.g.

- frame0 = time0_plane1
- frame1 = time0_plane2
- frame2 = time0_plane3
- frame3 = time1_plane1
- frame4 = time1_plane2

... and so on.


## ScanImage metadata

Each pipeline comes stocked with methods to retrieve imaging metadata.

::::{tab-set}

:::{tab-item} Python Metadata
Python metadata is stored in the {ref}`scanreader` class.

```python
objective_resolution: 157.5000
center_xy: [-15.2381 0]
size_xy: [3.8095 38.0952]
num_pixel_xy: [144 1200]
image_length: 11008
image_width: 145
num_planes: 30
num_rois: 9
num_frames: 1176
frame_rate: 2.1797
fov: [600 6000]
pixel_resolution: 4.5833
sample_format: 'int16'
```

:::

:::{tab-item} MATLAB Metadata

MATLAB metadata can be retrieved with the {ref}`core.utils.get_metadata()` utility funciton.

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
             num_planes = 30A  % stored as scanimage channels
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


<!-- .. code-block:: MATLAB -->



num_pixel_xy
: The number of pixels in each `ROI`. This can very from the actual tiff image size.

`fov`
: The total image size, in micron (`um`).

`image_length`/`image_width`
: The total **tiff** size, in pixels (`px`).

`pixel_resolution`
: The size, in micron, of each pixel.

> **Note:**
> With multi-ROI tiffs, the size of your tiff given by `image_size` is likely different from the number of pixels in x and y. This is due to the time it takes the scanner to move onto subsequent ROI's not being accounted for in `num_pixel_xy`. Internally, each pipeline checks for these metadata attributes and adjusts the final image accordingly.

## LBM Dimensionality Semantics

| Dimension | Description |
|-----------|-------------|
| [X, Y] | Image / 2D Plane / Frame / Field / ScanField |
| [X, Y, Z] | 3D-Stack, Z-Stack |
| [X, Y, T] | Time-Series of a 2D Plane, Planar-timeseries, Movie |
| [X, Y, Z, T] | Volumetric Timeseries, Volume |

Before beginning the recording session, users have the option to split frames in the recording across multiple `.tiff` files. This option is helpful as it requires less work in post-processing to ensure there isn't too much computer memory being used.

![ScanImage Data Log GUI](../_images/si-data-log-gui.png)

[ScanImage](https://docs.scanimage.org/index.html)
[multi Region of Interest](https://docs.scanimage.org/Premium%2BFeatures/Multiple%2BRegion%2Bof%2BInterest%2B%28MROI%29.html#multiple-region-of-interest)
