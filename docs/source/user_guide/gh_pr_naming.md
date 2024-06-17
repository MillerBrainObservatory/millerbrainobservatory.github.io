## Naming the PR

The name of a PR is important, because it will eventually become the commit that shows up in `main`. Here are the guidelines for how to name a PR.

Anatomy of a PR name:

`Keyword` `FIX-{issue-number}` - `Short summary`

For example `Add FIX-10 - New ImajeJ help doc added`

### Keyword

The keyword should be the first thing in the name, to let everyone know what kind of change the PR is. Here is a table of the standard keywords, and what they mean:

Key Word | Meaning
--- | --
Add | Create a capability e.g. feature, test, dependency.
Remove | Remove a capability e.g. feature, test, dependency.
Refactor | An update to existing code and/or refactoring.
Bugfix | Fix an issue e.g. bug, typo, accident, misstatement.
Bump | Increase the version of something e.g. dependency.
Build | Change *only* to the build process, tooling, or infra.
Document | A change to documentation *only*.
Localize | String and localization only related changes.
Revert | Reverting a previous commit.

> **Discussion**: Why the standard GitHib `Fixes`/`Fix` keyword is not used? Simply put, these two keywords close issues.
However, if we ever want to prevent issues from being closed - so we can move them to FAQ (or related), we need to use `Bugfix` instead.

### Issue Number

Following the keyword is the issue number - this is the issue the ticket addresses. It is formatted as: `FIX-XXXX` where XXXX is the issue number/link (this can be copied from the URL).

### Short Summary

This is a short summary of what your commit is doing.

## Merging the PR

For maintainablility, we should adopt a `Squash & Merge` policy which results in the entire PR being a single commit on the `master` commit history.
Thus individual commit names (which can get very ugly and convoluted) are not important, but can be very helpful for more detailed context if ever needed.
