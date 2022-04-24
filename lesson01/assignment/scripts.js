// Code that requires the DOM be loaded should not be run until the DOM is loaded
document.addEventListener("DOMContentLoaded", function() {

  // Find the example form, and handle its submit event
  const exampleForm = document.querySelector('#example-form')

  exampleForm.addEventListener('submit', function(event) {
    // Prevent the form from trying to submit to a server
    event.preventDefault()

    // An array that we can transform based on user input
    let data = [0, 5, 10, 20, 30, 40, 50, 8]

    const inputField = document.querySelector('#example-form .input')
    const userInput = inputField.value
    const userNumber = parseInt(userInput)

    // If the user's input was a number, push it into the array and continue
    if (!isNaN(userNumber)) {
      data.push(userNumber)

      // Use reduce to sum all the numbers in the data array
      const sum = data.reduce((accumulator, currentElement) => accumulator + currentElement);

      // Output the total to the page- no need to convert the numeric sum back to a string, HTML will just print the number as a string
      document.querySelector('#example-form .output').innerHTML = sum
    }

    // Clear the form field so the user can try again
    inputField.value = ''
  })

})

// Code that requires the DOM be loaded should not be run until the DOM is loaded
document.addEventListener("DOMContentLoaded", function() {

  // Find the example form, and handle its submit event
  const exampleForm = document.querySelector('#example-form-1')

  exampleForm.addEventListener('submit', function(event) {
    // Prevent the form from trying to submit to a server
    event.preventDefault()

    // An array that we can transform based on user input
    let data = [0, 5, 10, 20, 30, 40, 50, 8]

    const inputField = document.querySelector('#example-form-1 .input')
    const userInput = inputField.value
    const userNumber = parseInt(userInput)

    // If the user's input was a number, push it into the array and continue
    if (!isNaN(userNumber)) {
      data.push(userNumber)


      // All the numbers in array are multiplied by 5 and the user's number is multiplied by 5 in the end
      const numbers = data.map(myFunction)

      function myFunction(num) {
        return num * 5;
      }

      // Output the total to the page- no need to convert the numeric sum back to a string, HTML will just print the number as a string
      document.querySelector('#example-form-1 .output').innerHTML = numbers
    }

    // Clear the form field so the user can try again
    inputField.value = ''
  })

})

// Code that requires the DOM be loaded should not be run until the DOM is loaded
document.addEventListener("DOMContentLoaded", function() {

  // Find the example form, and handle its submit event
  const exampleForm = document.querySelector('#example-form-2')

  exampleForm.addEventListener('submit', function(event) {
    // Prevent the form from trying to submit to a server
    event.preventDefault()

    // An array that we can transform based on user input
    let numbers = [30, 40, 50, 60]



    const inputField = document.querySelector('#example-form-2 .input')
    const userInput = inputField.value
    const userNumber = parseInt(userInput)

    if (!isNaN(userNumber)) {
      numbers.push(userNumber)

      let numbers2 = numbers.filter(function(value) {
        return value > 35;
      });

      document.querySelector('#example-form-2 .output').innerHTML = numbers2
    }

    inputField.value = ''
  })

})


document.addEventListener("DOMContentLoaded", function() {

  // Find the example form, and handle its submit event
  const exampleForm = document.querySelector('#example-form-3')

  exampleForm.addEventListener('submit', function(event) {
    // Prevent the form from trying to submit to a server
    event.preventDefault()

    let numbers = [50, 60, 35, 90, 84]

    const inputField = document.querySelector('#example-form-3 .input')
    const userInput = inputField.value
    const userNumber = parseInt(userInput)

    if (!isNaN(userNumber)) {
      numbers.push(userNumber)

      numbers.forEach(function(value, key) {
        numbers[key] = value * 2;

      });
      document.querySelector('#example-form-3 .output').innerHTML = numbers
    }

    inputField.value = ''
  })
})

document.addEventListener("DOMContentLoaded", function() {

  // Find the example form, and handle its submit event
  const exampleForm = document.querySelector('#example-form-4')

  exampleForm.addEventListener('submit', function(event) {
    // Prevent the form from trying to submit to a server
    event.preventDefault()

    let numbers = []

    const inputField = document.querySelector('#example-form-4 .input')
    const userInput = inputField.value
    const userNumber = parseInt(userInput)

    if (!isNaN(userNumber)) {
      numbers.push(userNumber)
      const isEven = (value) => value % 2 === 0;
      if (numbers.some(isEven)) {
        document.querySelector('#example-form-4 .output').innerHTML = "True"
      }

      else {
        document.querySelector('#example-form-4 .output').innerHTML = "False"
      }
    }


    inputField.value = ''
  })
})
