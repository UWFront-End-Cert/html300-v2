// Code that requires the DOM be loaded should not be run until the DOM is loaded
document.addEventListener("DOMContentLoaded", function(){

  // Find the includes form, and handle its submit event
  const includesForm = document.querySelector('#includes-form')

  includesForm.addEventListener('submit', function(event){
    // Prevent the form from trying to submit to a server
    event.preventDefault()

    // An array that will compare to user input
    let data2 = ["red", "yellow", "blue"]

    const inputField2 = document.querySelector('#includes-form .input')
    const userInput2 = inputField2.value

    // Use includes to see missing primary color in the array
    const isIn = data2.includes(userInput2);

    document.querySelector('#includes-form .output').innerHTML = isIn

    // Clear the form field so the user can try again
    inputField2.value = ''
  })
})
