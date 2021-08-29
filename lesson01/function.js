//set up the data
const firstForm = document.querySelector('#number1')

if (firstForm) {
  //prevent the default of the page after click the submit button
  firstForm.addEventListener('click', function(event) {
    event.preventDefault()

    //set up the array for calculation, use the value from the user input, and make sure it is a number
    let array = [2, 3, 4, 5];
    const userInput = document.querySelector('#number1 .input').value
    const userNumber = parseInt(userInput)
    //console log to check if the user data is entered
    console.log(userNumber)
    //check to make sure it is a number that is entered, and add the user entered number into the array
    if (!isNaN(userNumber)) {
      array.push(userNumber)

      //use reduce to make the array into a single value, get the total and show it on the site, refresh everytime user enter a new value
      document.getElementById('number001').innerHTML = array.reduce(function(total, num) {
          return total + num
        }

      )
    }
  })
}


//set up the data
const ndForm = document.querySelector('#number2')

if (ndForm) {
  //prevent the default of the page after click the submit button
  ndForm.addEventListener('click', function(event) {
    event.preventDefault()

    //set up the array for calculation, use the value from the user input, and make sure it is a number
    let array = [10, 3, 17, 99];
    const userInput = document.querySelector('#number2 .input').value
    const userNumber = parseInt(userInput)
    //console log to check if the user data is entered
    console.log(userNumber)
    //check to make sure it is a number that is entered, and add the user entered number into the array
    if (!isNaN(userNumber)) {
      array.push(userNumber)

      //use some to check if at least one number is greater or equals to 100, refresh everytime user enter a new value
      document.getElementById('number002').innerHTML = array.some(function(value) {
          return value >= 100;

        }

      )
    }
  })
}


//set up the data
const rdForm = document.querySelector('#number3')

if (rdForm) {
  //prevent the default of the page after click the submit button
  rdForm.addEventListener('click', function(event) {
    event.preventDefault()

    //set up the array for calculation, use the value from the user input, and make sure it is a number
    let array = [10, 3, 17, 99];
    const userInput = document.querySelector('#number3 .input').value
    const userNumber = parseInt(userInput)
    //console log to check if the user data is entered
    console.log(userNumber)
    //check to make sure it is a number that is entered, and add the user entered number into the array
    if (!isNaN(userNumber)) {
      array.push(userNumber)

      //use filter to list all number greater than 12, refresh everytime user enter a new value
      document.getElementById('number003').innerHTML = array.filter(function(value) {
          return value > 12;


        }

      )
    }
  })
}

const fourthForm = document.querySelector('#number4')

if (fourthForm) {
  //prevent the default of the page after click the submit button
  fourthForm.addEventListener('click', function(event) {
    event.preventDefault()

    //set up the array for calculation, use the value from the user input, and make sure it is a number
    let array = [5, 19, 20, 236];
    const userInput = document.querySelector('#number4 .input').value
    const userNumber = parseInt(userInput)
    //console log to check if the user data is entered
    console.log(userNumber)
    //check to make sure it is a number that is entered, and add the user entered number into the array
    if (!isNaN(userNumber)) {
      array.push(userNumber)

      //use every to show every number that is greater or equals to 21, but there is a 5 in the array, so it will return false regardless
      // refresh everytime user enter a new value
      document.getElementById('number004').innerHTML = array.every(function(value) {
          return value >= 21;

        }

      )
    }
  })
}
