// filter() method form
// Code that requires the DOM be loaded should not be run until the DOM is loaded
document. addEventListener("DOMContentLoaded", function(){

  // Finds the filter form, and handle its submit event
  const filterForm = document.querySelector('#filter-form')

  filterForm.addEventListener('submit', function(event){
    // Prevents the form from trying to submit to a server
    event.preventDefault()

    // An array that we can transform based on user input
    let data = [0, 9, 11, 28, 32, 47]

    const inputField = document.querySelector('#filter-form .filterinput')
    const userInput = inputField.value
    const userNumber = parseInt(userInput)

    // If the user's input was a number, push it into the array and continue
    if(!isNaN(userNumber)){
      data.push(userNumber)

      // Uses filter through all the numbers in the data array looking for any number greater than 20 
      const filter = data.filter(y => y > 20);

      // Outputs the filter numbers to the page
      document.querySelector('#filter-form .filteroutput').innerHTML = filter
    }

    // Clears the form field so the user can try again
    inputField.value = ''
  })

})

// map() method form
// Code that requires the DOM be loaded should not be run until the DOM is loaded
document. addEventListener("DOMContentLoaded", function(){

  // Finds the map form, and handle its submit event
  const mapForm = document.querySelector('#map-form')

  mapForm.addEventListener('submit', function(event){
    // Prevents the form from trying to submit to a server
    event.preventDefault()

    // An array that we can transform based on user input
    let data = [0, 2, 4, 6, 8, 10]

    const inputField = document.querySelector('#map-form .mapinput')
    const userInput = inputField.value
    const userNumber = parseInt(userInput)

    // If the user's input was a number, push it into the array and continue
    if(!isNaN(userNumber)){
      
      // a sample function that will be applied to each number within the array, in this case it will double 'x'  
      const map = data.map(x => x * userNumber);

      // Output the total to the page- no need to convert the numeric sum back to a string, HTML will just print the number as a string
      document.querySelector('#map-form .mapoutput').innerHTML = map
    }

    // Clear the form field so the user can try again
    inputField.value = ''
  })

})

// reduce() method form
// Code that requires the DOM be loaded should not be run until the DOM is loaded
document. addEventListener("DOMContentLoaded", function(){

  // Finds the reduce form, and handle its submit event
  const reduceForm = document.querySelector('#reduce-form')

  reduceForm.addEventListener('submit', function(event){
    // Prevents the form from trying to submit to a server
    event.preventDefault()

    // An array that we can transform based on user input
    let data = [0, 1, 3, 5, 7, 9]

    const inputField = document.querySelector('#reduce-form .reduceinput')
    const userInput = inputField.value
    const userNumber = parseInt(userInput)

    // If the user's input was a number, push it into the array and continue
    if(!isNaN(userNumber)){
      data.push(userNumber)

      // Uses reduce to sum all the numbers in the data array
      const sum = data.reduce((accumulator, currentElement) => accumulator + currentElement);

      // Outputs the total to the page
      document.querySelector('#reduce-form .reduceoutput').innerHTML = sum
    }

    // Clears the form field so the user can try again
    inputField.value = ''
  })

})

// sort() method form
// Code that requires the DOM be loaded should not be run until the DOM is loaded
document. addEventListener("DOMContentLoaded", function(){

  // Finds the reduce form, and handle its submit event
  const sortForm = document.querySelector('#sort-form')

  sortForm.addEventListener('submit', function(event){
    // Prevents the form from trying to submit to a server
    event.preventDefault()

    // An array that we can transform based on user input
    let data = [9, 1, 8, 2, 7, 3, 6, 4, 5]

    const inputField = document.querySelector('#sort-form .sortinput')
    const userInput = inputField.value
    const userNumber = parseInt(userInput)

    // If the user's input was a number, push it into the array and continue
    if(!isNaN(userNumber)){
      data.push(userNumber)

      // Uses sort to organize all the numbers in the data array by order either numerical or alphabetical
      const sort = data.sort();

      // Outputs the total to the page
      document.querySelector('#sort-form .sortoutput').innerHTML = sort
    }

    // Clears the form field so the user can try again
    inputField.value = ''
  })

})
