ImageJ / FIJI
=============================

Fiji is a version of ImageJ with "batteries included". To us, this includes several HDF5/Bioformat libraries that will help load our `.tiff` files.

Download Fiji for your platform `here <https://imagej.net/software/fiji/downloads>`_.

Although our data is in `.tiff` format, loading it in Fiji may seem abnormal because ImageJ has no knowledge of the dimensionality of our dataset.
Without metadata describing the dimensionality of your recording, Fiji This dataset sized `[1 x 1 x zT]`, where zT is the number of z-planes (for LBM, typically 15-28) interleaved with each other.

.. thumbnail:: ../_images/ij-stack-slice-manipulations.png

Load LBM data
***********************

To open your dataset:

- File > Open > ``select .tiff file`` > Open as Hyperstacks

.. thumbnail:: ../_images/ij-open.png

.. note::

    `virtual Hyperstacks` will only load frames as you need them and will significanly reduce the memory needed to load these files.

.. image:: ../_images/ij-raw.gif

Notice how the images don't display a timeseries, but sets z-stacks that get darker.

- Image > Stacks > Tools > Stack Splitter
- Number of Substacks: [enter the number of z-planes, 30 here]

This will give you num_plane separate [Y, X, T] stacks.

.. code-block:: JavaScript

    ImageJ Metadata:

    BitsPerPixel	16
    DimensionOrder	XYCZT
    IsInterleaved	false
    IsRGB	false
    LittleEndian	true
    PixelType	`int16`
    Series 0 Name	MH70_0p6mm_FOV_50_550um_depth_som_stim_199mW_3min_M1_00001_00001.tif
    SizeC	1
    SizeT	51900
    SizeX	145
    SizeY	2478
    SizeZ	1

