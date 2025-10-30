# Server Guide

As a user of MBO servers, you will be given a login to MBO servers, which will give you access to the servers.

## Guidelines

- *Log out from Windows after each session.*
- Store raw and processed data in your allocated user space `ID_USER_DATA`.
- Delete unused data when no longer needed to conserve shared storage.
- Do not browse the internet on the MBO servers.
- Do not install software on your own. Consult with the MBO admins with a request.

## Connecting with RDP

MBO processing servers are accessible via Microsoft Remote Desktop Protocol (RDP).

There are a few common applications, depending on your operating system:

- [Remote Desktop Connection (Windows)](https://aka.ms/RDSetup)
- [Remmina (Linux)](https://remmina.org/)
- [HelpWire (Linux, Mac, Windows)](https://www.helpwire.app/)

### via Windows App

You will need the following information to access the servers:

- Server IP address
- Username
- Password

```{figure} ../_images/rdp_base.png
```

To add an MBO User Account:

- Add (+) -> PC
- Enter IP address (XXX.XX.X.XX) in `PC name`
- Enter Username in `User account`
- Enter Password in `Password`
- Choose an optional display name

```{figure} ../_images/rdp_certif.png
Accept the certificate notification popup to continue connecting to your MBO server.
```

You should now be able to connect to the MBO servers!

## Development Environment

### Organize Your Code

Keep all related analysis projects in a single directory for consistency.  
For example:

```bash
cd "C://Users//MBO-User//projects"
```

You can also choose another folder such as `C://Users//MBO-User//code`.

---

### Terminal

We recommend `Windows Terminal` (which should be pinned to taskbar).
You can also use VSCode or Pycharms integrated terminals.

If there is a terminal you'd like to try, please contact an administrator on slack.

```{warning}

On Windows, when copy-pasting a filepath into the terminal, you may have to change forward slashes ('/') to either double forward ('//') or single back ('\') slashes.

This is also why all python examples with filepaths as strings use r"path/to/file", to allow the single slash.

```

```bash
PS C:\Users\MBO-Delta\projects> cd .\my_project\
PS C:\Users\MBO-Delta\projects\my_project> ls


    Directory: C:\Users\MBO-Delta\projects\my_project


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
d-----        10/21/2025  11:59 AM                .venv
-a----        10/21/2025  11:59 AM            109 .gitignore
-a----        10/21/2025  11:59 AM              7 .python-version
-a----        10/21/2025  11:59 AM             88 main.py
-a----        10/21/2025  12:00 PM            220 pyproject.toml
-a----        10/21/2025  11:59 AM              0 README.md
-a----        10/21/2025  12:00 PM         645708 uv.lock


PS C:\Users\MBO-Delta\projects\my_project>

```

---

### Create a Project Environment

We recommend using **uv** for managing Python environments and dependencies.

Alternative tools like Conda or `venv` also work, but are not covered here.

See the [venv documentation](https://millerbrainobservatory.github.io/mbo_utilities/venvs.html) for details.

You can set up your environment in two ways:

#### Option 1 – Standard `pip`

```bash
uv venv --python 3.12.9
```

This creates a `.venv` folder that contains all dependencies.

Make sure to incldue the python version, otherwise it will default to `python 3.13`.

Install packages as you need them:

```bash

uv pip install mbo_utilities lbm_suite2p_python napari

```

#### Option 2 – Managed Project with pyproject.toml (Recommended)

`uv init` will set up a `.venv` folder, a `pyproject.toml` and a `uv.lock` to initialize a "project".

1. `.venv`: This is where your environment lives, created during `uv init` and `uv venv`.
2. `pyproject.toml`: file that stores your dependencies e.g. "numpy==2.0.0"
3. `uv.lock` : file that stores exact versions and branches of your current dependency tree. This file allows your current environment as it stands to be usable on any platform.

```bash

uv init --python 3.12.9

```

With `uv pip install <PACKAGE>`, if you ever break your environment, that package will be lost.

It is much more forgiving to instead `uv add <PACKAGE>`, which makes sure the package fits with the rest of your environment and adds the proper version to `pyproject.toml`.

```bash

uv add mbo_utilities lbm_suite2p_python napari

```

Creating a new project is as simple as:

```bash

PS C:\Users\MBO-Delta\projects> mkdir test_project


    Directory: C:\Users\MBO-Delta\projects


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
d-----        10/28/2025   9:19 PM                test_project

PS C:\Users\MBO-User\projects> uv init
Initialized project `projects`

PS C:\Users\MBO-Delta\projects> uv add mbo_utilities lbm_suite2p_python
Using CPython 3.13.5
Creating virtual environment at: .venv
Resolved 276 packages in 1.26s
      Built scanimage-tiff-reader==1.4.1.4
Prepared 50 packages in 15.52s
Installed 254 packages in 5.48s

```

Because of the uv cache, you can delete your environment and reset nearly instantly:

```bash
rm -r .venv
uv sync
```

This restores the environment exactly as defined in `pyproject.toml`.

### VS Code

Most IDE's like VSCode and Pycharm will automatically detect environments when you open a folder that contains a `.venv` directory, which happens when you run `uv venv --python 3.12.9`.

If your environment isn't being detected automatically, you can:

1. Run `code .` from a terminal already inside your project

2. Enter the path manually with Cntl + Shift + P -> Python: Select Interpreter -> Enter interpreter path -> Browse -> Navigate to `C://Users//MBO-User//projects`

Option 2 is also useful for using an environment stored elsewhere, e.g. `D://W1_SOFT//envs`, where we plan to keep stable environments in the future.

### Jupyter

Jupyter is easist to set up on the terminal.

Set a password for this jupyter session:

``` bash

uv run jupyter server password

```

From within `my_project`:

``` bash

uv run jupyter lab

```

### Pycharm

Pycharm is particularly useful for it's debugger, which when used properly will make even the most complicated analysis easy to manage. Pycharm is available to all MBO Server Users.

If you don't know how to use a debugger and have a need for it, we can get you started and set up a debugging environment.

Tutorial documentation coming soon.

## Logging out

```{warning}

If you don't properly sign-out, you will use more login-sessions than you are afforded and your account will need to be logged out forcefully.

```

To sign out, Windows Menu -> Username -> Sign Out

## Filesystem

Each server has an `ID` that prepends the computer name.

Each directory for this system will have this ID prepended to the directory name.

``` {warning}

Both workstation and compute file-systems are *NOT* backed up.

Users should have their own copies of all data on MBO servers.
```

The `D:` drive is **read-only** and contains:
- `D:/ID_SOFT/repos`  : Data processing software
- `D:/ID_SOFT/apps`  : Applications
- `D:/ID_DATA/username`  : Raw data that users will frequenly access will be saved here.

The `E:` drive is the user sandbox, with a directory `E:/ID_USER_DATA/username` for each user.

This is where your intermediate results should go.

``` {admonition} Internet Access

Users are strongly discouraged to browse the internet on the compute server, browsing should be done on your local machine only.
A browser is available for Jupyter notebooks, but internet access is discouraged.

```

### Other Software

- MATLAB
- Fiji / ImageJ
- Irfanview (photo/video viewer)
- git bash
- wezterm

Contact a server administrator to inquire about adding additional software.

Please do not install software without consulting an MBO admin.

## Connecting to Network Servers

Computers on the Rockefeller network (with network discoverability turned on) can be accessed via SMB as `\\server-name` or `\\ip-address`.

```{figure} ../_images/rdp_access_other_server.png
```

You will be prompted for username/password credentials the first time you connect.

## SSH Connections

:::{dropdown} TLDR
:chevron: down-up
:animate: fade-in-slide-down
:name: ssh-dropdown

Generate a new ssh key:

```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
```

Send the `.pub` output to an MBO administrator.

:::

[`ssh`](https://learn.microsoft.com/en-us/windows/terminal/tutorials/ssh) is a communication protocol that will allow you to access MBO servers from the command line.  

To establish a connection, the computer you are connecting from (the 'client') must have a private ssh key.

[This guide](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent?platform=windows) provides an example of generating this key to authenticate github.com, but the process is the same.

This process will generate 2 files: 

::::{grid} 2

:::{grid-item-card} Private key
- `ed25519`
- Never share this
- Stored in your `.ssh/` folder
:::

:::{grid-item-card} Public key
- `ed25519.pub`
- This is what you send to MBO
- Can be safely shared
:::

::::

Depending on the algorithm you choose, the filename may be different.  
What matters is that the `.pub` file (e.g. `ed25519.pub`) is installed on the MBO servers.  

Talk to an MBO admin to add your ssh-key to the server.

<!-- ## Server Hardware  -->
<!---->
<!-- :::{table} MBO Hardware Summary -->
<!-- :name: hardware-summary -->
<!-- :align: center -->
<!---->
<!-- | Component      | Specification                                                                      | -->
<!-- | -------------- | ---------------------------------------------------------------------------------- | -->
<!-- | Memory         | 1536 GB total (1509.75 GB available)                                               | -->
<!-- | Processors     | 2× Intel64 Family 6 Model 143 Stepping 8 (32 cores / 64 threads each)               | -->
<!-- | GPUs           | 2× NVIDIA RTX A5000 NVLINK                                          | -->
<!-- | Disks          | 6× NVMe SSDs (2× Micron 7450 @ 3.58 TB, 4× Samsung MZ7L37T6HBLA @ 7.15 TB)         | -->
<!-- | Disk Interface | NVMe PCIe                                                                              | -->
<!---->
<!-- ::: -->

