// // Code that requires the DOM be loaded should not be run until the DOM is loaded
// document. addEventListener("DOMContentLoaded", function(){

//   // Find the example form, and handle its submit event
//   const exampleForm = document.querySelector('#example-form')

//   exampleForm.addEventListener('submit', function(event){
//     // Prevent the form from trying to submit to a server
//     event.preventDefault()

//     // An array that we can transform based on user input
//     let data = [0, 1, 2, 3, 5, 8]

//     const inputField = document.querySelector('#example-form .input')
//     const userInput = inputField.value
//     const userNumber = parseInt(userInput)

//     // If the user's input was a number, push it into the array and continue
//     if(!isNaN(userNumber)){
//       data.push(userNumber)

//       // Use reduce to sum all the numbers in the data array
//       const sum = data.reduce((accumulator, currentElement) => accumulator + currentElement);

//       // Output the total to the page- no need to convert the numeric sum back to a string, HTML will just print the number as a string
//       document.querySelector('#example-form .output').innerHTML = sum
//     }

//     // Clear the form field so the user can try again
//     inputField.value = ''
//   })

// })

const firstExample = document.getElementById('form-1');
firstExample.addEventListener('submit', e => {
    e.preventDefault();
    
    let numbers = [3, 4, 5, 6, 7, 8]
    const userInput = document.querySelector('#form-1 .input');
    const firstOutput = document.getElementById('output-1');

    let outputText = '';

    numbers.forEach(element => {
        let result = parseInt(userInput.value) * element;
        outputText += result + ' ';
    });

    firstOutput.textContent = '[ ' + outputText + '].';
})

const secondExample = document.getElementById('form-2');
secondExample.addEventListener('submit', e => {
    e.preventDefault();

    let itemList = ['eggs', 'butter', 'milk', 'chocolates', 'pickles', 'beans', 'artichokes', 'tomatoes'];

    const userInput = document.querySelector('#form-2 .input');
    const secondOutput = document.getElementById('output-2');

    const result = itemList.includes(userInput.value);

    if(result === true){
        secondOutput.textContent = `Yes, we found ${userInput.value} in my wife's list.`;
    } else {
        secondOutput.textContent = `No, we did not find ${userInput.value} in my wife's list.`;
    }
})

const thirdExample = document.getElementById('form-3');
thirdExample.addEventListener('submit', e => {
    e.preventDefault();

    let numberArray = [];
    let factorialResult = 0;
    let indexStart = 1;

    const userInput = document.querySelector('#form-3 .input');
    const thirdOutput = document.getElementById('output-3');

    const factorial = parseInt(userInput.value);

    if (factorial > 20 || factorial < 1){ 
        thirdOutput.textContent = 'Out of range, please put in values between 1 and 20'
        return; 
    } else { for( let i = factorial; i >= 1; i-- ) { numberArray.push(i); console.log(i)} }

    numberArray.reduce(
        (indexStart, currentValue) => indexStart * currentValue, factorialResult
    )

    thirdOutput.textContent = `${userInput.value}! is ${factorialResult}.`
})