// Code that requires the DOM be loaded should not be run until the DOM is loaded
document.addEventListener("DOMContentLoaded", function(){

  // Find the every form, and handle its submit event
  const findForm = document.querySelector('#find-form')

  findForm.addEventListener('submit', function(event){
    // Prevent the form from trying to submit to a server
    event.preventDefault()

    // An array that we will compare with user input
    const data4 = [1, 30, 39, 29, 10, 13]

    const inputField4 = document.querySelector('#find-form .input')
    const userInput4 = inputField4.value
    const userNumber4 = parseInt(userInput4)

      // Use find to see the 1st number satisfy the testing function
	    const found = data4.find(element => element > userNumber4);

      // console.log(found);

      // Output the number to the page
      document.querySelector('#find-form .output').innerHTML = found

    // Clear the form field so the user can try again
    inputField4.value = ''
  })
})
