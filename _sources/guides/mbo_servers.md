# Server Guide

As a user of MBO servers you will be given a login and a password to on a Windows Server 2022 desktop to be used with windows remote desktop.
This login will give you access to all of the resources of that server, shared with a limited number of other users.

## Filesystem

!Note: Both workstation and compute file-systems are *NOT* backed up. Users should have a backup of all data on their own system.

The `D:` drive is **read-only** and contains 
- `D:/W1_SOFT/repos`  : Data processing software
- `D:/W1_SOFT/apps`  : Applications
- `D:/W!_DATA/username`  : Raw data that users will frequenly access will be saved here.

The `E:` drive will only contain a folder `E:/username` for each user. This is where your intermediate results should go.

!Note: Users should not browse the internet on the compute server, browsing should be done on your local machine only.

## Software

### miniforge3

Each user account has its own `Miniforge3` installation at `C:/Users/miniforge3`.

This is your environment to install and reinstall as you please. *DO NOT* install any software in the base environment as that will cause conflicts between all installed environments and require a reinstallation of miniforge3.

### MATLAB

Each user account has an installation of MATLAB.

### Other Software

- Fiji / imageJ
- Visual Studio Code
- Visual Studio

