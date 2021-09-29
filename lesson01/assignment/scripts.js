// Code that requires the DOM be loaded should not be run until the DOM is loaded
document.addEventListener("DOMContentLoaded", function() {

  //This function finds the module of each number in this array

  // Find the function-1 form, and handle its submit event
  const exampleForm = document.getElementById('function-1')

  exampleForm.addEventListener('submit', function(event) {
    // Prevent the form from trying to submit to a server
    event.preventDefault()

    // An array that we can transform based on user input
    let data = [1, 24, 6, 44, 9]

    const inputField = document.querySelector('#function-1 .input')
    const userInput = inputField.value
    const userNumber = parseInt(userInput)

    // Get the module of each number in data array with user input and return result
    const result = data.map(x => x % userNumber);

    // Set inner html text to manipulated array
    document.querySelector('#function-1 .output').innerHTML = result.toString();

    // Console log the manipualted array
    console.log(`The result of this calculation is ${result}`);

    // Clear the form field so the user can try again
    inputField.value = ''
  })

})

// Code that requires the DOM be loaded should not be run until the DOM is loaded
document.addEventListener("DOMContentLoaded", function() {

  //This function filters out the numbers in the array less than of the user's number

  // Find the function-2 form, and handle its submit event
  const exampleForm = document.getElementById('function-2')

  exampleForm.addEventListener('submit', function(event) {
    // Prevent the form from trying to submit to a server
    event.preventDefault()

    // An array that we can transform based on user input
    let data = [1, 24, 6, 44, 9]

    const inputField = document.querySelector('#function-2 .input')
    const userInput = inputField.value
    const userNumber = parseInt(userInput)

    // Remove numbers from the array that are less than the user input
    const result = data.filter(x => x > userNumber);

    // If array is empty set inner HTML to message, else set to array
    if (result.length == 0) {
      document.querySelector('#function-2 .output').innerHTML = "My array had no values greater than your input!";
    } else {
      document.querySelector('#function-2 .output').innerHTML = result.toString();
    }

    // Clear the form field so the user can try again
    inputField.value = ''
  })

})

// Code that requires the DOM be loaded should not be run until the DOM is loaded
document.addEventListener("DOMContentLoaded", function() {

  //This function sees if the user's number is divisible by the input numbers

  // Find the function-3 form, and handle its submit event
  const exampleForm = document.getElementById('function-3')

  exampleForm.addEventListener('submit', function(event) {

    // Prevent the form from trying to submit to a server
    event.preventDefault()

    // An array that we can transform based on user input
    let data = [1, 24, 6, 44, 9]

    const inputField = document.querySelector('#function-3 .input')
    const userInput = inputField.value
    const userNumber = parseInt(userInput)

    // Tests whether at least one number in the array is divisible by user input
    const result = data.some(x => x % userNumber === 0);

    // Set inner html to array
    document.querySelector('#function-3 .output').innerHTML = result;

    // Clear the form field so the user can try again
    inputField.value = ''
  })

})

// Code that requires the DOM be loaded should not be run until the DOM is loaded
document.addEventListener("DOMContentLoaded", function() {

  //This function multiplies the user's number by the sum af all values in the array

  // Find the function-4 form, and handle its submit event
  const exampleForm = document.getElementById('function-4')

  exampleForm.addEventListener('submit', function(event) {
    // Prevent the form from trying to submit to a server
    event.preventDefault()

    // An array that we can transform based on user input
    let data = [1, 24, 6, 44, 9]

    const inputField = document.querySelector('#function-4 .input')
    const userInput = inputField.value
    const userNumber = parseInt(userInput)

    // Sum all values in array and multiply by user input
    const result = data.reduce((prev, next) => prev + next) * userNumber;

    // Set inner html to array
    document.querySelector('#function-4 .output').innerHTML = result;

    // Clear the form field so the user can try again
    inputField.value = ''
  })

})
