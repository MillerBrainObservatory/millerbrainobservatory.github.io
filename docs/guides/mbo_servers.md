# Server Guide

As a user of MBO servers, you will be given a login to MBO servers, which will give you access to the servers.

## Guidelines

- Store raw and processed data in your allocated user space `ID_USER_DATA`.
- Delete unused data when no longer needed to conserve shared storage.
- Do not browse the internet on the MBO servers.
- Do not install software on your own. Consult with the MBO admins with a request.
- *Log out from Windows after each session.*

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

### Python Setup

We recommend using **uv** for managing Python environments and dependencies.

Alternative tools like Conda or `venv` also work, but are not covered here.  
See the [venv documentation](https://millerbrainobservatory.github.io/mbo_utilities/venvs.html) for details.

---

### Organize Your Code

Keep all related analysis projects in a single directory for consistency.  
For example:

```bash
cd "C://Users//MBO-User//projects"
```

You can also choose another folder such as `C://Users//MBO-User//code`.

---

### Create a Project Environment

You can set up your environment in two ways:

#### Option 1 – Basic Virtual Environment
```bash
uv venv --python 3.12.9
```
This creates a `.venv` folder that contains all dependencies.  
Install packages as you normally would:
```bash
uv pip install mbo_utilities
```

#### Option 2 – Managed Project with pyproject.toml
```bash
uv init --python 3.12.9
```
This also creates a `.venv` but includes a **`pyproject.toml`** file that tracks dependencies.  
To add packages:
```bash
uv add mbo_utilities
```
The exact version is saved to `pyproject.toml`, allowing your environment to be rebuilt later.  
To reset your setup, delete `.venv` and run:
```bash
uv sync
```
This restores the environment exactly as defined in `pyproject.toml`.

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

## Software

### Python

Each user has access to [uv](https://docs.astral.sh/uv/getting-started/features/) and [miniforge3](https://github.com/conda-forge/miniforge) for managing python installations and environments.

``` bash
USER@SERVER MINGW64 ~/repos
$ which uv
/c/Users/USER/.local/bin/uv

USER@SERVER MINGW64 ~/repos
$ which conda
/c/Users/USER/miniforge3/Scripts/conda
```

There are important differences to consider depending on whether you use `uv` or `conda` to manage environments.

See the mbo [guide on virtual environments](https://millerbrainobservatory.github.io/mbo_utilities/venvs.html) to learn more.

``` {warning}
For `conda`, *DO NOT* install any software in the base environment as that will cause conflicts between all installed environments and require a reinstallation of miniforge3.
```

The recommended method for interacting with `conda` is the `miniforge_prompt` (other terminals will work but consistent behavior is not guaranteed).

`UV` should be accessible from any terminal you choose.

### Other Software

- MATLAB
- Fiji / ImageJ
- Visual Studio Code
- git bash
- wezterm

Contact a server administrator to inquire about adding additional software. Please do not install software without consulting an MBO admin.

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

