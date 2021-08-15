// Code that requires the DOM be loaded should not be run until the DOM is loaded
document.addEventListener("DOMContentLoaded", function () {

  //Sum Example
  // Find the sum example form, and handle its submit event
  const exampleForm = document.querySelector('#example-form')

  exampleForm.addEventListener('submit', function (event) {
    // Prevent the form from trying to submit to a server
    event.preventDefault()

    // An array that we can transform based on user input
    let data = [2, 3, 5, 7, 11]

    const inputField0 = document.querySelector('#example-form .input')
    const userInput0 = inputField0.value
    const userNumber0 = parseInt(userInput0)

    // If the user's input was a number, push it into the array and continue
    if (!isNaN(userNumber0)) {
      data.push(userNumber0)

      // Use reduce to sum all the numbers in the data array
      const sum = data.reduce((accumulator, currentElement) => accumulator + currentElement);

      // Output the total to the page- no need to convert the numeric sum back to a string, HTML will just print the number as a string
      document.querySelector('#example-form .output').innerHTML = sum
    }

    // Clear the form field so the user can try again
    inputField0.value = ''
  })

  // 1. Create a New Array Using Map by multiplying each element by the input value
  // Find the map form, and handle its submit event
  const mapForm = document.querySelector('#map-form')

  mapForm.addEventListener('submit', function (event) {
    // Prevent the form from trying to submit to a server
    event.preventDefault()

    // An array that we can transform based on user input
    let map_data = [2, 3, 5, 7, 11]

    const inputField1 = document.querySelector('#map-form .input')
    const userInput1 = inputField1.value
    const userNumber1 = parseInt(userInput1)

    // Use map to multiply each element by the input amount
    const map_data1 = map_data.map(element => element * userNumber1);

    // Output the new array to the page
    document.querySelector('#map-form .output1').innerHTML = map_data1;

    // Clear the form field so the user can try again
    inputField1.value = ''
  })

  // 2. Use Filter to return values in an array that are greater than the input
  // Find the filter form, and handle its submit event
  const filterForm = document.querySelector('#filter-form')

  filterForm.addEventListener('submit', function (event) {
    // Prevent the form from trying to submit to a server
    event.preventDefault()

    // An array that will be manipulated by the code
    let filter_data = [13, 17, 19, 23, 29]

    const inputField2 = document.querySelector('#filter-form .input')
    const userInput2 = inputField2.value
    const userNumber2 = parseInt(userInput2)

    // Use filter to find values that exceed the input value
    const result = filter_data.filter(element => element > userNumber2);

    // Output the new array to the page
    document.querySelector('#filter-form .output2').innerHTML = result;

    // Clear the form field so the user can try again
    inputField2.value = ''
  })

  // 3. Use Find to return the first array value that is greater than the input
  // Find the Find form, and handle its submit event
  const FindForm = document.querySelector('#Find-form')

  FindForm.addEventListener('submit', function (event) {
    // Prevent the form from trying to submit to a server
    event.preventDefault()

    // An array that will be evaluated by the code
    let find_data = [31, 37, 41, 43, 47]

    const inputField3 = document.querySelector('#Find-form .input')
    const userInput3 = inputField3.value
    const userNumber3 = parseInt(userInput3)

    // Use includes to determine if the input is included in the array
    const first = find_data.find(element => element > userNumber3);

    // Output the new array to the page
    document.querySelector('#Find-form .output3').innerHTML = first;

    // Clear the form field so the user can try again
    inputField3.value = ''
  })

  // 4. Use Includes to determine if the input value is included in the array
  // Find the includes form, and handle its submit event
  const includesForm = document.querySelector('#Includes-form')

  includesForm.addEventListener('submit', function (event) {
    // Prevent the form from trying to submit to a server
    event.preventDefault()

    // An array that will be evaluated by the code
    let Pokémon = ['Bulbasaur', 'Squirtle', 'Charmander', 'Pikachu', 'Eevee']

    const inputField4 = document.querySelector('#Includes-form .input')
    const userInput4 = inputField4.value

    // Use includes to determine if the input is included in the array
    const result = Pokémon.includes(userInput4);

    // Output the new array to the page
    document.querySelector('#Includes-form .output4').innerHTML = result;

    // Clear the form field so the user can try again
    inputField4.value = ''
  })

})
