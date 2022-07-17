/* Lesson 1 Assignment
     - Create at least four pairs of input boxes and submit buttons.
     - Use ES6+ array and object methods to manipulate data input.
     - Output results with explanation.
     - Use at least 4 ES6+ methods.
     - Validation not needed - assume only numbers will be entered in input box.
*/

/* example-form - calculating sum using REDUCE ES6+ method */
// Code that requires the DOM be loaded should not be run until the DOM is loaded
document. addEventListener("DOMContentLoaded", function(){

  // Find the example form, and handle its submit event
  const exampleForm = document.querySelector('#example-form')

  exampleForm.addEventListener('submit', function(event){
    // Prevent the form from trying to submit to a server
    event.preventDefault()

    // An array that we can transform based on user input
    let data = [0, 1, 2, 3, 5, 8]

    const inputField = document.querySelector('#example-form .input')
    const userInput = inputField.value
    const userNumber = parseInt(userInput)

    // If the user's input was a number, push it into the array and continue
    if(!isNaN(userNumber)){
      data.push(userNumber)

      // Use reduce to sum all the numbers in the data array
      const sum = data.reduce((accumulator, currentElement) => accumulator + currentElement);

      // Output the total to the page- no need to convert the numeric sum back to a string, HTML will just print the number as a string
      document.querySelector('#example-form .NUMBER').innerHTML = sum
    }

    // Clear the form field so the user can try again
    inputField.value = ''
  })

/* catForm - calculating sum using STRING ES6+ method */
    // Cat form
    const catForm = document.querySelector('#cats')

    catForm.addEventListener('submit', function(event) {
      // Prevent the form from trying to submit to a server
      event.preventDefault()

      // Handle input
      const inputField = document.querySelector('#cats .input')
      const userInput = inputField.value
      const userNumber = parseInt(userInput)
      console.log(userNumber)

      if(!isNaN(userNumber)){
        // Handle output
        const text = document.createTextNode(`${userNumber * 5} cats? Wow!`)
        const p = document.createElement('p')
        p.appendChild(text)
        catForm.appendChild(p)
        catForm.classList.add('submitted')

        }
        // Clear the form field so the user can try again
        inputField.value = ''
      })

/* dogForm calculating sum using STRING method and displaying FIND ES6+ method in consol.log */
      // find form, Array.find() method
      const dogForm = document.querySelector('#dogs')

      dogForm.addEventListener('submit', function(event) {
        // Prevent the form from trying to submit to a server
        event.preventDefault()

        // Array.find() method
          const nums = [2, 4, 12, 18, 56, 98, 9, 1, 1];

          // Find the first value over 50.
          const bigNum = nums.find(element => element > 50);

          console.log(bigNum); // 56 (the first match)

        // Handle input
        const inputField = document.querySelector('#dogs .input')
        const userInput = inputField.value
        const userNumber = parseInt(userInput)
        console.log(userNumber)

        if(!isNaN(userNumber)) {
          // Handle output
          const text = document.createTextNode(`${userNumber + 1} dogs? Wow!`)
          const p = document.createElement('p')
          p.appendChild(text)
          dogForm.appendChild(p)
          dogForm.classList.add('submitted')
          dogArray = [13,25,10,43,435];
           let results = dogArray.some(function(value){
             return value > 40;
           });
           console.log(results);
        }
        // Clear the form field so the user can try again
        inputField.value = ''
      })

/* petForm calculating sum using STRING method & displaying INCLUDES ES6+ method in console.log */
    // includes form, Array.find() method
    const petForm = document.querySelector('#pets')

    petForm.addEventListener('submit', function(event) {
      // Prevent the form from trying to submit to a server
      event.preventDefault()

      const tens = ['10', '20', '30', '40', '50', '60', '70', '80', '90', '100'];
      console.log(tens.indexOf('50')); // 4
      console.log(tens.lastIndexOf('70')); // 6
      console.log(tens.includes('40')); // true
      // Handle input
      const inputField = document.querySelector('#pets .input')
      const userInput = inputField.value
      const userNumber = parseInt(userInput)
      console.log(userNumber)

      if(!isNaN(userNumber)) {
        // Handle output
        const text = document.createTextNode(`${userNumber} Wow, you are a pet lover!`)
        const p = document.createElement('p')
        p.appendChild(text)
        petForm.appendChild(p)
        petForm.classList.add('submitted')
      }
      // Clear the form field so the user can try again
      inputField.value = ''

    })
})
