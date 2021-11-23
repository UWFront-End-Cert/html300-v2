// Code that requires the DOM be loaded should not be run until the DOM is loaded
document.addEventListener("DOMContentLoaded", function () {

  //Initialize Default Array and Forms
  let numsArray = [10, 20, 30, 40];
  const totalForm = document.querySelector('#total');
  const modForm = document.querySelector('#mod');
  const everyForm = document.querySelector('#every');
  const filterForm = document.querySelector('#filter');

  //Sum of All Array Nums
  totalForm.addEventListener("submit", function (event) {
    event.preventDefault();

    //Handle User Inputs and Push to Default Array
    const userInput = this.querySelector('.num').value;
    const userNumber = parseInt(userInput);
    numsArray.push(userNumber);

    //Sum values in array
    let total = numsArray.reduce(function (sum, value) {
      return sum + value;
    });

    //Print values in Paragraph
    const text = `Your total of your input and our number list is ${total}`;
    const p = this.querySelector('p');
    p.innerHTML = text;
  });

  //Remainder of All Array Nums
  modForm.addEventListener("submit", function (event) {
    event.preventDefault();

    //Handle User Inputs 
    const userInput = this.querySelector('.num').value;
    const userNumber = parseInt(userInput);

    //Remainders of each value in array
    let modArray = numsArray.map(function (value) {
      return (value % userNumber);
    });

    //Print values in Paragraph
    const text = `Your new number list is [${modArray}]`;
    const p = this.querySelector('p');
    p.innerHTML = text;
  });

  //All Values Greater than Input
  everyForm.addEventListener("submit", function (event) {
    event.preventDefault();

    //Handle User Inputs 
    const userInput = this.querySelector('.num').value;
    const userNumber = parseInt(userInput);

    //Return boolean result of comparison
    let greaterResult = numsArray.every(function (value) {
      return value > userNumber;
    });

    //Print values in Paragraph based on result

    let text = `All numbers in the list aren't greater than ${userNumber}`;
    if (greaterResult) {
      text = `All numbers in the list are greater than ${userNumber}`;
    }

    const p = this.querySelector('p');
    p.innerHTML = text;
  });

  //Find Values in Array Greather Than Input
  filterForm.addEventListener("submit", function (event) {
    event.preventDefault();

    //Handle User Inputs and Push to Default Array
    const userInput = this.querySelector('.num').value;
    const userNumber = parseInt(userInput);

    //Filter values in array greater than user input
    let filterArray = numsArray.filter(function (value) {
      return value > userNumber
    });

    //Print values in Paragraph
    const text = `Your new number list is [${filterArray}]`;
    const p = this.querySelector('p');
    p.innerHTML = text;
  });

})