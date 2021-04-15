// Find the example form, and handle its submit event
  const exampleForm = document.querySelector('form')

  exampleForm.addEventListener('submit', function(event){

// Prevent the form from trying to submit to a server
    event.preventDefault()

// Add an empty array and locate the input box in html
    const todo = []
    const item = document.querySelector('#input')
    
//make sure that the value of the item is what is being read
    const input = item.value

// put the input into the array
    todo.push(input)

// put the user input into the sentence
    document.querySelector('#output').textContent = todo
        
       
// Clear the form field so the user can try again
    item.value = ''
   
    
    
  })

