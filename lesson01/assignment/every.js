// Code that requires the DOM be loaded should not be run until the DOM is loaded
document.addEventListener("DOMContentLoaded", function(){

  // Find the every form, and handle its submit event
  const everyForm = document.querySelector('#every-form')

  everyForm.addEventListener('submit', function(event){
    // Prevent the form from trying to submit to a server
    event.preventDefault()

    // An array that we compare with user input
    let data3 = [1, 30, 39, 29, 10, 13]

    const inputField3 = document.querySelector('#every-form .input')
    const userInput3 = inputField3.value
    const userNumber3 = parseInt(userInput3)

      // Use every to compare user's input to all the numbers in the data array

	    const isBelowThreshold = data3.every((currentValue) => currentValue < userNumber3);

      // console.log(data3.every((currentValue) => currentValue > userNumber3));

      // Output the result to the page
      document.querySelector('#every-form .output').innerHTML = isBelowThreshold


    // Clear the form field so the user can try again
    inputField3.value = ''
  })
})
