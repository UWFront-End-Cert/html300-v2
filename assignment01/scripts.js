//Instructions
//The goal of this assignment is to use the latest ES6+ Javascript functionality.

//Create at least four pairs of input boxes and submit buttons.
//Use ES6+ array and object methods to manipulate the data input, and ouput the result with an explanation.
//Use at least 4 ES6+ methods.
//See example CodePen (your code should not use jQuery)
// addEventListener():  Attaches an event listener to the specified element. It is used to listen for the click event on each submit button.
// Submit Button 1
const submitButton1 = document.getElementById('submit1');
submitButton1.addEventListener('click', () => {
  const input1 = document.getElementById('input1');
  const inputValue = input1.value;

  const squaredValue = inputValue ** 2;
  console.log(`Input 1: ${inputValue}`);
  console.log(`Squared Value of your number is : ${squaredValue}`);
});
//Exponentiation Operator (**):Calculates the exponentiation of a number. It is used to calculate the squared value in the first submit button event handler
// Submit Button 2
const submitButton2 = document.getElementById('submit2');
submitButton2.addEventListener('click', () => {
  const input2 = document.getElementById('input2');
  const inputValue = input2.value;

  const multipliedBy6 = inputValue * 6;
  console.log(`Input 2: ${inputValue}`);
  console.log(`your number  multiplied by 6: ${multipliedBy6}`);
});
//Math.round(): Rounds a number to the nearest integer. It is used to round the input value in the third submit button event handler.
// Submit Button 3
const submitButton3 = document.getElementById('submit3');
submitButton3.addEventListener('click', () => {
  const input3 = document.getElementById('input3');
  const inputValue = input3.value;

  const roundedValue = Math.round(inputValue);
  console.log(`Input 3: ${inputValue}`);
  console.log(`Your rounded Value: ${roundedValue}`);
});
//Conditional (Ternary) Operator: Evaluates a condition and returns a value based on the condition. It is used to determine if the input value is odd or even in the fourth submit button event handler
// Submit Button 4
const submitButton4 = document.getElementById('submit4');
submitButton4.addEventListener('click', () => {
  const input4 = document.getElementById('input4');
  const inputValue = input4.value;

  const oddOrEven = inputValue % 2 === 0 ? 'even' : 'odd';
  console.log(`Input 4: ${inputValue}`);
  console.log(`Your number is ${oddOrEven}`);
});