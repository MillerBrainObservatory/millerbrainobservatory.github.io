.. MBO documentation master file, created by
   sphinx-quickstart on Sun Jun 16 12:54:05 2024.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.

.. _mbo_hub:

.. _mbo guide:

############################################
Miller Brain Observatory: Compute Ecosystem
############################################

A hub for tutorials, guides and resources for computational image processing.

.. note::

   All examples used throughout this tutorial will be in reference to a demo dataset termed the 'high-resolution' dataset.
   This dataset contains 4 ROI's recorded at 9.6hz for 1730 frames over a 600x600um FOV.


.. toctree::
    :maxdepth: 2
    :caption: Contents:
    :glob:

    guides/index
    dev/index

Pipelines
================

LBM-CaImAn-MATLAB
------------------

|REPO LCM| | `LBM-Matlab Docs <https://millerbrainobservatory.github.io/LBM-CaImAn-MATLAB/index.html>`_

LBM-CaImAn-Python
------------------

|REPO LCP| | `LBM-Python Docs <https://millerbrainobservatory.github.io/LBM-CaImAn-Python/>`_

scanreader
------------------

- **Repository**: `scanreader repository <https://github.com/MillerBrainObservatory/LBM-CaImAn-Python>`_
- **Documentation**: `scanreader Docs <https://millerbrainobservatory.github.io/scanreader/>`_

External Resources
=======================

Software
--------------

- `flatironinstitute/CaImAn (MATLAB) github <https://github.com/flatironinstitute/CaImAn-MATLAB>`_ | `Wiki <https://github.com/flatironinstitute/CaImAn-MATLAB/wiki/Complete-analysis-pipeline>`_

- `flatironinstitute/CaImAn (python) github <https://github.com/flatironinstitute/CaImAn>`_ | `caimain Docs <https://caiman.readthedocs.io/en/latest/>`_

- `suite2p github <https://github.com/mouseland/suite2p>`_ | `suite2p Docs <https://suite2p.readthedocs.io/en/latest/>`_

Blogs and Posts
--------------------

- `What is deconvolution? (Suite2p docs) <https://suite2p.readthedocs.io/en/latest/FAQ.html#deconvolution-means-what>`_

- `Why your two-photon images are noisier than you expect <https://gcamp6f.com/2024/04/24/why-your-two-photon-images-are-noisier-than-you-expect/>`_

- `Interpreting Results of Calcium Denoising <https://gcamp6f.com/2022/08/23/self-supervised-denoising-of-calcium-imaging-data/>`_

- `Image.sc Forum <https://forum.image.sc/>`_


Indices and tables
==================

* :ref:`genindex`
* :ref:`modindex`
* :ref:`search`

.. |MBO Discussions| image:: https://img.shields.io/badge/Discussions-black?style=plastic&logo=github&logoColor=white&link=https%3A%2F%2Fgithub.com%2Forgs%2FMillerBrainObservatory%2Fdiscussions
   :target: https://github.com/orgs/MillerBrainObservatory/discussions
   :alt: Discussions

.. |MBO Homepage| image:: https://img.shields.io/badge/MBO--Homepage-black?style=flat-square&logo=mega&logoColor=white&labelColor=black&color=black
   :target: https://mbo.rockefeller.edu/
   :alt: MBO Homepage

.. Repos ---------------

.. |REPO LCM| image:: https://img.shields.io/badge/Repository-black?style=flat&logo=github&logoColor=white&logoSize=auto
   :target: https://github.com/MillerBrainObservatory/LBM-CaImAn-MATLAB
   :alt: Lbm-CaImAn-MATLAB Repository

.. |REPO LCP| image:: https://img.shields.io/badge/Repository-black?style=flat&logo=github&logoColor=white&logoSize=auto
   :target: https://github.com/MillerBrainObservatory/LBM-CaImAn-Python
   :alt: Lbm-CaImAn-Python Repository

