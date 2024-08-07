---
title: "How to use Git on a project"
date: "2024-07-18"
path: "/git/git-project"
---

# How to use Git on a project

This documentation outlines the process for working with Git source control in a team. There are three main branches to manage the code: dev, stg, and master. The workflow involves creating feature branches to work on specific tasks or JIRA tickets, followed by code review and testing before merging changes into the main branches.

## Branches

- `dev`: Development branch where feature branches are merged after initial code review.
- `stg`: Staging branch used for User Acceptance Testing (UAT).
- `master`: Production branch containing the stable release of the code.

## Workflow

### Creating a Feature Branch

When you start working on a JIRA ticket, create a feature branch from the dev branch. The feature branch should be named according to the JIRA ticket identifier.

```
git checkout dev
git pull origin dev
git checkout -b JIRA-1234
```

### Developing the Feature

Implement the changes required for the JIRA ticket on your feature branch. Make sure to commit your changes with clear and concise commit messages.

```
git add .
git commit -m "Implement feature for JIRA-1234"
```

### Creating a Pull Request

Once you have completed the work on your feature branch, push it to the remote repository and create a pull request for review.

```
git push origin JIRA-1234
```

In the pull request description, provide a summary of the changes and any relevant details for reviewers.

### Code Review and Approval

Team members will review the pull request. If changes are requested, make the necessary updates and push the changes to the feature branch.

```
git add .
git commit -m "Address review comments"
git push origin JIRA-1234
```

Once the pull request is approved, it will be merged into the dev branch. This can be done from the GitHub console.

### QA Testing

After merging the feature branch into dev, the changes will undergo Quality Assurance (QA) testing. If any issues are found, they should be addressed on the feature branch and then another pull request created.

### Merging to Staging

When the feature has passed QA testing, it will be merged into the stg branch for User Acceptance Testing (UAT).

```
git checkout stg
git pull origin stg
git merge dev
git push origin stg
```

### UAT and Production Release

After UAT is complete and the feature is approved for release, it will be merged into the master branch and deployed to production.

```
git checkout master
git pull origin master
git merge stg
git push origin master
```
