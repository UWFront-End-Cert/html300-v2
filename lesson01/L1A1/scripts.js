// set the data and variables
let numbers = Array.from({length:10}, (_, i) => i + 1);
const input = document.querySelector('.input'),
submit = document.querySelector('.submit'),
result = document.querySelector('.result');

const form1 = document.querySelector('#form1');
form1.addEventListener('submit', function(event){
//prevent page from refreshing on submit
  event.preventDefault();
//pull the user input into a variable
  const inputValue = Number(document.querySelector('#favNumber').value);
//find the index of the user's input
  const resultValue1 = numbers.indexOf(inputValue);
//return the result to the HTML
  if(resultValue1 >= 0){
  result1.innerHTML = resultValue1;
  }
});

const form2 = document.querySelector('#form2');
form2.addEventListener('submit', function(event){
//prevent page from refreshing on submit
  event.preventDefault();
//pull the user input into a variable
  const inputValue2 = Number(document.querySelector('#input2').value);
//find the number at the index specified by the user
  const resultValue2 = numbers.at(inputValue2)
//return the result to the HTML
  if(resultValue2 >= 0){
  result2.innerHTML = resultValue2;
  }
});
