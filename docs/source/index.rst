.. MBO documentation master file, created by
   sphinx-quickstart on Sun Jun 16 12:54:05 2024.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.

MBO Compute Hub!
==================

.. modified from Numpydocs index.rst

.. grid:: 1 1 2 2
    :gutter: 2 3 4 4

    .. grid-item-card::
        :img-top: index-images/getting_started.svg
        :text-align: center

        Pipelines
        ^^^

        New to coding? Check out the user guides.
        It contains collections of MBO explinations and resources.

        +++

        .. button-ref:: user/absolute_beginners
            :expand:
            :color: secondary
            :click-parent:

            To the absolute beginner's guide

    .. grid-item-card::
        :img-top: index-images/user_guide.svg
        :text-align: center

        Guides
        ^^^

        The user guide provides in-depth information on the
        key concepts of NumPy with useful background information and explanation.

        +++

        .. button-ref:: user
            :expand:
            :color: secondary
            :click-parent:

            To the user guide

    .. grid-item-card::
        :img-top: index-images/api.svg
        :text-align: center

        API (WIP)
        ^^^

        The reference guide contains a detailed description of the functions,
        modules, and objects included in NumPy. The reference describes how the
        methods work and which parameters can be used. It assumes that you have an
        understanding of the key concepts.

        +++

        .. button-ref:: reference
            :expand:
            :color: secondary
            :click-parent:

            To the API

    .. grid-item-card::
        :img-top: index-images/contributor.svg
        :text-align: center

        Contributors
        ^^^

        Want to add to the codebase? Can help add translation or a flowchart to the
        documentation? The contributing guidelines will guide you through the
        process of improving NumPy.

        +++

        .. button-ref:: devindex
            :expand:
            :color: secondary
            :click-parent:

            To the contributor's guide


A central repository for all Miller Brain Observatory computational resources.

**Disclaimer**

Choosing a technology stack for a project is subjective and dynamic. The technology that works now
may not work as more pipelines are built and included in the documentation. Maintainability is also a concern; your
repository is only as maintainable as the team you have to maintain it.

For these reasons, the list of tools used in the MBO is kept as simple as possible while maintaining effective
documentation and resources. Let `git` handle all tasks and workflows that may have more "mature" alternatives i.e. travisCI, circleCI.
This is the motivation against using `ReadTheDocs <https://www.ReadTheDocs.org>`_ as `github-pages <https://pages.github.com/>`_ has the same
functionality, albeit with a few more lines of code and technical expertise required in handling the `github-workflows`.

CaImAn MATLAB
------------------

- Repository: |REPO LCM|
- Documentation: :ref:`lbm_cm`_

CaImAn Python
----------------

- Repository: |REPO LCP|
- Documentation: :external:`lbm_cp`_

.. toctree::
   :maxdepth: 3
   :caption: Section Navigation:

   Guides <user_guide/index>
   Pipelines <user_guide/index>

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

Troubleshooting
=====================

**Docs look good locally, 404 on site**
when docs look good locally but bad online, there is an issue with the github workflow.
On `github.com/repository` go to the `Actions` tab. The most recent deployment should be shown with a red X. Click on this X to see the error logs.
This is generally an issue with `docs/requirements.txt`. This document holds the dependencies to build documentation, and since our project builds locally and not
online, this is the usual suspect. The output of the github actions will tell you:

.. image:: https://github.com/MillerBrainObservatory/static-assets/blob/master/img/version_control/gh_actions_workflows.png

.. thumbnail:: https://github.com/MillerBrainObservatory/static-assets/blob/master/img/version_control/gh_actions_workflows.png

Directory Structure
=====================

Various self-documenting repositories have wildly variable structures to how their documentation is organized. We keep it simple and follow `numpy` and their documentation conventions.
Youll see tutorials on `sphinx-quickstart` as how to "get started" with sphinx. That is how these docs started.

`make html` produces:
docs/_build/html: this is the golden nugget
docs/_build/doctree: you dont need this until you want to preview exactly what objects are created for debugging


The workflow that manages where our `html` files go is `peaceitis' github action workflow <https://github.com/peaceiris/actions-gh-pages>`_

elected branches and tags: Only branches and tags that match your specified name patterns can deploy to the environment.

If you specify releases/* as a deployment branch or tag rule, only a branch or tag whose name begins with releases/ can deploy to the environment.
(Wildcard characters will not match /. To match branches or tags that begin with release/ and contain an additional single slash, use release/*/*.) If you add main as a branch rule, a branch named main can also deploy to the environment`

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

