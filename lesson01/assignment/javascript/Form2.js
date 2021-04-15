// Find the example form, and handle its submit event
const exampleForm = document.querySelector('form')

exampleForm.addEventListener('submit', function(event){

// Prevent the form from trying to submit to a server
  event.preventDefault()

// Add an empty array and locate the input box in html
  const list = [1, 34, 67, 92, 82]

const number = document.querySelector('#input')
  
//make sure that the value of the item is what is being read
  const input = number.value

// Filter the array based on user input
  const result = list.filter(x => x > input)

// put the results back 
  document.querySelector('#output').textContent = result
      
     
// Clear the form field so the user can try again
  input.value = ''
 
  
  
})

