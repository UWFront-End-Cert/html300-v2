 //EXAMPLE 1 .reduce()
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
  }) })

  //EXAMPLE 2 .map()
  document. addEventListener("DOMContentLoaded", function(){
  // Find the example form, and handle its submit event
  const exampleForm2 = document.querySelector('#example-form2')

  exampleForm2.addEventListener('submit', function(event2){
    // Prevent the form from trying to submit to a server
    event2.preventDefault()

    const inputField2 = document.querySelector('#example-form2 .input');
    const userinput2 = inputField2.value;
    const userNumber2 = parseInt(userinput2);

    //define array
    let data2 = [0, 1, 2, 3, 5, 8];

    //use .map() to iterate over data2 array and multiply by user number
    let newdata2 = data2.map(element => element*userNumber2);

    //output new array elements
    document.querySelector('#example-form2 .output').innerHTML = newdata2.join(', ');

  })
})

//EXAMPLE 3 .filter()
document. addEventListener("DOMContentLoaded", function(){
  // Find the example form, and handle its submit event
  const exampleForm3 = document.querySelector('#example-form3')

  exampleForm3.addEventListener('submit', function(event3){
    // Prevent the form from trying to submit to a server
    event3.preventDefault()

    const inputField3 = document.querySelector('#example-form3 .input');
    const userInput3 = inputField3.value;
    const userNumber3 = parseInt(userInput3);

    //define array
    let data3 = [0, 1, 2, 3, 5, 8];

    //use .filter() to go through the array and find elements less than user number
    const filtered = data3.filter(function(element) {
      return element < userNumber3;
    });
      const count = filtered.length;
    
      //send count to DOM
    document.querySelector('#example-form3 .output').innerHTML = count;
  }) })


//EXAMPLE 4 .find()
document. addEventListener("DOMContentLoaded", function(){
  // Find the example form, and handle its submit event
  const exampleForm4 = document.querySelector('#example-form4')

  exampleForm4.addEventListener('submit', function(event4){
    // Prevent the form from trying to submit to a server
    event4.preventDefault()

    const inputField4 = document.querySelector('#example-form4 .input');
    const userInput4 = inputField4.value;
    const userNumber4 = parseInt(userInput4);

      // An array that we can transform based on user input
    let data4 = [1, 2, 3, 5, 8];

    //use find() to find if user value is in array
      const findme = data4.find(input => input === userNumber4);

    //chooses what to send to DOM based on result of findme above
      const resultElement = document.querySelector('#example-form4 .output');
    if (findme) {
      resultElement.textContent = `${userNumber4} is found in the array`;
    } else {
      resultElement.textContent = `${userNumber4} is not found in the array`;
    }
       
    });

}
  )



