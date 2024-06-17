=========================================
Building MBO Documentation
=========================================

Development environments
========================

Before proceeding further it should be noted that the documentation is built
with the ``make`` tool, which is not natively available on Windows. MacOS or
Linux users can jump to :ref:`how-todoc.prerequisites`. It is recommended for
Windows users to set up their development environment on
GitHub Codespaces  or `Windows Subsystem for Linux (WSL) <https://learn.microsoft.com/en-us/windows/wsl/install>`_.
WSL is a good option for a persistent local set-up.

Update Docs
------------------

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

Submodules
~~~~~~~~~~

If you used `git` to install any pipelines, you should also update the git submodules that contain
additional parts required for building the documentation::

    git submodule update --init


Troubleshooting Docs
=====================

**Docs look good locally, 404 on site**

when docs look good locally but bad online, there is an issue with the github workflow.
On `github.com/repository` go to the `Actions` tab. The most recent deployment should be shown with a red X. Click on this X to see the error logs.
This is generally an issue with `docs/requirements.txt`. This document holds the dependencies to build documentation, and since our project builds locally and not
online, this is the usual suspect. The output of the github actions will tell you:

**ANY scientific library conflicts**

.. note::

    To get the latest scientific-python libraries for debugging or to create a new environment
    dependencies to build the docs locally::

        pip install --pre --force-reinstall --extra-index-url \
        https://pypi.anaconda.org/scientific-python-nightly-wheels/simple \
        -r requirements/doc_requirements.txt



Build Docs Locally
=========================

Now you are ready to generate the docs, so write::

    make html

.. note::

   Most debugging steps happen as a result of `make html`. This is where the build happens, and errors will display in your command line.

This will build NumPy from source if you haven't already, and run Sphinx to
build the ``html`` docs. If all goes well, this will generate a ``build/html``
subdirectory in the ``/doc`` directory, containing the built documentation.

Sometimes sphinx will cache files unexpectedly. In this case::

    `make clean && make html`

should do the trick.

