ScanImage Metadata
#######################

ScanImage `Multi Region Of Interest`_ (mROI) .tiff outputs are made up of individual sections called `ROIs`.
These `ROIs` collectively form a ScanImage `ScanField`. This scanfield is really just a set of metadata describing the size and location of our images.
The term ROI refers to a "subsection" of the 2D image in which the scanner momentarily stopped acquisition.

- `num_pixel_xy` are the number of pixels in each `ROI`.
- With there being 9 ROIs, we know our image is :math:`144x8=1296` pixels wide.

So that explains why is our `image_length` is so high compared to our `image_width`.

However, you'll notice :math:`1200x9=10800` is significanly less than our `image_height`.

This is because the scanner is actually moving to the next ROI, so we stop collecting data for that period of time.
`num_lines_between_scanfields` is calculated using this amount of time and is stripped during the horizontal concatenation.

.. list-table:: LBM Dimensionality Semantics
   :header-rows: 1

   * - Dimension
     - Description
   * - [X, Y]
     - Image / 2D Plane / Frame / Field / ScanField
   * - [X, Y, Z]
     - 3D-Stack, Z-Stack
   * - [X, Y, T]
     - Time-Series of a 2D Plane, Planar-timeseries, Movie
   * - [X, Y, Z, T]
     - Volumetric Timeseries, Volume

Before the beginning the recording session, users have the options to split frames in the recording accross multiple `.tiff` files. This option is helpful
as it requires less work in post-processing to ensure there isn't too much computer memory being used.

.. thumbnail:: _images/data_log_gui.png

.. _multi Region of Interest: https://docs.scanimage.org/Premium%2BFeatures/Multiple%2BRegion%2Bof%2BInterest%2B%28MROI%29.html#multiple-region-of-interest-mroi-imaging/
.. _mROI: `multi Region of Interest`_



