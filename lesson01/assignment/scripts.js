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

    // An array that we can transform based on user input
    const people = [
    {name: 'Victor', age: 30},
    {name: 'Gail', age: 28},
    {name: 'John', age: 31},
    {name: 'Nhi', age: 60},
    {name: 'Daniel', age: 25},
    {name: 'Du', age: 70}
    ];

    const inputField = document.querySelector('#form1 .input');
    const userInput = inputField.value;
    const person = people.find(({name}) => name === userInput);
 
    // output the array item quantity based on user input
    document.querySelector('#form1 .output').innerHTML = person.age;
    document.querySelector('#form1 .name').innerHTML = userInput;
 
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

    // An array that we can transform based on user input
    const cpuParts = ['CPU', 'RAM', 'GPU', 'PSU', 'motherboard', 'case', 'SSD', 'wireless card', 'fans', 'OS', 'operating system', 'hard drive']

    const inputField = document.querySelector('#form2 .input');
    const userInput = inputField.value;
 
    // output the array item quantity based on user input
    document.querySelector('#form2 .output').innerHTML = cpuParts.includes(userInput);
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
    const ages = [30, 28, 31, 60, 25, 70]

    const inputField = document.querySelector('#form3 .input');
    const userInput = inputField.value;
    const ageMultiplied = ages.map(x => x * userInput);
 
    // output the array item quantity based on user input
    document.querySelector('#form3 .output').innerHTML = ageMultiplied;
 
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
    const phoneNumber = [4252758825, 2062421637, 4253799586];

    const inputField = document.querySelector('#form4 .input');
    const userInput = inputField.value;
    const userNumber = parseInt(userInput)

    if(!isNaN(userNumber)){
      phoneNumber.push(userNumber)

    const shortPhoneNumbers = phoneNumber.every(n => n.length < 99999999999);
    
 
    // output the array item quantity based on user input
    document.querySelector('#form4 .output').innerHTML = phoneNumber;
    document.querySelector('#form4 .output2').innerHTML = shortPhoneNumbers;
    // Clear the form field so the user can try again
    inputField.value = ''
  }
  })
})

