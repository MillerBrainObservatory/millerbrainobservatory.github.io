Developer Guide
###################

Documentation for this compute hub and the various pipelines are build using the following tools:

- python
- pip
- conda
- sphinx
- github actions

Thats it! The first three should be familiar, python with its two most popular package managers (we use `conda` for everything that we can, and fallback to `pip`). These are needed because `Sphinx <https://www.sphinx-doc.org/en/master/index.html>`_ uses a python environment
to import our python `modules`, `classes`, `functions`. It does this by looking for the `directives <https://www.sphinx-doc.org/en/master/usage/restructuredtext/directives.html>`_

.. toctree::
    :maxdepth: 2
    :caption: Documentation:

    doc/adding_docs
    doc/workflow_docs
    doc/building_docs


.. toctree::
    :maxdepth: 2
    :caption: Versioning:

    ver/gh_pr_naming.md
    ver/gh_branch_workflow.md
