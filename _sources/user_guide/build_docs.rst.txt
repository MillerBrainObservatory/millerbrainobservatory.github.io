
Building Docs
*********************

Documentation for this compute hub and the various pipelines are build using the following tools:

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

Troubleshooting Docs
=====================

**Docs look good locally, 404 on site**
when docs look good locally but bad online, there is an issue with the github workflow.
On `github.com/repository` go to the `Actions` tab. The most recent deployment should be shown with a red X. Click on this X to see the error logs.
This is generally an issue with `docs/requirements.txt`. This document holds the dependencies to build documentation, and since our project builds locally and not
online, this is the usual suspect. The output of the github actions will tell you:

Directory Structure
=====================

(WIP) - Adding static-assets repo

Various self-documenting repositories have wildly variable structures to how their documentation is organized. We keep it simple and follow `numpy` and their documentation conventions.
Youll see tutorials on `sphinx-quickstart` as how to "get started" with sphinx. That is how these docs started.

`make html` produces:
docs/_build/html: this is the golden nugget
docs/_build/doctree: you dont need this until you want to preview exactly what objects are created for debugging

The workflow that manages where our `html` files go is `peaceitis' github action workflow <https://github.com/peaceiris/actions-gh-pages>`_

Selected branches and tags: Only branches and tags that match your specified name patterns can deploy to the environment.

If you specify releases/* as a deployment branch or tag rule, only a branch or tag whose name begins with releases/ can deploy to the environment.
(Wildcard characters will not match /. To match branches or tags that begin with release/ and contain an additional single slash, use release/*/*.) If you add main as a branch rule, a branch named main can also deploy to the environment`

