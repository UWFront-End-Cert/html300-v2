# Assignment 03 - Constructors and Data

### Required setup if not already installed (it should be)
- Install version 14 or higher of [node](https://nodejs.org/en/) (this is enforced by the "engines" in packages.json)

### To get started:
-	In your forked repo, create a new branch off of master called `lesson-03` or similar
-   Navigate to the root folder of this assignment within terminal in your fork, `lesson03/assignment`
-   Run `npm install`
-   Run `npx gulp`
-   Leave gulp running. As you work with the files, browsersync will watch your scss and HTML files and reload the page in the browser on changes
- 	Use the contents of `data/data.json` for your data -- remember: you can copy the array into your JS file and set it to a variable in your Javascript file to work with
- 	Migrate your previous SCSS/HTML from assignment 02 for your component (you can copy the corresponding files from your previous assignment to this one so you'll have the HTML/SCSS of the card set up)
- 	In your JS, convert the component to a template with ES6 string templating and loop through the JSON data, creating components for each object in the data
- 	Output the templated data onto the `.template-hook` section of the index.html page
- 	*BONUS*: Add to your component another section for the `codeLanguages` key in the data. Loop through the `codeLanguages` array and add the contents to your new section in the component

### To Submit:
- Create a Pull Request for your assignment branch to your forked master
- Submit the link to your pull request in your assignment submission box
- Once assignment is graded, merge the Pull Request

### Image credit:

"handsome" by foreverdigital is licensed with CC BY-NC-ND 2.0. To view a copy of this license, visit https://creativecommons.org/licenses/by-nc-nd/2.0/