# Server Guide

As a user of MBO servers you will be given a login and a password to a Windows Server 2022 desktop.

This login will give you access to all of the resources of that server, shared with a limited number of other users.

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

## Logging out

```{warning}
If you don't properly sign-out, you will use more login-sessions than you are afforded and your account will need to be logged out forcefully.
```

To make sure you don't use more login-sessions than you are afforded, save your work and sign-out immediately after your session:

```{figure} ../_images/rdp_sign_out.png
```

## Filesystem

Each server has an `ID` that prepends the computer name. For example, a compute workstation will have W followed by a number.
An aquisition system will have C followed by a number.
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
Users should not browse the internet on the compute server, browsing should be done on your local machine only.
A browser is available for Jupyter notebooks, but internet access is discouraged.
```

## Software

### Python

Python is distributed for each user using [uv](https://docs.astral.sh/uv/getting-started/features/) and [miniforge3](https://github.com/conda-forge/miniforge).

A default `Python 3.10` is added to the system PATH and available by default. 

You can install additional versions on a per-environment basis:

```{code} bash
# uv is available to all users
uv python install 3.11
uv python install 3.12

# or in a conda environment
conda install -c conda-forge python=3.11

```

### `conda` (miniforge3)

Each user account has its own `Miniforge3` flavored `conda` installation at `C:/Users/miniforge3`.

This is your environment to install and reinstall as you please.

``` {warning}
*DO NOT* install any software in the base environment as that will cause conflicts between all installed environments and require a reinstallation of miniforge3.
```

The recommended method for interacting with `conda` is the `miniforge_prompt`.

```{figure} ../_images/miniforge_prompt.png
```

### Other Software

- Fiji / imageJ
- Visual Studio Code
- Visual Studio
- git bash
- wezterm
- OBS Studio

Contact a server administrator to inquire about adding additional software.

## Connecting to Network Servers

Computers on the Rockefeller network (with network discoverability turned on) can be accessed as follows:

```{figure} ../_images/rdp_access_other_server.png
```

```{warning}

MBO servers are not on the rockefeller domain, so you will not be able to map them to a drive on another system.

You can, however, map a drive on the MBO server e.g. your labs directory that IS on the rockefeller network.
```

You will be prompted for username/password credentials the first time you connect.

If you access this location often, you can map it to a drive letter:

```{figure} ../_images/rdp_map_drive.png
```

From `This PC`:
1. Map Network Drive (top file ribbon)
2. Click "Next"
3. Choose a custom network location
4. Enter share location `\\server\folder_name`
5. Give drive a name 
6. Click "Finish"

You now have access to this network location to transfer data to/from MBO servers.

```{figure} ../_images/rdp_map_drive_res.png
```

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
You may want ssh access to install personal software, transfer files, or navigate the Windows filesystem.

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

All you need to do is send that file to an MBO admin.

## Server Hardware 

:::{table} RBO-W1 Hardware Summary
:name: hardware-summary
:align: center

| Component      | Specification                                                                      |
| -------------- | ---------------------------------------------------------------------------------- |
| Memory         | 1536 GB total (1509.75 GB available)                                               |
| Processors     | 2× Intel64 Family 6 Model 143 Stepping 8 (32 cores / 64 threads each)               |
| GPUs           | 2× NVIDIA RTX A5000 NVLINK                                          |
| Disks          | 6× NVMe SSDs (2× Micron 7450 @ 3.58 TB, 4× Samsung MZ7L37T6HBLA @ 7.15 TB)         |
| Disk Interface | NVMe PCIe                                                                              |

:::

