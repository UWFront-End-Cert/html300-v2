// Code that requires the DOM be loaded should not be run until the DOM is loaded
document.addEventListener("DOMContentLoaded", function() {

  // Find the example form, and handle its submit event
  const exampleForm = document.querySelector('#example-form')

  exampleForm.addEventListener('submit', function(event) {
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

  //this is for #yourName
  const yourName = document.querySelector('#yourName')
  yourName.addEventListener('submit', function(event) {
    event.preventDefault()

    const inputField = document.querySelector('#yourName .input')
    const userInput = inputField.value

    let newString =  `Hi ${userInput}, I created this sentence using string interpolation!`
    document.querySelector('#yourName .output').innerHTML = newString

    inputField.value = ''
  })

  //this is for #arrayMap
  const arrayMap = document.querySelector('#arrayMap')
  arrayMap.addEventListener('submit', function(event) {
    event.preventDefault()
    let array = [3, 7, 12, 25]

    const inputField = document.querySelector('#arrayMap .input')
    const userInput = inputField.value
    const userNumber = parseInt(userInput)

    if (!isNaN(userNumber)) {
      let array2 = array.map(function(value) {
        return value + userNumber
      })
      document.querySelector('#arrayMap .output').innerHTML = `[${array2}]`
    }

    // Clear the form field so the user can try again
    inputField.value = ''
  })

  //this is for #overNum
  const overNum = document.querySelector('#overNum')
  overNum.addEventListener('submit', function(event) {
    event.preventDefault()
    let array = [3, 7, 12, 25, 87]

    const inputField = document.querySelector('#overNum .input');
    const userInput = inputField.value;
    const userNumber = parseInt(userInput);

    if(!isNaN(userNumber)){
      let over = array.some(function(value){
        return value > userNumber;
      });
      document.querySelector('#overNum .output').innerHTML = over;
    }

    // Clear the form field so the user can try again
    inputField.value = '';
  });


  //this is for #wordFilter
  const wordFilter = document.querySelector('#wordFilter')
  wordFilter.addEventListener('submit', function (event) {
    event.preventDefault()
    let array = ['cat', 'fish', 'horse', 'dragon', 'giraffe', 'platypus', 'alligator']

    const inputField = document.querySelector('#wordFilter .input');
    const userInput = inputField.value;
    const userNumber = parseInt(userInput);

    if(!isNaN(userNumber)){
      // using arrow notation, for every word in array, compare the word to entered numbered
      // if the word in the array is larger, add to the new array
      let result = array.filter(word => word.length > userNumber);
      document.querySelector('#wordFilter .output').innerHTML = `[${result}]`
    }

    // Clear the form field so the user can try again
    inputField.value = '';
  });

  //this is for #allNumbers
  const allNumbers = document.querySelector('#allNumbers')
  allNumbers.addEventListener('submit', function (event) {
    event.preventDefault()
    let array = [2, 12, 15, 39, 91]

    const inputField = document.querySelector('#allNumbers .input');
    const userInput = inputField.value;
    const userNumber = parseInt(userInput);

    if(!isNaN(userNumber)){
      // compare each number in the array to the user's number, if all numbers in the array are less than the user's number return true.
      let result = array.every(number => number < userNumber);
      document.querySelector('#allNumbers .output').innerHTML = result
    }

    // Clear the form field so the user can try again
    inputField.value = '';
  });


});
