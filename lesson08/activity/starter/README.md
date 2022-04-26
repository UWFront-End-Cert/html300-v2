# Activity 08 - Vue Components & Props

We will build out a Post component to loop through some data and print out Posts filled with dynamic data.

### Vue References
- [Vue Docs](https://vuejs.org/guide/introduction.html) (for Vue v3)
- [Vue CLI](https://cli.vuejs.org/)
- [Vue DevTools - Chrome](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=en)
- [Vue DevTools - Firefox](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)


#### We'll be using Vue CLI v2 for this, v3 will work as well -- adjust accordingly

### To get started:
- 	Install the Vue CLI if you haven't already with `npm install -g @vue/cli`
	- 	If installed correctly, running `vue --version` should return a number
-	To create your project using Vue CLI v2, 
	-	run `vue create component-activity`
	-	Follow the prompts for setup. Recommended configuration:
		-	Manually select features
		- Leave `Babel` selected, select `CSS Pre-processors`, unselect `Linter/Formatter`
		- Choose version `3.x` of Vue
		- Choose `Sass/SCSS` for CSS pre-processor
		- Choose `In dedicated config files` for placement of config for Babel
		- Choose `N` for saving this as a preset for future projects
	-	Once done, `cd` into the component-activity directory and run `npm install`
	-	Run `npm run serve` to launch the local server

### Using Vue CLI, build a blog listing page given the following requirements
-	 Have a parent component (App.vue) with data in the form of an array of post objects (provided in data.js)
-	 Create a `<post>` component (in its own file) with props for `title`, `excerpt`, `likes`, and `category`. (make sure to import the component to `App.vue`)
-	 List 4 blog posts as `<post>` components on the page using `v-for` and `v-bind` 
-	 Use `v-bind` to pull the data for the template
-	 Give the `<post>` component a button and tie it to a click directive, increasing the post's `likes` value by one on click
-	 Using data set on the parent, pass down the props to template out the data