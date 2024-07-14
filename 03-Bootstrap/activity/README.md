# Activity 06 - Bootstrap Forms

### Required setup if not already installed (it should be)

- Install version 14 or higher of [node](https://nodejs.org/en/) (this is enforced by the "engines" in packages.json)

We will be working with Bootstrap to create a submittable form.

### Bootstrap References

- [Bootstrap Docs](https://getbootstrap.com/docs/5.3/getting-started/introduction/)
- [Bootstrap Forms](https://getbootstrap.com/docs/5.3/forms/)
- [Bootstrap with Sass](https://getbootstrap.com/docs/5.3/customize/sass/)
- [Bootstrap Tooltips](https://getbootstrap.com/docs/5.3/components/tooltips/)

### To get started:

- Create an HTML page
- Add Bootstrap to your page (Bootstrap CSS as well, feel free to add gulp/sass if desired)
- On the HTML page, create a Bootstrap form
- In the form, create two buttons
  - One says "unlock form"
  - The other says "submit"
- The submit button should be disabled (the form should not submit when it is clicked).
- On hover over the submit button, a tooltip should appear letting the user know to click the other button.
- Once the user clicks on the unlock button, the submit button should no longer be disabled. It should be clickable (the form will submit), and a tooltip should not show when you hover over it.
