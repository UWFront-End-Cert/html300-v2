// jQuery Doc Ready
//$(function () {
    // Set up some data and variables
//     const data = [1, 2, 3, 4],
//         input = $('.input'),
//         submit = $('.submit'),
//         resultSum = $('.sum');
//     // Click event on the submit input
//     submit.on('click', function () {
//         // Grab the input value and parse it into a number
//         const val = input.val();
//         const num = parseInt(val);
//         // Verify the user gave us a real number
//         if (!isNaN(num)) {
//             // Add our new number to the data array
//             data.push(num);
//             // Use reduce to convert our array of numbers into a single value - the sum of all of the numbers
//             const sum = data.reduce((acc, curr) => acc + curr);
//             // Add our new total to the page
//             resultSum.text(sum);
//             // Reset the input value to an empty string
//             input.val('');
//         }
//     });
// });
//map() method

$(function() {
const data = [5, 4, 8, 9, 3],
      input = $('.input'),
      submit = $('.submit'),
      result = $('.showOutput');
      // click is an event here
 submit.on('click', function() {
 //input value parsed into number
     const number = input.val();
     let num = parseInt(number);
    // define a variable which holds the functionality of map() method

     const som = data.map(function(n) {

     //here the map method takes the input value, multiplies it to each elements of an array and returns a new array
                  return num * n;


       });
        //console.log(num);
      result.text(som);
      input.val('');

});
});


//filter method()
$(function () {
const array = [4, 8, 6, 7, 3, 11, 16];

$(".submit1").on("click", function() {
  //get user input value
  const inputVal = $(".input1").val();
  //validate inputvalue to numbers using parseInt
  const inputVal1 = parseInt(inputVal);
// use filter function to differentiate numbers which has zero remainder aftervdevided by 2(even numbers in array)
  let arr2 = array.filter(function(num) {
  return num % inputVal == 0;
  })
//show array of even numbers on browser
  $(".result1").text(arr2);

  $(".input1").val("");

});



});


//reduce() method

$(function () {
  //set the array
const arr = [1,2,3, 10];
$(".submit2").on("click", function(n) {
//use reduce method to sum up the array value
let arr2 = arr.reduce(function(sum, val) {
            return sum + val;
   });
   console.log(arr2);
   //set a variable to get value
   const num = $(".input2").val();
   //validate input value
   const num2 = parseInt(num);

console.log(num2);
//first the reduce method summed up the array elements and then multiplies with the input value and show it on browser
$(".showOutput2").text(num2 * arr2);



});

});


//using some() method

$(function () {
//setting an array
const myArr = [24, 32, 44];

$(".submit3").on("click", function() {
//set variables for input and converting input value to valid numbers using parseInt
 const inputUser = $(".input3").val();
 const inputFinal = parseInt(inputUser);
 //using some() method to check if the input value is greater than

 let arr2 = myArr.some(function(num) {
  console.log(num);
    return  num > inputFinal ;

 });


//console.log(arr2);

$(".showOutput3").text(arr2);
//empty the user input box after the execution
$(".input3").val("");


})

});
