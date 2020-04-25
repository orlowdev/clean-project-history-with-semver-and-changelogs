# Clean Project History with Semantic Versioning and Changelogs

[![theory: elementary](https://img.shields.io/badge/theory-elementary-yellow)](https://github.com/raini-dev/raini/blob/master/docs/workshop-difficulty-levels.md)
[![practice: intermediate](https://img.shields.io/badge/practice-intermediate-orange)](https://github.com/raini-dev/raini/blob/master/docs/workshop-difficulty-levels.md)
[![raini](https://img.shields.io/badge/raini-workshop-indianred)](https://github.com/raini-dev/raini)

## Checklist

- [x] Read the [Contribution guide](https://github.com/raini-dev/raini/blob/master/.github/CONTRIBUTING.md#suggesting-a-workshop)
- [x] Create a repository using the [Raini workshop template](https://github.com/raini-dev/raini-workshop-template/). Include all branches to avoid the need of creating `dev` branch by yourself;
- [x] Fill in the `README.md` file;
- [ ] **If the workshop includes theoretical part**, create a PowerPoint presentation using our template (TBD: `Presentation template`) and share it as `./slides.pptx` in the repository (check out our [Theory Preparation Guide](https://github.com/raini-dev/raini/blob/master/docs/guides/theory-preparation-guide.md);
- [ ] **IF the workshop includes practical part**, put the starting point of code in the `dev` branch and all the following recovery points in subbranches of the repository (check out our [Code Preparation Guide](https://github.com/raini-dev/raini/blob/master/docs/guides/code-preparation-guide.md);
- [ ] Fill in the `./INSTRUCTORS_NOTES.md` (see [Instructor's Notes Guide](https://github.com/raini-dev/raini/blob/master/docs/guides/instructors-notes-guide.md) for details);
- [ ] Create a `Propose a workshop` issue [here](https://github.com/raini-dev/raini/issues/new/choose). Follow the guildelines in the issue template;
- [ ] Make sure everything above is checked and delete this checklist.

## List of Requirements

- basic knowledge of Git including common commands (`commit`, `push`, `merge`, `log`)
- good understanding of JavaScript (ES6+) for following with the code
- intermediate English to be able to keep up with the materials
- a laptop with Internet access and a code editor of your choice
- an active GitHub account
- Node Latest installed on the machine (v13.12.0 at the time of writing)
- Git installed on the machine (v2.21.0 at the time of writing)

## Description

Learn how to share the updates of your software with collaborators, users and other stakeholders in a clear and understandable way. Automate the process of writing the project history following the industry standarts and best practices.

In this workshop we will:

- discuss various approaches to versioning
- deep-dive into Semantic Versioning, by far the most popular versioning scheme nowadays
- talk about different sources of truth about the history of a project
- define what a change log is and where we can store it to make it accessible for everyone
- learn how to maintain parallel flows of versioning within a project
- use Test-Driven Development approach to build a dependency-free tool in Node that is capable of deducing the next version to come up and creating change logs

## Authors

### Sergei Orlov

Creator of Raini.dev. Solution Architect. Ex-teacher.

---

This repository is created from the [Raini workshop template](https://github.com/raini-dev/raini-workshop-template/).

To learn more about using template repositories on GitHub, refer to [this page](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template).
