// Code that requires the DOM be loaded should not be run until the DOM is loaded
document. addEventListener("DOMContentLoaded", function(){

  // Find the forms, and handle its submit event
  const exampleForm = document.querySelector('#example-form');
  const form1 = document.querySelector('#form1');
  const form2 = document.querySelector('#form2');
  const form3 = document.querySelector('#form3');
  const form4 = document.querySelector('#form4');

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

  form1.addEventListener('submit', function(event){
    // Prevent the form from trying to submit to a server
    event.preventDefault()

    // An array that we can transform based on user input
    let data1 = ['apples', 'bananas', 'carrots', 'bread']

    const inputField1 = document.querySelector('#form1 .input')
    const userItem = inputField1.value


    // If the user's input was a word, push it into the array and continue
    if(isNaN(userItem)){
      data1.push(userItem)

      // Output the total to the page- no need to convert the numeric sum back to a string, HTML will just print the number as a string
      document.querySelector('#form1 .output').innerHTML = data1
    }

    var eggs = data1.includes('eggs');
    document.getElementById('eggs').innerHTML = eggs;

    // Clear the form field so the user can try again
    inputField1.value = ''
  })

  form2.addEventListener('submit', function(event){
    // Prevent the form from trying to submit to a server
    event.preventDefault()

    // An array that we can transform based on user input
    let numlist = [2 , 3 , 4 , 5 , 6]

    const inputField2 = document.querySelector('#form2 .input')
    const userItem2 = inputField2.value
    const userNumber2 = parseInt(userItem2)

    // If the user's input was a number, push it into the array and continue
    if(!isNaN(userNumber2)){
      let x = numlist.map(numlist => numlist * userNumber2);
      document.querySelector('#form2Num').innerHTML = userNumber2;
      document.querySelector('#form2 .output').innerHTML = x;
    }

    // Clear the form field so the user can try again
    inputField2.value = ''
  })

  form3.addEventListener('submit', function(event){
    // Prevent the form from trying to submit to a server
    event.preventDefault()

    // An array that we can transform based on user input
    let numbers = [2 , 3 , 4 , 5 , 6]

    const inputField3 = document.querySelector('#form3 .input')
    const userItem3 = inputField3.value
    const userNumber3 = parseInt(userItem3)

    // If the user's input was a number, push it into the array and continue
    if(!isNaN(userNumber3)){
      let overFilter = numbers.filter(x => x > userNumber3);
      document.querySelector('#form3 .output').innerHTML = `Here is the array for every number greater than ${userNumber3}: ${overFilter}`;
    }

    // Clear the form field so the user can try again
    inputField3.value = ''
  })


  // An array that we can transform based on user input
  let age = [16, 19, 20, 56, 21, 56]
  document.querySelector('.agelist').innerHTML = `${fruit}`;
  form4.addEventListener('submit', function(event){
    // Prevent the form from trying to submit to a server
    event.preventDefault()

    const inputField4 = document.querySelector('#form4 .input')
    const userItem4 = inputField4.value
    const userNumber4 = parseInt(userItem4)

    // If the user's input was a number, push it into the array and continue
    if(!isNaN(userNumber4)){
      let shortName = age.every(n => n.length < userNumber4);
      document.querySelector('#form4 .output').innerHTML = `${shortName}: All ages are less than ${userNumber4}.`;
    }

    // Clear the form field so the user can try again
    inputField4.value = ''
  })


})
