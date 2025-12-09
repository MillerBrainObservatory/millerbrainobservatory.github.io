# Virtual Environments

This guide covers managing python environments with [UV](https://docs.astral.sh/uv/) and [conda](https://docs.conda.io/projects/conda/en/stable/user-guide/getting-started.html).

:::{admonition} TLDR
:class: dropdown

Install [uv](https://docs.astral.sh/uv/) and use it as a drop-in `pip` replacement.

```bash
uv venv --python 3.12.9
uv pip install <package>
```

:::

```{list-table} UV vs Conda: Common Environment Commands
:header-rows: 1
:widths: 20 40 40

* - **Action**
  - **UV**
  - **Conda**
* - Create environment
  - `uv venv --python=3.12.9`
  - `conda create -n myenv -c conda-forge python=3.12`
* - Create project
  - `uv init --python 3.12.9`
  - N/A**
* - Activate
  - `source .venv/bin/activate`
    `.venv/Scripts/activate`
  - `conda activate myenv`
* - Install package
  - `uv pip install <package>`
  - `conda install <package>`
* - Add/remove package
  - `uv add <package>` / `uv remove <package>`
  - (edit `environment.yml` or reinstall)
* - Sync with pyproject.toml
  - `uv sync --all-extras`
  - N/A**
* - Upgrade packages
  - `uv lock --upgrade`
    `uv sync --upgrade-package <pkg>`
  - `conda update <package>`
```

*\*Conda manages environments in the home directory (`~/miniforge3/envs/`), while `uv` environments are typically next to the code that uses them.*

*\*\*Project-based features require `uv init`. See {ref}`uv venv vs uv init <uv-venv-vs-init>` for details.*

---

(managing_uv)=
## Managing environments: `uv`

[uv](https://docs.astral.sh/uv/) is a drop-in replacement for `pip`. You just prefix commands:

```bash
pip install numpy   # old
uv pip install numpy # new
```

``` {tip}
With `uv`, re-creating your environment is fast thanks to [dependency caching](https://docs.astral.sh/uv/concepts/cache/#dependency-caching).
Deleting and recreating your environment is a valid solution for conflicts.
```

### Create an environment

```bash
uv venv --python 3.12.9
```

This creates a `.venv` folder in your current directory. Most IDEs (VSCode, PyCharm) will detect it automatically.

### Activate the environment

::::{tab-set}
:::{tab-item} Linux/macOS

```bash
source .venv/bin/activate
```

:::

:::{tab-item} Windows

```bash
.venv/Scripts/activate
```

:::
::::

```{note}
Activation is optional. If a `.venv` folder exists in your working directory, most tools will use it automatically.
```

### Create a project

For reproducible environments, initialize a project with `uv init`:

```bash
mkdir my_project
cd my_project
uv init --python 3.12.9
uv add mbo_utilities lbm_suite2p_python
```

This creates:
- `.venv/` — your environment
- `pyproject.toml` — your dependencies
- `uv.lock` — exact versions for reproducibility

To restore an environment from these files:

```bash
rm -r .venv
uv sync
```

(uv-venv-vs-init)=
### `uv venv` vs `uv init`

| Command | What it creates | Use case |
|---------|-----------------|----------|
| `uv venv` | `.venv/` only | Quick setup for experimentation or one-off scripts. |
| `uv init` | `.venv/` + `pyproject.toml` + `uv.lock` | Reproducible projects. Required for `uv add` and `uv sync`. |

**`uv venv`** creates just the virtual environment folder. Install packages with `uv pip install`, but they aren't tracked anywhere—if your environment breaks, you lose your package list.

**`uv init`** creates a full project structure:
- **`pyproject.toml`** — declares your dependencies (e.g., `mbo_utilities>=2.0`)
- **`uv.lock`** — locks exact versions for reproducibility across machines
- **`.venv/`** — the environment itself

With `uv init`, you can use `uv add <package>` which automatically resolves compatible versions and updates both files. To recreate the exact environment later: `uv sync`.

---

## Managing environments: `conda`

``` bash
conda create -n myenv -c conda-forge python=3.12
conda activate myenv
conda install <package>
```

```{warning}
Always activate your environment before installing packages. Otherwise packages install to the base environment, which often leads to conflicts.
```

For more details, see [conda: Managing Packages](https://docs.conda.io/projects/conda/en/latest/user-guide/tasks/manage-pkgs.html).

---

## Mixing `conda` and `uv`

`uv` will fallback to a conda environment if no `.venv` folder is found:

```bash
$ uv pip list | grep numpy
Using Python 3.12.6 environment at: /home/USER/miniforge3
numpy  2.0.0
```

We recommend disabling automatic conda activation:

``` bash
conda config --set auto_activate_base false
```

You can still use `conda activate myenv` when needed.

---

## Why `uv` over `conda`?

- Most Python libraries now ship prebuilt wheels — conda's main advantage (system binaries) is less relevant.
- `uv` is faster and caches dependencies.
- The conda maintainers themselves are moving toward venv-based tools (pixi).

If you **must** use conda, use `miniforge3`. Avoid mixing `pip install` and `conda install` after initial setup.

---

## Virtual environment options

There are many tools available. We recommend `uv` as the community is converging on it.

::::{grid}
:::{grid-item-card} System + Python
 conda,
 miniforge,
 mamba,
 pixi
:::

:::{grid-item-card} Python-only
 pip,
 venv,
 virtualenv,
 poetry,
 uv
:::
::::

---

## Debugging environments

Most Python issues come from environment mismanagement. Check terminal output for the Python path being used.

```{figure} ../_images/venv_jlab.png
```
