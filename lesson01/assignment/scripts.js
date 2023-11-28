// Code that requires the DOM be loaded should not be run until the DOM is loaded
document.addEventListener("DOMContentLoaded", function(){

  const exampleForm = document.querySelector('#example-form')

  exampleForm.addEventListener('submit', function(event){
    event.preventDefault()
  // get user input
    const inputField = document.querySelector('#example-form .input');
    const userInput = inputField.value;
    const userNumber = parseInt(userInput);

    // this initializes the array, sets array values
    let data = [0, 1, 2, 3, 5, 8];
    // data.push(userNumber)
    // checks to see if valuesa re greater than 8
    

    if(!isNaN(userNumber)){
      data.push(userNumber);
      let over8 = data.some(function(value){
        return value > 8;
      });
  // output to screen
      document.querySelector('#example-form .output').innerHTML = over8;
    }

    inputField.value = ''
  })

})

document.addEventListener("DOMContentLoaded", function(){

  const exampleForm = document.querySelector('#example-form2');

  exampleForm.addEventListener('submit', function(event){
    event.preventDefault();
    // initialize data
    let data = [2, 1, 7, 9, 5, 1];
    let sum = 0;
 
    const inputField = document.querySelector('#example-form2 .input');
    const userInput = inputField.value;
    const userNumber = parseInt(userInput);
    // the code below adds all numbers together

    if(!isNaN(userNumber)){
      data.push(userNumber);
      sum = data.reduce(function(sum, value){
        return sum + value;
      }); 
      // output answer to the screen
      document.querySelector('#example-form2 .output').innerHTML = sum
    }

    inputField.value = ''
  })

})

document.addEventListener("DOMContentLoaded", function(){

  const exampleForm = document.querySelector('#example-form3')

  exampleForm.addEventListener('submit', function(event){
    event.preventDefault()


    const data = [9, 8, 7, 6, 5, 4];

    // console.log(over5);

    const inputField = document.querySelector('#example-form3 .input')
    const userInput = inputField.value
    const userNumber = parseInt(userInput)

    if(!isNaN(userNumber)){
      // data.push(userNumber)
    let isInArray = data.includes(userNumber)
      // const sum = data.reduce((accumulator, currentElement) => accumulator + currentElement);

      document.querySelector('#example-form3 .output').innerHTML = isInArray;
    }

    inputField.value = ''
  })

})

document.addEventListener("DOMContentLoaded", function(){

  const exampleForm = document.querySelector('#example-form4')

  exampleForm.addEventListener('submit', function(event){
    event.preventDefault()

    // the array
    let data = [0, 1, 2, 3, 2, 1, 0]


    const inputField = document.querySelector('#example-form4 .input')
    const userInput = inputField.value
    const userNumber = parseInt(userInput)
    // this assures that only numbers are valued
    if(!isNaN(userNumber)){
      // configuring new array size
      let arraylength = data.length
      let end = arraylength - userNumber
      let newArray = data.slice(0, end)

      document.querySelector('#example-form4 .output').innerHTML = newArray;
    }

    inputField.value = ''
  })

})