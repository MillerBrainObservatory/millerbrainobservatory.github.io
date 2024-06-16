.. MBO documentation master file, created by
   sphinx-quickstart on Sun Jun 16 12:54:05 2024.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.

MBO Compute Hub!
==================

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

- Repository: |LCM Repo|
- Documentation: :external:ref:`LBM-CaImAn-MATLAB Documentation`_

CaImAn Python
----------------

- Repository: |LCP Repo|
- Documentation: :external:ref:`LBM-CaImAn-Python Documentation`_

.. toctree::
   :maxdepth: 3
   :caption: Section Navigation:

   Guides <user_guide/index>
   Pipelines <pipelines/index>

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

/docs/_static: This is where images, videos, media will go. Along with CSS and logos/icons
/docs/_static/_images: This is where images go
/docs/_static/_videos: This is where videos go
docs/_templates: dont touch this, it makes our website pretty and organized

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


.. |LCM Docs| image:: https://img.shields.io/badge/LBM%20Documentation-1f425f.svg
   :target: https://millerbrainobservatory.github.io/LBM-CaImAn-MATLAB/

.. |LCM Docs| image:: https://img.shields.io/badge/Documentation-1f425f.svg
   :target: https://millerbrainobservatory.github.io/LBM-CaImAn-Python/
   :alt: Documentation

.. |LCP Discussions| image:: https://img.shields.io/badge/Discussions-black?style=plastic&logo=github&logoColor=white&link=https%3A%2F%2Fgithub.com%2Forgs%2FMillerBrainObservatory%2Frepo2%2Fdiscussions
   :target: https://github.com/orgs/MillerBrainObservatory/LBM-CaImAn-Python/discussions
   :alt: Discussions

.. |LCP Issues| image:: https://img.shields.io/github/issues/MillerBrainObservatory/LBM-CaImAn-Python.svg
   :target: https://github.com/MillerBrainObservatory/LBM-CaImAn-Python/issues
   :alt: Issues

.. |LCP PRs| image:: https://img.shields.io/github/issues-pr/MillerBrainObservatory/LBM-CaImAn-Python.svg
   :target: https://github.com/MillerBrainObservatory/LBM-CaImAn-Python/pulls
   :alt: Pull Requests

.. |LCP Last Commit| image:: https://img.shields.io/github/last-commit/MillerBrainObservatory/LBM-CaImAn-Python.svg
   :target: https://github.com/MillerBrainObservatory/LBM-CaImAn-Python/commits
   :alt: Last Commit

.. |LCP Docs| image:: https://img.shields.io/badge/Documentation-1f425f.svg
   :target: https://millerbrainobservatory.github.io/LBM-CaImAn-Python/
   :alt: Documentation


.. |MBO Discussions| image:: https://img.shields.io/badge/Discussions-black?style=plastic&logo=github&logoColor=white&link=https%3A%2F%2Fgithub.com%2Forgs%2FMillerBrainObservatory%2Fdiscussions
   :target: https://github.com/orgs/MillerBrainObservatory/discussions
   :alt: Discussions

.. |MBO Homepage| image:: https://img.shields.io/badge/MBO--Homepage-black?style=flat-square&logo=mega&logoColor=white&labelColor=black&color=black
   :target: https://mbo.rockefeller.edu/
   :alt: MBO Homepage

