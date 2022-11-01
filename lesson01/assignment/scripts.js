// Code that requires the DOM be loaded should not be run until the DOM is loaded
document.addEventListener("DOMContentLoaded", function () {

  // Find the example form, and handle its submit event
  const exampleForm = document.querySelector('#example-form')

  exampleForm.addEventListener('submit', function (event) {
    // Prevent the form from trying to submit to a server
    event.preventDefault()

    // An array that we can transform based on user input
    let data = [0, 1, 2, 3, 5, 8]

    const inputField = document.querySelector('#example-form .input')
    const userInput = inputField.value
    const userNumber = parseInt(userInput)

    // If the user's input was a number, push it into the array and continue
    if (!isNaN(userNumber)) {
      data.push(userNumber)

      // Use reduce to sum all the numbers in the data array
      const sum = data.reduce((accumulator, currentElement) => accumulator + currentElement);

      // Output the total to the page- no need to convert the numeric sum back to a string, HTML will just print the number as a string
      document.querySelector('#example-form .output').innerHTML = sum
    }

    // Clear the form field so the user can try again
    inputField.value = ''
  })

  // My Code Homework

  // Created a new form section
  const mainEl = document.querySelector('main');
  const newForm = document.createElement('form');
  newForm.setAttribute('id', 'new-form');
  mainEl.appendChild(newForm);

  // new array to be manipulated by user input
  let newArray = [1, 2, 3, 4, 5, 6];

  // creates the userside visual DOM array - not required, just for fun
  const newFormHeader = document.createElement('h2');
  newFormHeader.innerHTML = 'The current array is ';
  const newArrayDOM = document.createElement('span');
  newArrayDOM.innerHTML = `[${newArray}]`;
  newForm.appendChild(newFormHeader);
  newFormHeader.appendChild(newArrayDOM);


  // Reueseable function for creating form pairs
  formPair = (labelContent, inputClassName, outputClassName, submitName, paraContent) => {

    // creates the label and content passed into the function
    const labelEl = document.createElement('label');
    labelEl.innerHTML = labelContent;
    newForm.appendChild(labelEl);

    // creates the input field
    const inputElOne = document.createElement('input');
    inputElOne.setAttribute('type', 'text');
    inputElOne.setAttribute('class', inputClassName);
    labelEl.appendChild(inputElOne);

    // creates the submit button
    const submitEl = document.createElement('input');
    submitEl.setAttribute('type', 'submit');
    submitEl.setAttribute('value', 'Submit');
    submitEl.setAttribute('class', 'submitOne-1');
    submitEl.setAttribute('name', submitName);
    newForm.appendChild(submitEl);

    //creates the details below the form field
    const paraEl = document.createElement('p');
    paraEl.innerHTML = paraContent;
    newForm.appendChild(paraEl);
    const spanEl = document.createElement('span');
    spanEl.setAttribute('class', outputClassName);
    paraEl.appendChild(spanEl)

  }

  // this object provides content for each form pair
  const ParaVal = {
    q1: {
      inputDescription: 'Choose a number to add to the end of the array: ',
      inputClass: 'question-one',
      outputClass: 'output-one',
      submitNameVal: 'sumbitOne',
      outputContent: `You chose to add the value of: `
    },
    q2: {
      inputDescription: 'Choose how many numbers to remove from the beginning of the array: ',
      inputClass: 'question-two',
      outputClass: 'output-two',
      submitNameVal: 'sumbitTwo',
      outputContent: 'You chose to remove this many index: '
    },
    q3: {
      inputDescription: 'Choose a number in the array to find the index ',
      inputClass: 'question-three',
      outputClass: 'output-three',
      submitNameVal: 'sumbitThree',
      outputContent: 'The index of this array is: '
    },
    q4: {
      inputDescription: 'Choose a number to add to the beginning of the array: ',
      inputClass: 'question-four',
      outputClass: 'output-four',
      submitNameVal: 'sumbitFour',
      outputContent: 'You chose to add the number: '
    }
  };

  // creates each form pair and pushes in parameters from the parameter object
  formPair(ParaVal.q1.inputDescription, ParaVal.q1.inputClass, ParaVal.q1.outputClass, ParaVal.q1.submitNameVal, ParaVal.q1.outputContent);
  formPair(ParaVal.q2.inputDescription, ParaVal.q2.inputClass, ParaVal.q2.outputClass, ParaVal.q2.submitNameVal, ParaVal.q2.outputContent);
  formPair(ParaVal.q3.inputDescription, ParaVal.q3.inputClass, ParaVal.q3.outputClass, ParaVal.q3.submitNameVal, ParaVal.q3.outputContent);
  formPair(ParaVal.q4.inputDescription, ParaVal.q4.inputClass, ParaVal.q4.outputClass, ParaVal.q4.submitNameVal, ParaVal.q4.outputContent);

  newForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // this checks for the submit name value
    const submitName = document.activeElement.name;

    // this takes the input string value and converts to a number
    const inputElOne = document.querySelector('#new-form .question-one');
    let inputValOne = parseInt(inputElOne.value);



    const inputElTwo = document.querySelector('#new-form .question-two');
    let inputValTwo = parseInt(inputElTwo.value);

    const inputElThree = document.querySelector('#new-form .question-three');
    let inputValThree = parseInt(inputElThree.value);

    const inputElFour = document.querySelector('#new-form .question-four');
    let inputValFour = parseInt(inputElFour.value);

    function complete(el) {
      // adds the input numner to the userside DOM array
      newArrayDOM.innerHTML = `[${newArray}]`;

      // Resets the input value
      el.value = '';
    }

    if (submitName === "sumbitOne" && !isNaN(inputValOne)) {

      // adds the input number to the array
      newArray.push(inputValOne);

      // adds the input number to paragraph 
      const testEl = document.getElementsByClassName('output-one');
      testEl[0].innerHTML = `${inputValOne}`;

      complete(inputElOne);

    } else if (submitName === "sumbitTwo" && !isNaN(inputValTwo)) {

      // this copies the array, removes the input amount of index and replaced the array with the new
      const Q2Array = newArray.slice(inputValTwo);
      newArray = Q2Array;

      // adds the input number to paragraph 
      const inputDisplay2 = document.getElementsByClassName('output-two');
      inputDisplay2[0].innerHTML = `${inputValTwo}`;

      complete(inputElTwo);

    } else if (submitName === "sumbitThree" && !isNaN(inputValThree)) {

      // this finds the index of the input request
      const q3val = newArray.indexOf(inputValThree);

      const inputDisplay3 = document.getElementsByClassName('output-three');
      inputDisplay3[0].innerHTML = `${q3val}`;

      inputElThree.value = '';

    } else if (submitName === "sumbitFour" && !isNaN(inputValFour)) {

      // this adds the input number to the beginning of the array
      newArray.unshift(inputValFour);

      const inputDisplay4 = document.getElementsByClassName('output-four');
      inputDisplay4[0].innerHTML = `${inputValFour}`;

      complete(inputElFour);
    } 
  })

})