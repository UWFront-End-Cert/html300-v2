// Code that requires the DOM be loaded should not be run until the DOM is loaded
document. addEventListener("DOMContentLoaded", function(){

  // Find the example form, and handle its submit event
  const exampleForm = document.querySelector('#example-form')

  exampleForm.addEventListener('submit', function(event){
    // Prevent the form from trying to submit to a server
    event.preventDefault()

    // An array that we can transform based on user input
    let data = [0, 1, 2, 3, 4, 5]

    const inputField = document.querySelector('#example-form .input')
    const userInput = inputField.value
    const userNumber = parseInt(userInput)

    // If the user's input was a number, push it into the array and continue
    if(!isNaN(userNumber)){
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

// Neil's Function #1 - Filter (slightly modified above code to use a filter)
const Form1 = document.querySelector('#form1')
  
Form1.addEventListener('submit', function(event){
  // Prevent form from trying to submit to a server
  event.preventDefault()

  // An array to be altered based on user input.
  let data = [0, 20, 40, 60, 80, 100]

  const inputField = document.querySelector('form1 .input')
  const userInput = inputField.value
  const userNumber = parseInt(userInput)

  // If user input is an integer value, then apply filter to array and output result.
  if(!isNaN(userNumber)){
    // Filter method creates a new array filled with array elements that pass a test, printing array values that are less than the user input. 
    const results = data.filter(function(value){
      return value > userNumber;
    });

    // Output the total to the page- no need to convert the numeric sum back to a string, HTML will just print the number as a string
    document.querySelector('form1 .output').innerHTML = results
  }

  // Clear the form field so the user can try again
  inputField.value = ''
})

// Neil's Function #2 - Map
const Form2 = document.querySelector('#form2')
  
Form2.addEventListener('submit', function(event){
  // Prevent the form from trying to submit to a server
  event.preventDefault()

  // An array that we can transform based on user input
  let data = [0, 20, 40, 60, 80, 100]

  const inputField = document.querySelector('#form2 .input')
  const userInput = inputField.value
  const userNumber = parseInt(userInput)

  // Multiples all the elements in the array by value provided by the user
  if(!isNaN(userNumber)){
    // Map creates a new array based on user input.  In this example each value is multiplied by the user input
    const results = data.map(function(value){
      return value*userNumber;
    });

    // Output the total to the page- no need to convert the numeric sum back to a string, HTML will just print the number as a string
    document.querySelector('#form2 .output').innerHTML = results
  }

  // Clear the form field so the user can try again
  inputField.value = ''
})

// Neil's Function #3 - Reduce
const Form3 = document.querySelector('#form3')

Form3.addEventListener('submit', function(event){
  // Prevent the form from trying to submit to a server
  event.preventDefault()

  // Using the exact same array that we can once again update based on user input :)
  const data = [0, 20, 40, 60, 80, 100]

  const inputField = document.querySelector('#form3 .input')
  const userInput = inputField.value

  // Use reduce to concatenate the user input to each array member
  const results = data.reduce(function(acc, value) { 
    acc.push(value + userInput); 
    return acc; 
  }, [])

  // Output the total to the page- no need to convert the numeric sum back to a string, HTML will just print the number as a string
  document.querySelector('#form3 .output').innerHTML = results
  
  // Clear the form field so the user can try again
  inputField.value = ''
})

// Neil Function #4 - Include
const Form4 = document.querySelector('#form4')

Form4.addEventListener('submit', function(event){
  // Prevent the form from trying to submit to a server
  event.preventDefault()

  // An array of valid food types one can consume
  const data = ['vegetables', 'fruit', 'bread', 'meat', 'water', 'sweets', 'beer', 'coffee']

  const inputField = document.querySelector('#form4 .input')
  const userInput = inputField.value

  // Using the include method to see if the userInput matches any of the valid food items, such as delicoius refreshing beer for example.
  const result = data.includes(userInput.toLowerCase());

  document.querySelector('#form4 .output').innerHTML = result
  
  // Clear the form field so the user can try again
  inputField.value = ''
})