// Code that requires the DOM be loaded should not be run until the DOM is loaded
document.addEventListener("DOMContentLoaded", function () {

  //Example Form
  // Find the example form, and handle its submit event
  const exampleForm = document.querySelector('#example-form')

  exampleForm.addEventListener('submit', function (event) {
    // Prevent the form from trying to submit to a server
    event.preventDefault()

    // An array that we can transform based on user input
    let data = [0, 1, 2, 3, 5, 8]

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

  //Map Form
  // Find the map form, and handle its submit event
  const mapForm = document.querySelector('#map-form')

  mapForm.addEventListener('submit', function (event) {
    // Prevent the form from trying to submit to a server
    event.preventDefault()

    // An array that we can transform based on user input
    let map_data = [1, 2, 3, 4, 5, 6]

    const inputField2 = document.querySelector('#map-form .input')
    const userInput2 = inputField2.value
    const userNumber2 = parseInt(userInput2)

    // Use map to multiply each element by the input amount
    const map_data2 = map_data.map(element => element * userNumber2);

    // Output the new array to the page
    document.querySelector('#map-form .output2').innerHTML = map_data2;

    // Clear the form field so the user can try again
    inputField2.value = ''
  })


  //Filter Form
  // Find the filter form, and handle its submit event
  const filterForm = document.querySelector('#filter-form')

  filterForm.addEventListener('submit', function (event) {
    // Prevent the form from trying to submit to a server
    event.preventDefault()

    // An array that will be manipulated by the code
    let filter_data = [1, 2, 10, 15, 25, 60]

    const inputField3 = document.querySelector('#filter-form .input')
    const userInput3 = inputField3.value
    const userNumber3 = parseInt(userInput3)

    // Use filter to find values that exceed the input value
    const result = filter_data.filter(element => element > userNumber3);

    // Output the new array to the page
    document.querySelector('#filter-form .output3').innerHTML = result;

    // Clear the form field so the user can try again
    inputField3.value = ''
  })

  //Includes Form
  // Find the includes form, and handle its submit event
  const includesForm = document.querySelector('#Includes-form')

  includesForm.addEventListener('submit', function (event) {
    // Prevent the form from trying to submit to a server
    event.preventDefault()

    // An array that will be evaluated by the code
    let states = ['Alaska', 'Washington', 'Oregon', 'Idaho', 'Montana']

    const inputField5 = document.querySelector('#Includes-form .input')
    const userInput5 = inputField5.value


    // Use includes to determine if the input is included in the array
    const result = states.includes(userInput5);

    // Output the new array to the page
    document.querySelector('#Includes-form .output5').innerHTML = result;

    // Clear the form field so the user can try again
    inputField5.value = ''
  })

  //Find Form
  // Find the Find form, and handle its submit event
  const FindForm = document.querySelector('#Find-form')

  FindForm.addEventListener('submit', function (event) {
    // Prevent the form from trying to submit to a server
    event.preventDefault()

    // An array that will be evaluated by the code
    let find_data = [1, 2, 10, 15, 25, 60]

    const inputField6 = document.querySelector('#Find-form .input')
    const userInput6 = inputField6.value
    const userNumber6 = parseInt(userInput6)

    // Use includes to determine if the input is included in the array
    const first = find_data.find(element => element > userNumber6);

    // Output the new array to the page
    document.querySelector('#Find-form .output6').innerHTML = first;

    // Clear the form field so the user can try again
    inputField6.value = ''
  })

})