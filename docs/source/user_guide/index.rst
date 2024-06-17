
Contibutors Guide (Docs)
****************************

Guides for MBO users and developers about topics not directly related to a specific pipeline.

For instance, our light beads microscopy python/matlab pipelines share a large proportion of the documentation.

Requirements
==============

Documentation for this compute hub and the various pipelines are build using the following tools:

- python
- pip
- conda
- sphinx
- github actions

Thats it! The first three should be familiar, python with its two most popular package managers (we use `conda` for everything that we can, and fallback to `pip`). These are needed because `Sphinx <https://www.sphinx-doc.org/en/master/index.html>`_ uses a python environment
to import our python `modules`, `classes`, `functions`. It does this by looking for the `directives <https://www.sphinx-doc.org/en/master/usage/restructuredtext/directives.html>`_

It is my strong opinion that simpler the better when it comes to documentation tools. At the end of the day, it's just raw html, and should be accessible from any browser environment on any device.

Contents
===================

.. toctree::
    :maxdepth: 1

    Building <build_docs>
    Deployment <deploy_docs>
    Workflow Details <workflow_docs>
    Create a Doc <adding_docs>

