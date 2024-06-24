.. MBO documentation master file, created by
   sphinx-quickstart on Sun Jun 16 12:54:05 2024.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.

.. _mbo_hub:

Miller Brain Observatory: Compute Ecosystem
==============================================

A central place for the

Here we can include language-agnostic documentation and tutorials.

We can import entire files to show examples for different languages:

.. tab-set-code::

    .. literalinclude:: ./imported_code_example.py
        :language: python

    .. code-block:: MATLAB

        a = 1;


These can link places within this doc and to our other repos:

Start
--------

.. grid:: 1 1 2 2
    :gutter: 2 3 4 4

    .. grid-item-card::
        :img-top: index-images/getting_started.svg
        :text-align: center

        Pipelines
        ^^^

        Get right into the pipleines. Each pipeline contiains its own
        self contained documentation. There are a few options to render it here.
        Two main ones: link to another url, build docs to this branch via github-actions
        with a token and render them directly here.

        +++

        .. button-ref:: user/absolute_beginners
            :expand:
            :color: secondary
            :click-parent:

            To the Pipelines

    .. grid-item-card::
        :img-top: index-images/user_guide.svg
        :text-align: center

        Guides
        ^^^

        The user guides provide walkthroughs on key concepts related
        to any technology MBO users may enounter. This section should
        be expanded upon as the MBO progresses.

        +++

        .. button-ref:: user
            :expand:
            :color: secondary
            :click-parent:

            To the user guide


MBO Technology Stack
=======================

Choosing a technology stack for a project is subjective and dynamic. The technology that works now
may not work as more pipelines are built and included in the documentation. Maintainability is also a concern; your
repository is only as maintainable as the team you have to maintain it.

For these reasons, the list of tools used in the MBO is kept as simple as possible while maintaining effective
documentation and resources. Let `git` handle all tasks and workflows that may have more "mature" alternatives i.e. travisCI, circleCI.
This is the motivation against using `ReadTheDocs <https://www.ReadTheDocs.org>`_ as `github-pages <https://pages.github.com/>`_ has the same
functionality, albeit with a few more lines of code and technical expertise required in handling the `github-workflows`.

.. toctree::
    :maxdepth: 3
    :caption: Section Navigation:
    :glob:

    Guides <guides/*>
    Resources <resources/index>

Requirements
----------------

- python
- pip
- conda
- sphinx
- github actions

Thats it! The first three should be familiar, python with its two most popular package managers (we use `conda` for everything that we can, and fallback to `pip`).

It is my strong opinion that simpler the better when it comes to documentation tools. At the end of the day, it's just raw html, and should be accessible from any browser environment on any device.

The workflow to update documentation is pretty simple.

.. note::

    This assumes you have a working version of `python3`, `conda/miniconda/anaconda`, and `pip`.
    Clone the repository:

.. code-block:: bash

   git clone +git@github.com:millerbrainobservatory/<REPOSITORY>.git
   cd docs
   make clean && make html

.. important::

   You need to activate the `conda` environment before calling `make clean` or `make html`.

The github action triggers for each `.yml` file within `root/.github/workflows/`. We have `build_and_deploy_docs.yml`, or some similar variation.

This file is organized into groups `-jobs` that do all of the work for us on github servers.

The first two lines:

.. code-block:: yaml

    name: build and deploy docs

    on: [push, pull_request, workflow_dispatch]


`name` is going to appear on `github.com <https://www.github.com>`_ in the `actions` tab, which shows us graphically the code executed from this workflow.`
`on` controls when the workflow is run.

These are the most common values to change. For a high level overview on the rest of the worflow:
- clone our github code,
- setup dependencies,
- use `Make` to build the docs
- push the html to a separate `gh-pages` branch
- trigger gh-pages to deploy our site to its servers with a build-in github workflow

see :ref:`gh_branch_workflow` for more details about the workflow.


Indices and tables
==================

* :ref:`genindex`
* :ref:`modindex`
* :ref:`search`


.. MBO ---------------

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

