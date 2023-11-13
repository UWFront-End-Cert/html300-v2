# UW Front End Certificate - HTML300
This repository contains the activities and assignments required to complete the final course of the Front End Certificate program. All assignment submissions and quizzes/discussions will be done through either Canvas or Open EdX.

## Course Setup
Follow these steps to get your initial setup started

### Required Tools (by end of course)
- [NodeJS/npm](https://nodejs.org/en/)
- [Gulp](https://gulpjs.com/)
- [Sass](https://sass-lang.com/documentation)
- [Bootstrap 4](https://getbootstrap.com/)
- [Vue](https://vuejs.org/)
- [Vue Devtools](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=en)
- [Yarn](https://yarnpkg.com/lang/en/docs/install/)
- [Nuxt](https://nuxtjs.org/)


### html300 Course Repo Setup
- Within *this* html300 repo, click the `fork` button the the top right to fork a copy to your personal GitHub account
- You will be taken to your forked repo, it should say 'forked from UWFront-End-Cert/html300' under the title
- Clone the fork to your local machine

### Adding the Upstream to your Fork
- Navigate to your fork's root folder in terminal (e.g. `cd ~/Sites/uw/html300-v2`)
- Add the upstream repository as a remote connection `git remote add upstream git@github.com:UWFront-End-Cert/html300-v2.git`
- Verify with `git remote -v`, should have both `origin` and `upstream`
- REMINDER: you will only ever push to `origin`, as that's your fork. Only fetching and pulling will work with `upstream`.

### Fetching and Merging Upstream
- To keep your fork in sync with any changes to the original, we can use upstream to fetch and merge with our forks
- THIS ONLY NEEDS TO BE DONE ONCE A WEEK OR WHEN YOUR INSTRUCTOR SUGGESTS TO
- Run `git fetch upstream` to get the latest code from all branches
- Verify you're on master branch with `git checkout master`
- Merge the upstream version of master with your fork's by running `git merge upstream/master`
- You shouldn't run into conflicts, but if you get errors or conflicts, you can work this guide to resolve or talk to your instructor for help https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/resolving-a-merge-conflict-using-the-command-line

## Per Lesson Workflow
- Start by checking out your local master branch and fetching/merging upstream at the beginning of each module so you know you're up to date
- From the master branch, create a branch for the lesson's assignment. Keep these branches all named consistently, like "lesson1", "lesson2", etc.
```
# Fetch and merge upstream master to your local master branch
$ git checkout master
$ git fetch upstream
$ git merge upstream/master
# From the master branch, create the branch for the lesson's assignment
$ git checkout -b lesson3
```
- Each lesson will usually have two folders, `activity` and `assignment`. Feel free to work on the activity  and assignment on the same "lessonX" branch
- The `activity` will often have `starter` and `solution` folders, this is to help illustrate the starting/ending point for each
- The `assignment` folder will have the starter files and instructions required to complete
- Once completed, open a new Pull Request. Within the PR, set the base to be YOUR forked master branch, and the compare branch is  that lesson's assignment branch
- Copy the direct link to the pull request page, and paste that into the submission box for the assignment
- Once the assignment has been graded, merge the pull request

### Assignments
- Check the `README.md` files found in the root of each `assignment` folder for instructions, links for tools, and any required information. Consult the rubric within Canvas for the grading scale breakdown
- When you open a pull request, you may keep pushing commits to that assignment's branch as they will automatically update the PR -- no need to close and re-open a new one
- Please use the Canvas discussion boards if coming across issues or problems with assignments so all folks have visibility

### Resources
- [Git Resources](https://try.github.io/)
- [Learn Branching](https://learngitbranching.js.org/?locale=en_US)
- [Exploring ES6](https://exploringjs.com/es6/)
- [You Don't Know JS](https://github.com/getify/You-Dont-Know-JS)
- [Array Explorer](https://sdras.github.io/array-explorer/)
- [Object Explorer](https://sdras.github.io/object-explorer/)
- [Sass Guide](https://sass-lang.com/guide)
- [CSS Tricks](https://css-tricks.com/)
- [Flexbox Froggy](https://flexboxfroggy.com/)
- [Grid Garden](https://codepip.com/games/grid-garden/)
- [Syntax FM Podcast](https://syntax.fm/)
- [ShopTalk Show Podcast](https://shoptalkshow.com/)
