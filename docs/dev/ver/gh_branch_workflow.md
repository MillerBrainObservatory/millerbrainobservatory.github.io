# Dev Branches: What, Why, and When?

*adapted from firefox open source contribution guide*

`development` branches (idiomatically abbreviated `dev`) are simply a branch for working on batches of code being actively worked-on but not yet merged into the code that the general user will be using and that people see when they open the repository on github: `master`.
The reason for dev branches is mainly to **avoid large pull-requests (PR)**. Its very important for reviewers to understand and trust every change to the codebase, which small PR's greatly facilitate.

## Dev Branch Process

> For this example, we will use a `feature` branch for code changes exist in, `dev` as the branch we merge into, and `master` as the end-goal after merging into `dev`.

Dev branch spinoff process:
- If you're starting work on a ticket and know that it requires a dev branch
    - create a `dev` branch off `master`, and then make a `feature` branch off `dev`
- If you already have a `feature` branch and realize it should be a dev branch
    - make sure your `feature` branch up to date with `master` either through a rebase or a merge. This is to prevent conflicts down the line
    - create a `dev` branch off `master`

In either case, both `dev` and `feature` branches should be pushed to your fork.

## Dev Based Pull Requests

PR's name should follow [PR Naming Guide](https://millerbrainobservatory.github.io/user_guide/gh_pr_naming.html)

`feature` PRs
- All `feature` branches that are ready for review should make a PR against `dev`
- Request the appropriate reviewers
- Once a PR is approved, you may merge it and continue feature

`dev` PRs
- Once all work on a `dev` branch is complete and ready for `master`, make a PR for `dev` from your fork to `master`
- PR's description should include an explanation of what has changed
- There should be a reviewer with proper knowledge of the codebase to understand the changes being made.

Here is a full example workflow:

.. code-block::

.. tab-set-code::

    .. code-block:: bash

        # Create and switch to the feature branch
        git checkout -b feature/new-feature-branch

        # Push the feature branch to the remote
        git push origin feature/new-feature-branch

        # Merge the feature branch into dev
        git checkout dev
        git pull origin dev
        git merge feature/new-feature-branch
        git push origin dev

        # Merge the feature branch into master
        git checkout master
        git pull origin master
        git merge feature/new-feature-branch
        git push origin master

        # Clean up branches
        git branch -d bugfix/bugfix-branch
        git push origin --delete bugfix/bugfix-branch
        git branch -d feature/new-feature-branch
        git push origin --delete feature/new-feature-branch


![Doc](https://github.com/MillerBrainObservatory/static-assets/blob/master/img/version_control/gh_actions_workflows.png)
