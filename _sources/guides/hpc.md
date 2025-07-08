# Working on HPC

This guide explains how to transfer data from a from an MBO workstation to the Rockefeller HPC.

See the [Rockefeller HPC documentation](https://hpc.rockefeller.edu/), specifically the [user guides](https://hpc.rockefeller.edu/guides/) for more information.

## Accessing the cluster

```{note} 
If working on or transfering data from an mbo server, an admin can help you set this up.
```

Each user will be given scratch space on the cluster.

Whenever you log-in to the cluster, you will be prompted for a password. Enter your RUNet password.

```none
ssh -l user login05-hpc.rockefeller.edu
user@login05-hpc.rockefeller.edu's password:
<enter RUNet password here>
```

You can set up a ssh keypair to authenticate without needing a password [with ssh](https://hpc.rockefeller.edu/guides/ssh_beginners/). See details {ref}`below <ssh_config>`.

## Directory Structure

Users who wish to work on the HPC will be given a directory in the [mbo scratch space](https://hpc.rockefeller.edu/guides/glossary/?h=scratch#scratch-space):

``` bash
cd /lustre/fs4/mbo/scratch/<USERNAME>
```

Replace `<USERNAME>` with your HPC username.

If the target subdirectory does not exist, log into HPC and create it first:

``` bash
ssh -l user login05-hpc.rockefeller.edu
mkdir -p /lustre/fs4/mbo/scratch/<USERNAME>/light_sheet/IsoView-test-data
```

## Transfering Data 

Transfering data should be done on the data-transfer node.

The commands are the same, just replace `login05` with `dtn02`:

``` bash
ssh -l user dtn02-hpc.rockefeller.edu

```

### `rsync` 

This will **copy** the `E://ID_USER_DATA//data` directory and all of its contents.

Open **Git Bash** or **Windows Terminal**, and run:

``` bash
rsync -av --info=progress2 /e/ID_USER_DATA/data hpc:/lustre/fs4/mbo/scratch/user
```

- `-a` — Archive mode (preserves timestamps, permissions, symbolic links)
- `-v` — Verbose output
- `--info=progress2` — Displays progress information during transfer
- `//c//...` — Escaped Windows path (note the use of double slashes)
- `hpc:` — SSH alias pointing to the HPC login node
- `/lustre/fs4/mbo/scratch/...` — Full destination path on HPC

## Basic Shell Commands for Directory Management on HPC

After connecting with `ssh hpc`, use the following commands:

- `cd /lustre/fs4/mbo/scratch/<USERNAME>` — Change to your scratch directory
- `ls -lh` — List directory contents with sizes
- `mkdir <name>` — Create a new directory
- `mv <src> <dest>` — Move or rename files and directories
- `cp -r <src> <dest>` — Copy directories recursively
- `rm -r <dir>` — Remove a directory (use with caution)

### SCP

If you don't have `git bash`, you can use the command prompt or powershell.
These don't have native access to `rsync`, you'll need to use `scp` as an alternative:

``` bash
scp -r "E:\ID_USER_DATA\data" user@dtn02-hpc.rockefeller.edu:/lustre/fs4/mbo/scratch/user/
```

(ssh_config)=
## SSH Configuration

To simplify command usage, you may define a host alias in your `~/.ssh/config` file on Windows:

``` bash
Host hpc
  HostName login05-hpc.rockefeller.edu
  User <USERNAME>

Host hpc-transfer
  HostName dtn02-hpc.rockefeller.edu
  User <USERNAME>
```

This allows you to use `hpc:` instead of typing the full hostname each time.

## Cleanup Guidelines

- Store temporary or working files in your scratch directory.
- Avoid placing large files in your home directory.
- Delete unused data when no longer needed to conserve shared storage.

## Support

For assistance, contact: `it_hpc@rockefeller.edu`
