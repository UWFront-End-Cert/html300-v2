// Find the example form, and handle its submit event
const exampleForm = document.querySelector('form')

exampleForm.addEventListener('submit', function(event){

// Prevent the form from trying to submit to a server
  event.preventDefault()

// Add an empty array and locate the input box in html
  const list = [1, 10, 100, 1000]

    const number = document.querySelector('#input')
  
//make sure that the value of the item is what is being read
  let input = number.value

// put the input into the array
   let result = list.map(x => x * input)

// put the user input into the sentence
  document.querySelector('#output').innerHTML = result
      
// Clear the form field so the user can try again
  input.value = ''
 
  
  
})

