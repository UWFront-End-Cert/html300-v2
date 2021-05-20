# Activity 07 - Vue

### References
- [Vue Docs](https://v3.vuejs.org/)
- [Vue DevTools - Chrome](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=en)
- [Vue DevTools - Firefox](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)


Code along with your instructor to build out a Vue app in the code in index.html.

### Individual Activity

Add two data attributes to the Vue app object:
- “imageShowing” with a value of false
- “imageSrc” with a value of a valid image src

Add an image to the HTML, and using v-if, have it only display if the value of imageShowing is true. Using v-bind, set the src of the img to the value of imageSrc.

Add a button to the HTML, and using v-if, have it only display if the value of imageShowing is false.

BONUS: each time the app loads, have the value of “imgSrc” change. I’d recommend creating an array of valid source locations and having the value be a random one in the array.


### Group Activity

Add a method to your Vue app definition called “toggleImage” that toggles the value of “imageShowing”.

Add an on-click event to the button you created in first activity so that it triggers the toggleImage method on click.

Verify that the image appears and button disappears after button click.

BONUS: each time the app loads, have the value of “imgSrc” change. I’d recommend creating an array of valid source locations and having the value be a random one in the array.
