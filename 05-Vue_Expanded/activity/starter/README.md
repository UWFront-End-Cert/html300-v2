# Activity 08 - Vue Components & Props

We will build out a Post component to loop through some data and print out Posts filled with dynamic data.

### Vue References
- [Vue Docs](https://vuejs.org/guide/introduction.html) (for Vue v3)
- [Vue CLI](https://cli.vuejs.org/)
- [Vue DevTools - Chrome](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=en)
- [Vue DevTools - Firefox](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)


#### Versioning

These instructions were written for Vue CLI v5.x and Vue v3.x. If you're using different versions, the steps to get started will probably be different, and file organization as described in instructions below may be different.

### Initialize the Vue app using Vue CLI:
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
	-	Once done, `cd` into the component-activity directory and run `npm run serve` to launch the local server

### Build a blog home page:
-	 Have a parent component (App.vue) with data in the form of an array of blog post objects (copy over the data from the data.js file in this directory)
-	 Create a `<post>` component (in its own file) with props for `title`, `excerpt`, `likes`, and `category`. (hint: Make sure to import the component to `App.vue`)
-	 Display all the blog posts as `<post>` components on the home page, passing and displaying props correctly (hint: You'll need to use `v-for` and `v-bind`)
-	 Give the `<post>` component a button with a click handler. On click of button, the post's `likes` value should increase by 1. (hint: It's expected that this value change won't persist on page refresh)
