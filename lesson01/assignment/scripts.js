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
})

document. addEventListener("DOMContentLoaded", function(){

  // Find the example form, and handle its submit event
  const form1 = document.querySelector('#form1')

  form1.addEventListener('submit', function(event){
    // Prevent the form from trying to submit to a server
    event.preventDefault()

    // An array that we check based on user input
    const people = [
    {name: 'Victor', age: 30},
    {name: 'Gail', age: 28},
    {name: 'John', age: 31},
    {name: 'Nhi', age: 60},
    {name: 'Daniel', age: 25},
    {name: 'Du', age: 70}
    ];

    const inputField = document.querySelector('#form1 .input'); //take the users information entered
    const userInput = inputField.value; //converting user input into a constant called userInput
    const person = people.find(({name}) => name === userInput); //look in the array and see if there is a name object that corresponds with the users input
 
    // output the array item quantity based on user input
    document.querySelector('#form1 .output').innerHTML = person.age; //return the age of the person found
    document.querySelector('#form1 .name').innerHTML = userInput; //reeturn the name of the person found
 
    // Clear the form field so the user can try again
    inputField.value = ''
  })
})

document. addEventListener("DOMContentLoaded", function(){

  // Find the example form, and handle its submit event
  const form2 = document.querySelector('#form2')

  form2.addEventListener('submit', function(event){
    // Prevent the form from trying to submit to a server
    event.preventDefault()

    // An array that we check based on user input
    const cpuParts = ['CPU', 'RAM', 'GPU', 'PSU', 'motherboard', 'case', 'SSD', 'wireless card', 'fans', 'OS', 'operating system', 'hard drive']

    const inputField = document.querySelector('#form2 .input'); //save the users data input as a constant called inputField
    const userInput = inputField.value; //saving inputField to userInput
 
    // output the array item quantity based on user input
    document.querySelector('#form2 .output').innerHTML = cpuParts.includes(userInput); //return true if something typed is included from the array.
    // Clear the form field so the user can try again
    inputField.value = ''
  })
})

document. addEventListener("DOMContentLoaded", function(){

  // Find the example form, and handle its submit event
  const form3 = document.querySelector('#form3')

  form3.addEventListener('submit', function(event){
    // Prevent the form from trying to submit to a server
    event.preventDefault()

    // An array that we can transform based on user input
    const people = [
    {name: 'Victor', age: 30},
    {name: 'Gail', age: 28},
    {name: 'John', age: 31},
    {name: 'Nhi', age: 60},
    {name: 'Daniel', age: 25},
    {name: 'Du', age: 70}
    ];
    const ages = [30, 28, 31, 60, 25, 70] //values of the ages of people

    const inputField = document.querySelector('#form3 .input'); //saving users input as a constant called inputField
    const userInput = inputField.value; //saving inputField as userInput
    const ageMultiplied = ages.map(x => x * userInput); //multiplying each age in the age array by the value of the userInput value
 
    // output the array item quantity based on user input
    document.querySelector('#form3 .output').innerHTML = ageMultiplied; //return the multiplied array values into the .output class span element
 
    // Clear the form field so the user can try again
    inputField.value = ''
  })
})

document. addEventListener("DOMContentLoaded", function(){

  // Find the example form, and handle its submit event
  const form4 = document.querySelector('#form4')

  form4.addEventListener('submit', function(event){
    // Prevent the form from trying to submit to a server
    event.preventDefault()

    // An array that we can transform based on user input
    phoneNumber = ["4252758825", "2062421637", "4253799586"];

    const inputField = document.querySelector('#form4 .input'); //saving user input into inputField constant
    const userInput = inputField.value; //saving inputField as userInput
    const userNumber = userInput //saving userInput as userNumber

      phoneNumber.push(userNumber) //pushing the user value into the array

    shortPhoneNumbers = phoneNumber.every(n => n.length >= 10); //check every array item to make sure it is equal to or greater than 10 characters/digits
    
 
    // output the array item quantity based on user input
    document.querySelector('#form4 .output').innerHTML = phoneNumber; //return the values of all the array items.
    document.querySelector('#form4 .output2').innerHTML = shortPhoneNumbers; //return false if less than 10 length
    // Clear the form field so the user can try again
    inputField.value = ''
  })
})

