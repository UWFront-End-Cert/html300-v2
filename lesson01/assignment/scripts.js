// Code that requires the DOM be loaded should not be run until the DOM is loaded
document.addEventListener("DOMContentLoaded", function(){

  const exampleForm = document.querySelector('#example-form')

  exampleForm.addEventListener('submit', function(event){
    event.preventDefault()


    let data = [0, 1, 2, 3, 5, 8];
    let over4 = data.some(function(value){
      return value > 4;
    });

    console.log(over4);

    const inputField = document.querySelector('#example-form .input');
    const userInput = inputField.value;
    const userNumber = parseInt(userInput);

    if(!isNaN(userNumber)){
      data.push(userNumber)

      const sum = data.reduce((accumulator, currentElement) => accumulator + currentElement);

      document.querySelector('#example-form3 .output').innerHTML = sum
    }

    inputField.value = ''
  })

})

document.addEventListener("DOMContentLoaded", function(){

  const exampleForm = document.querySelector('#example-form2');

  exampleForm.addEventListener('submit', function(event){
    event.preventDefault();

    console.log('testing');
    let data = [2, 1, 7, 9, 5, 1];
    let sum = 0;
    // the code below adds all numbers together
    sum = data.reduce(function(sum, value){
      return sum + value;
    });
// console.log summarizes and displays the result in the console
    console.log(sum);

    const inputField = document.querySelector('#example-form2 .input');
    const userInput = inputField.value;
    const userNumber = parseInt(userInput);

    if(!isNaN(userNumber)){
      data.push(userNumber);

      const sum = data.reduce((accumulator, currentElement) => accumulator + currentElement);

      document.querySelector('#example-form2 .output').innerHTML = sum
    }

    inputField.value = ''
  })

})

document.addEventListener("DOMContentLoaded", function(){

  const exampleForm = document.querySelector('#example-form3')

  exampleForm.addEventListener('submit', function(event){
    event.preventDefault()


    let data = [9, 8, 7, 6, 5, 4];
    let over5 = false;
    for(let i = 0; i < data.length; i++){
      if(data[i] > 5){
        over5 = true;
        break;
      }
    }

    console.log(over5);

    const inputField = document.querySelector('#example-form3 .input')
    const userInput = inputField.value
    const userNumber = parseInt(userInput)

    if(!isNaN(userNumber)){
      data.push(userNumber)

      const sum = data.reduce((accumulator, currentElement) => accumulator + currentElement);

      document.querySelector('#example-form3 .output').innerHTML = sum
    }

    inputField.value = ''
  })

})

document.addEventListener("DOMContentLoaded", function(){

  const exampleForm = document.querySelector('#example-form4')

  exampleForm.addEventListener('submit', function(event){
    event.preventDefault()


    let data = [0, 1, 2, 3, 2, 1, 0]
    

    const inputField = document.querySelector('#example-form4 .input')
    const userInput = inputField.value
    const userNumber = parseInt(userInput)

    if(!isNaN(userNumber)){
      data.push(userNumber)

      const sum = data.reduce((accumulator, currentElement) => accumulator + currentElement);

      document.querySelector('#example-form4 .output').innerHTML = sum
    }

    inputField.value = ''
  })

})