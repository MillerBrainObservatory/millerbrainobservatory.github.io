# Developer Guide

Documentation for this compute hub and the various pipelines are built using the following tools:

- python
- pip
- conda
- sphinx
- github actions

That's it! The first three should be familiar—Python with its two most popular package managers (we use `conda` for everything that we can, and fallback to `pip`). These are needed because [Sphinx](https://www.sphinx-doc.org/en/master/index.html) uses a Python environment to import our Python `modules`, `classes`, and `functions`.

## Contents

```{toctree}
:maxdepth: 2
:caption: Documentation:

doc/adding_docs
doc/workflow_docs
doc/building_docs

:maxdepth: 2
:caption: Versioning:

ver/gh_pr_naming.md
ver/gh_branch_workflow.md

Building for PyPI

From within the directory of the package you want to build/upload to PyPI:

cd package 

conda create -n build python=3.10 twine

conda activate build

pip install build

python -m build

MBO Technology Stack

Choosing a technology stack for a project is subjective and dynamic. The technology that works now may not work as more pipelines are built and included in the documentation. Maintainability is also a concern; your repository is only as maintainable as the team you have to maintain it.

For these reasons, the list of tools used in the MBO is kept as simple as possible while maintaining effective documentation and resources. Let git handle all tasks and workflows that may have more "mature" alternatives (e.g. TravisCI, CircleCI). This is the motivation for not using ReadTheDocs since github-pages offers the same functionality—with a few more lines of code and technical expertise required for handling the GitHub workflows.

---

### How to Create the File

1. **Open your text editor** (such as VS Code, Notepad, or any editor you prefer).
2. **Create a new file** and paste the text from above into it.
3. **Save the file** as `developer_guide.md` in your desired directory.

This file is now ready to use in your documentation system or to be shared as needed.

If you need any further assistance, please let me know!
