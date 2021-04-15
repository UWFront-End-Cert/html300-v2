// Find the example form, and handle its submit event
const exampleForm = document.querySelector('form')

exampleForm.addEventListener('submit', function(event){

// Prevent the form from trying to submit to a server
  event.preventDefault()

// Add an empty array and locate the input box in html
  const list = ["CAT", "DOG", "TURTLE", "SNAKE", "LION", "TIGER"]

    const animal = document.querySelector('#input')
  
//make sure that the value of the item is what is being read
  let input = animal.value

//make all the string input uppercase
  input = input.toUpperCase()

// Run the input through the array and see if any value fits
   let result = list.includes(input)

// Convert the expected Boolean result to a string
   result = result.toString()

// put the user input into the sentence
  document.querySelector('#output').innerHTML = result
      
// Clear the form field so the user can try again
  input.value = ''
 
  
  
})

