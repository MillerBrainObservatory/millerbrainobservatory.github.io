Developer Guide
###################

Documentation for this compute hub and the various pipelines are build using the following tools:

- python
- pip
- conda
- sphinx
- github actions

Thats it! The first three should be familiar, python with its two most popular package managers (we use `conda` for everything that we can, and fallback to `pip`).
These are needed because `Sphinx <https://www.sphinx-doc.org/en/master/index.html>`_ uses a python environment to import our python `modules`, `classes`, `functions`.

Contents
==============

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

MBO Technology Stack
=======================

Choosing a technology stack for a project is subjective and dynamic. The technology that works now
may not work as more pipelines are built and included in the documentation. Maintainability is also a concern; your
repository is only as maintainable as the team you have to maintain it.

For these reasons, the list of tools used in the MBO is kept as simple as possible while maintaining effective
documentation and resources. Let `git` handle all tasks and workflows that may have more "mature" alternatives i.e. travisCI, circleCI.
This is the motivation against using `ReadTheDocs <https://www.ReadTheDocs.org>`_ as `github-pages <https://pages.github.com/>`_ has the same
functionality, albeit with a few more lines of code and technical expertise required in handling the `github-workflows`.

