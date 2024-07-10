.. MBO documentation master file, created by
   sphinx-quickstart on Sun Jun 16 12:54:05 2024.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.

.. _mbo_hub:

Miller Brain Observatory: Compute Ecosystem
==============================================

A hub for tutorials, guides and resources for computational image processing.

.. toctree::
    :maxdepth: 2
    :caption: Contents:
    :glob:

    guides/index
    dev/index

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

MBO Technology Stack
=======================

Choosing a technology stack for a project is subjective and dynamic. The technology that works now
may not work as more pipelines are built and included in the documentation. Maintainability is also a concern; your
repository is only as maintainable as the team you have to maintain it.

For these reasons, the list of tools used in the MBO is kept as simple as possible while maintaining effective
documentation and resources. Let `git` handle all tasks and workflows that may have more "mature" alternatives i.e. travisCI, circleCI.
This is the motivation against using `ReadTheDocs <https://www.ReadTheDocs.org>`_ as `github-pages <https://pages.github.com/>`_ has the same
functionality, albeit with a few more lines of code and technical expertise required in handling the `github-workflows`.


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

.. Docs ----------------

.. |DOCS LCM| image:: https://img.shields.io/badge/LBM-CaImAn-MATLAB%Repo-1f425f.svg
   :target: https://millerbrainobservatory.github.io/LBM-CaImAn-MATLAB/
   :alt: Lbm-CaImAn-MATLAB Documentation

.. |DOCS LCP| image:: https://img.shields.io/badge/LBM%20Documentation-1f425f.svg
   :target: https://millerbrainobservatory.github.io/LBM-CaImAn-Pthon/
   :alt: Lbm-CaImAn-Python Documentation

