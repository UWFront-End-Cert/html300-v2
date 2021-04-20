// Code that requires the DOM be loaded should not be run until the DOM is loaded
document.addEventListener("DOMContentLoaded", function(){

  // Find the example form, and handle its submit event
  const exampleForm = document.querySelector('#example-form')

  exampleForm.addEventListener('submit', function(event){
    // Prevent the form from trying to submit to a server
    event.preventDefault()

    // An array that we can transform based on user input
    let data = [0, 1, 2, 3, 5, 8]

    const inputField = document.querySelector('#example-form .input')
    console.log(inputField);
    const userInput = inputField.value
    console.log(userInput);
    const userNumber = parseInt(userInput)
    console.log(userNumber);

    // If the user's input was a number, push it into the array and continue
    if(!isNaN(userNumber)){
      data.push(userNumber)

      // Use reduce to sum all the numbers in the data array
      const sum = data.reduce((accumulator, currentElement) => accumulator + currentElement);

      // Output the total to the page- no need to convert the numeric sum back to a string, HTML will just print the number as a string
      document.querySelector('#example-form .output').innerHTML = sum

    // Clear the form field so the user can try again
    inputField.value = ''
  };
});
  const inputField = document.getElementById('color .input')
  console.log(inputField);
  exampleForm.addEventListener('submit', function(event){
  // Find a favorite color on form and add it to the array
  const color = document.getElementById('color');
  console.log(color);
  // Prevent the event to be submitted to a server
  event.preventDefault();

  // An array of color
  let colorArray = ["blue", "white"];
  console.log(colorArray);

  const colorInput = document.getElementById('color');
  console.log(colorInput);
});



  });
