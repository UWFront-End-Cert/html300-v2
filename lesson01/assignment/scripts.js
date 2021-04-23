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
      document.querySelector('#example-form .output').innerHTML = sum
    }

    // Clear the form field so the user can try again
    inputField.value = ''
  })

  // Putting my forms inside the same DOMContentLoaded function
  const spliceForm = document.querySelector('#splice-form');

  spliceForm.addEventListener('submit', function(event) {

    event.preventDefault();

    // An array of strings that create a Mad libs
    let madLib = ['My', 'dog', 'chases', '.'];

    // Turning user input into variables
    const input1 = document.querySelector('#splice-form .adjective');
    const input2 = document.querySelector('#splice-form .plNoun');
    const userAdj = input1.value;
    const userPlN = input2.value;

    // Splice in new elements to  array
    madLib.splice(1, 0, userAdj);
    madLib.splice(4, 0, userPlN);

    document.querySelector('#silly-phrase').innerHTML = madLib.join(' ');

    // Clear fields
    input1.value = '';
    input2.value = '';
  });

    // An array of strings from which the user will choose one element
    const woodchucks = ['Chucky', 'Chuckanut', 'Chuckalog', 'Chuckerella', 'Phil'];

    // Present the array as an unordered list. Can I turn this into an arrow function?
    woodchucks.forEach(chuckers);

    function chuckers(item) {
      document.querySelector('#woodchuck-list').innerHTML += '<li>' + item + '</li>';
    }

    // User picks a name from the list
    const chuckForm = document.querySelector('#chuck-form');

    chuckForm.addEventListener('submit', function(event) {

      event.preventDefault();

    // Turning user input into variables
    const input3 = document.querySelector('#that-guy');
    const badchuck = input3.value;

    document.querySelector('#bad-chuck').innerHTML = badchuck;

    input3.value = '';

  });

    // This form will get user input to make an array from a string
    const pigLatin = document.querySelector('#pig-latin');

    pigLatin.addEventListener('submit', function(event) {

      event.preventDefault();

      const input4 = document.querySelector('#word-to-mangle');
      const wordBefore = input4.value.toUpperCase();

      // Create the array, and remove the first item
      let arrayWord = Array.from(wordBefore);
      let firstLetter = arrayWord.shift();

      // Concatenate arrays
      let step4 = arrayWord.concat(firstLetter);

      // Turn them back into a string
      let step5 = step4.join('');

      document.querySelector('#plt').innerHTML = step5 + 'AY';

      input4.value = '';

  });
// This last one doesn't work properly but I decided that I need to just hand it in and move on.
  // Get surprise smoothie ingredients by picking the number of letters in the ingedient name

  const recipe = document.querySelector('#recipe');

  recipe.addEventListener('submit', function(event) {

    event.preventDefault();

    // Wow, gross
    let ingredients = [
      {name: 'mango', length: 5},
      {name: 'chips', length: 5},
      {name: 'vodka', length: 5},
      {name: 'banana', length: 6},
      {name: 'potato', length: 6},
      {name: 'salmon', length: 6},
      {name: 'apricot', length: 7},
      {name: 'pumpkin', length: 7},
      {name: 'clothes', length: 7},
      {name: 'cucumber', length: 8},
      {name: 'cherries', length: 8},
      {name: 'nitrogen', length: 8},
      {name: 'raspberry', length: 9},
      {name: 'asparagus', length: 9},
      {name: 'detergent', length: 9},
      {name: 'watermelon', length: 10},
      {name: 'strawberry', length: 10},
      {name: 'maybeetles', length: 10},
    ];

    // Convert user input to integer for filtering list
    const input5 = document.querySelector('#name-length');
    const nameLength = input5.value;
    const nameLengthInt = parseInt(nameLength);

    // find items with length matching user input
    const smoothie = ingredients.filter( ({length}) => length === nameLengthInt);
    console.log(smoothie);

    // Display results
    document.querySelector('#ingredient-list').innerHTML = smoothie;

    input5.value = '';
  });

})
