// First sample. 
// setup start of empty variable calling the form desired
const firstForm = document.querySelector('#box-one')

this.addEventListener('submit', function(event){
    event.preventDefault();

    const startingData = [.99];

    // handle input
    // call for id of where the input appears on the form
    const userInput = document.querySelector('#box-one .input').value
    const userNumber = parseInt(userInput);

    // take the user input and multiply by the price using ES6
    let newNumber = startingData.map(function(value){
        return (value * userInput).toFixed(2)
    })

    // output the result to let the user know the total
    if(!isNaN(userNumber)){
        const output = document.querySelector('#box-one .output-one')
        output.innerHTML = `That'll be ${newNumber} plus tax.`;
    }
})

// Second form
const secondForm = document.querySelector('#box-two')

this.addEventListener('submit', function(event){
    event.preventDefault();

    const startingData = [12, 14, 21, 25, 28, 32, 37];

    // handle input
    // call for id of where the input appears on the form
    const userInput = document.querySelector('#box-two .input').value
    const userNumber = parseInt(userInput);

    // take the user input and add it to array values
    let newNumber = startingData.map(function(value){
        return value + userNumber
    })
    // console.log(newNumber)

    // output the result to let the user know the new array
    if(!isNaN(userNumber)){
        const output = document.querySelector('#box-two .output-two')
        output.innerHTML = `Our new array is: ${newNumber}.`;
    }
})

// Third form
const thirdForm = document.querySelector('#box-three')

this.addEventListener('submit', function(event){
    event.preventDefault();

    // handle input
    // call for id of where the input appears on the form
    const userInput = document.querySelector('#box-three .input')
    const userAge = parseInt(userInput.value)
    console.log(userAge)

    // handle output
    // First dog year = 15 human years
    // Second dog year = 9 human years
    // Total = 24 so we take that off user age
    // Each dog year after = 5 human years
    // Take the first 2 years off, divide by 5 and add 2 for the two first years we took off.
    // If this were to be published to a larger audience, I would factor in for those who are younger than 24.
    if(!isNaN(userAge)){
        const userDog = document.querySelector('#box-three .output-three')
        const dogAge = ((userAge - 24)/5 + 2);
        console.log(dogAge);
        userDog.innerHTML = `So as a dog, you're ${dogAge} years old!`;
    }
})

// Fourth Form 
const fourthForm = document.querySelector('box-four')

this.addEventListener('submit', function(event){
    event.preventDefault();

    // handle input
    const myNumber = '4'
    const userInput = document.querySelector('#box-four .input').value;
    const confirmAnswer = myNumber.includes(userInput);
    console.log(confirmAnswer) 

    // handel output to verify if user guessed correctly
    const output = document.querySelector('#box-four .output-four');
    if (confirmAnswer === true) {
        output.innerHTML = `You got it right!!`;
    } else {
        output.innerHTML = `Oops! Better luck next time!`;
    }

})

