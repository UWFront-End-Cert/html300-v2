// Code that requires the DOM be loaded should not be run until the DOM is loaded
document.addEventListener("DOMContentLoaded", function(){

  // Find the example forms, and handle their submit events
  const oneForm = document.querySelector('#form-1');
  const twoForm = document.querySelector('#form-2');
  const threeForm = document.querySelector('#form-3');
  const fourForm = document.querySelector('#form-4');

  oneForm.addEventListener('submit', function(event){
    // Prevent the form from trying to submit to a server
    event.preventDefault();

    // An array that we can transform based on user input
    let data = [0, 1, 2, 3, 5, 8];

    const inputField = document.querySelector('#form-1 .input');
    const userInput = inputField.value;
    const userNumber = parseInt(userInput);

    // If the user's input was a number, push it into the array and continue
    if(!isNaN(userNumber)){
      data.push(userNumber);

      // Use reduce to sum all the numbers in the data array
      const sum = data.reduce((accumulator, currentElement) => accumulator + currentElement);

      // Output the total to the page- no need to convert the numeric sum back to a string, HTML will just print the number as a string
      document.querySelector('#form-1 .output').innerHTML = sum;
    }

    // Clear the form field so the user can try again
    inputField.value = '';
  })

  twoForm.addEventListener('submit', function(event){
    // Prevent the form from trying to submit to a server
    event.preventDefault();

    // An array that we can transform based on user input
    let data = [0, 1, 2, 3, 5, 8];

    const inputField = document.querySelector('#form-2 .input');
    const userInput = inputField.value;
    const userNumber = parseInt(userInput);

    // If the user's input was a number, add it to each element of the array and continue
    if(!isNaN(userNumber)){

      // Use map to add user input to each element of the array
      data = data.map(element => element + userNumber);

      // Use reduce to sum all the numbers in the data array
      const sum = data.reduce((accumulator, currentElement) => accumulator + currentElement);

    // Output the total to the page- no need to convert the numeric sum back to a string, HTML will just print the number as a string
    document.querySelector('#form-2 .output').innerHTML = sum;
    }

    // Clear the form field so the user can try again
    inputField.value = '';
  })

  threeForm.addEventListener('submit', function(event){
    // Prevent the form from trying to submit to a server
    event.preventDefault();

    // An array that we can transform based on user input
    let data = [0, 1, 2, 3, 5, 8];

    const inputField = document.querySelector('#form-3 .input');
    const userInput = inputField.value;
    const userNumber = parseInt(userInput);

    // If the user's input was a number, filter out elements greater than the user input and continue
    if(!isNaN(userNumber)){
      // Use filter to keep only elements less than or equal to the user input
      data = data.filter(element => element <= userNumber);

      // Use reduce to sum all the numbers in the filtered data array
      const sum = data.reduce((accumulator, currentElement) => accumulator + currentElement, 0);

      // Output the total to the page- no need to convert the numeric sum back to a string, HTML will just print the number as a string
      document.querySelector('#form-3 .output').innerHTML = sum;
    }

    // Clear the form field so the user can try again
    inputField.value = '';
  })

  fourForm.addEventListener('submit', function(event){
    // Prevent the form from trying to submit to a server
    event.preventDefault();

    // An array that we can transform based on user input
    let data = [0, 1, 2, 3, 5, 8];

    const inputField = document.querySelector('#form-4 .input');
    const userInput = inputField.value;
    const userNumber = parseInt(userInput);

    // If the user's input was a number, find the first element in the array that is greater than the user input and continue
    if(!isNaN(userNumber)){
      // Use find to get the first element greater than the user input
      const firstElementGreater = data.find(element => element > userNumber);

      // Output the found element to the page
      document.querySelector('#form-4 .output').innerHTML = firstElementGreater;
    }

    // Clear the form field so the user can try again
    inputField.value = '';
  })

})