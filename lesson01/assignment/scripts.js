// Using the 4 unique methods:
// Form 1, forEach, line 17
// Form 2, includes, line 34
// Form 3, reduce, line 63
// Form 4, filter, line 90

const firstExample = document.getElementById('form-1');
firstExample.addEventListener('submit', e => {
    e.preventDefault();
    
    let numbers = [3, 4, 5, 6, 7, 8]
    const userInput = document.querySelector('#form-1 .input');
    const firstOutput = document.getElementById('output-1');

    let outputText = '';

    numbers.forEach(element => {                            // for each element in 'numbers' array
        let result = parseInt(userInput.value) * element;   // converts string into int, multiplies it
        outputText += result + ' ';                         // puts the product into a string.
    });

    firstOutput.textContent = '[ ' + outputText + '].';
})

const secondExample = document.getElementById('form-2');
secondExample.addEventListener('submit', e => {
    e.preventDefault();

    let itemList = ['eggs', 'butter', 'milk', 'chocolates', 'pickles', 'beans', 'artichokes', 'tomatoes'];

    const userInput = document.querySelector('#form-2 .input');
    const secondOutput = document.getElementById('output-2');

    const result = itemList.includes(userInput.value);  // returns boolean, checks if itemList has
                                                        // item defined in userInput
    if(result === true){
        secondOutput.textContent = `Yes, we found ${userInput.value} in my wife's list.`;
    } else {
        secondOutput.textContent = `No, we did not find '${userInput.value}' in my wife's list.`;
    }
})

const thirdExample = document.getElementById('form-3');
thirdExample.addEventListener('submit', e => {
    e.preventDefault();

    let numberArray = [];

    // Assign html elements to JS variables
    const userInput = document.querySelector('#form-3 .input');
    const thirdOutput = document.getElementById('output-3');

    // Assign userInput to JS variable
    const factorial = parseInt(userInput.value);

    // Create array from factorial input
    if (factorial < 1 || factorial > 20 ){ 
        thirdOutput.textContent = 'Out of range, please put in values between 1 and 20';
        return; 
    } else { for( let i = factorial; i >= 1; i-- ) { numberArray.push(i)}};

    // Calculate factorial using reduce
    let factorialResult = numberArray.reduce(
        (previousValue, currentValue) => previousValue * currentValue, 1);
    
    // Output result and add commas to it; that's what the toLocaleString is for.   
    thirdOutput.textContent = `${userInput.value}! is ${factorialResult.toLocaleString('us-en')}.`
    })

const fourthExample = document.getElementById('form-4');
fourthExample.addEventListener('submit', e => {
    e.preventDefault();

    // Assign html element to JS variables
    const userInput = document.querySelector('#form-4 .input');
    const fourthOutput = document.getElementById('output-4');

    // Create array from 1 to 100, because I'm lazy to hard code it.
    let numberArray = [];
    for( let i = 1; i <= 100; i++ ) { numberArray.push(i) }

    // Assign userInput as int to JS variable
    const divNumber = parseInt(userInput.value);

    // Ensure divNumber is within range
    if (divNumber < 1 || divNumber > 100) {
        fourthOutput.textContent = `${divNumber} is out of range.`; return null;
    } else {
        // get filtered array of numbers between 1 and 100 divisible by divNumber
        let result =  numberArray.filter(number => (number % divNumber === 0));
        let resultString = '';
        result.forEach(item => resultString += item + ' ');
        fourthOutput.textContent = `These are the numbers that are divisible by ${divNumber}: ${resultString}`;
    }

})