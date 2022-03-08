// Code that requires the DOM be loaded should not be run until the DOM is loaded
document. addEventListener("DOMContentLoaded", function(){

  // An array that we can transform based on user input
  const data = [0, 1, 2, 3, 5, 8]
  DisplayArrayById(data, "original-array");

  let isUserInputValid = false;

  // Find the example form, and handle its submit event
  const exampleForm = document.querySelector('#example-form')

  exampleForm.addEventListener('submit', function(event){
    // Prevent the form from trying to submit to a server
    event.preventDefault()

    let userNumber = GetAndDisplayUserInput("example-form", "example-input", "example-output")

    if (isUserInputValid) {
      // Copy the original array
      let newArray = data.slice()

      newArray.push(userNumber)

      DisplayArrayById(newArray, "example-newarray")

      // Use reduce to sum all the numbers in the data array
      const sum = newArray.reduce((accumulator, currentElement) => accumulator + currentElement);

      // Output the total to the page- no need to convert the numeric sum back to a string, HTML will just print the number as a string
      document.querySelector('#example-output').innerHTML = sum
    }
    else {
      document.getElementById("example-newarray").innerHTML = ''
    }

  })

  // Find form1, and handle its submit event
  const form1 = document.querySelector('#form1')

  form1.addEventListener('submit', function(event){
    // Prevent the form from trying to submit to a server
    event.preventDefault()

    // Copy the original array
    let newArray = data.slice()

    let userNumber = GetAndDisplayUserInput("form1", "form1-input", "form1-newarray")

    if (isUserInputValid) {
      // Use map to add user input value to the array
      newArray = newArray.map(function(value) {
        return value + userNumber
      })

      // Display the new array
      DisplayArrayById(newArray, "form1-newarray")
    }
  })

  // Find form2, and handle its submit event
  const form2 = document.querySelector('#form2')

  form2.addEventListener('submit', function(event){
    // Prevent the form from trying to submit to a server
    event.preventDefault()

    let userNumber = GetAndDisplayUserInput("form2", "form2-input", "form2-output")

    if (isUserInputValid) {
      // Use find to find the 1st array element that is bigger that the entered number
      let biggerNumber = data.find(function(value) {
        return value > userNumber
      })

      // Display the 1st array element found
      if (!isNaN(biggerNumber)) {
        document.querySelector('#form2-output').innerHTML = biggerNumber
      }
    }
  })

  // Find form3, and handle its submit event
  const form3 = document.querySelector('#form3')

  form3.addEventListener('submit', function(event){
    // Prevent the form from trying to submit to a server
    event.preventDefault()

    let userNumber = GetAndDisplayUserInput("form3", "form3-input", "form3-newarray")

    if (isUserInputValid) {
      // Use filter to find all elements bigger that the entered number
      newArray = data.filter(function(value) {
        return value > userNumber
      })

      // Display the new array
      DisplayArrayById(newArray, "form3-newarray")
    }
  })


  // Find form4, and handle its submit event
  const form4 = document.querySelector('#form4')

  form4.addEventListener('submit', function(event){
    // Prevent the form from trying to submit to a server
    event.preventDefault()

    let userNumber = GetAndDisplayUserInput("form4", "form4-input", "form4-output")

    if (isUserInputValid) {
      // Use every to check all array elements are smaller that the entered number
      let allSmaller = data.every(function(value) {
        return value < userNumber
      })

      // Display true/false
      document.querySelector('#form4-output').innerHTML = allSmaller
    }
  })

  function GetAndDisplayUserInput(formId, inputDisplayId, resultClass) {
    // Clear previous entry and result
    document.querySelector('#' + inputDisplayId).innerHTML = '';
    document.querySelector('#' + resultClass).innerHTML  = '';

    // Get the user input
    const inputField = document.querySelector('#' + formId + ' .input')
    const userInput = inputField.value
    const userNumber = parseInt(userInput)

    // Validate the user input value; If valid, display the number
    if(!isNaN(userNumber)){
      isUserInputValid = true;
      document.querySelector('#' + inputDisplayId).innerHTML = userInput
    }
    else {
      isUserInputValid = false;
    }

    // Clear the form field so the user can enter a number again
    inputField.value = ''

    return userNumber
  }

  function DisplayArrayById(array, id) {
    let str = '[ ';
    array.forEach(function(value){
      str += value + ', ';
    })

    // Remove the last 2 characters (space and comma)
    str = str.slice(0, -2);
    str += ' ]';

    document.getElementById(id).innerHTML = str;
  }
})