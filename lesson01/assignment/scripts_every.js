// Code that requires the DOM be loaded should not be run until the DOM is loaded
document. addEventListener("DOMContentLoaded", function(){

  // Find the example form, and handle its submit event
  const everyForm = document.querySelector('#every-form')

  everyForm.addEventListener('submit', function(event){
    // Prevent the form from trying to submit to a server
    event.preventDefault()

    // An array to compare with the user input
    let data = [1, 30, 39, 29, 10, 13]

    const inputField3 = document.querySelector('#every-form .input')
    const userInput3 = inputField3.value
    const userNumber3 = parseInt(userInput3)

      // Use every to see which numbers to test whether all the elements in the array are less than the number entered by the user
      const evaluation = (currentValue) => currentValue < userNumber3;
      const isBelowThreshold = data.every (evaluation);

      // Return true or false
      document.querySelector('#every-form .output').innerHTML = isBelowThreshold

    // Clear the form field so the user can try again
    inputField3.value = ''
  })

})