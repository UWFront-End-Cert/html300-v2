// Code that requires the DOM be loaded should not be run until the DOM is loaded
document. addEventListener("DOMContentLoaded", function(){

  // Find the example form, and handle its submit event
  const exampleForm = document.querySelector('#find-form')

  exampleForm.addEventListener('submit', function(event){
    // Prevent the form from trying to submit to a server
    event.preventDefault()

    // An array to be used to compare to user input
    let data = [5, 12, 8, 130, 44]

    const inputField5 = document.querySelector('#find-form .input')
    const userInput5 = inputField5.value
    const userNumber5 = parseInt(userInput5)

      // Use find to find the first element that exceeds user input
      const found = data.find(element => element > userNumber5);

      // Output the element that exceeds the user input
      document.querySelector('#find-form .output').innerHTML = found

    // Clear the form field so the user can try again
    inputField5.value = ''
  })

})