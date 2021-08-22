//declare array
let myArray = [10, 20, 30, 40, 50]

//access form1
const form1 = document.querySelector('#pushToArray')

//prevent form from trying to submit to server
form1.addEventListener('submit', function(event) {
  event.preventDefault()

  //Handle input
  const userInput = document.querySelector('#pushToArray .input1').value
  const userNumber1 = parseInt(userInput)

  //add value to array if input is an integer and print to console
  if (!isNaN(userNumber1)) {
    myArray.push(userNumber1)

    }      

    //add a node to the document and display the output in that element
    const text1 = document.createTextNode(userNumber1 + ' has been added to the existing array:  ' + myArray)
    const h1 = document.createElement('h4')
    h1.appendChild(text1)
    this.appendChild(h1)
    
    this.classList.add('push')

})

//access form2
const form2 = document.querySelector('#mapToArray')

//prevent form from trying to submit to server
form2.addEventListener('submit', function(event) {
    event.preventDefault()

//handle user input
const userInput2 = document.querySelector('#mapToArray .input2').value
const userNumber2 = parseInt(userInput2)

//map user input number to existing array and return a new array with new values
let myArray2 = myArray.map(function(value){
return value + userNumber2
})

//create a header element and display the output in that element
const text2 = document.createTextNode(userNumber2 + ' has been added to each value of the existing array and the new values for the new array are:  ' + myArray2)
    const h = document.createElement('h4')
    h.appendChild(text2)
    this.appendChild(h)
    
    this.classList.add('mapping')
})


//access form3
const form3 = document.querySelector('#filterArray')

//prevent form from trying to submit to server
form3.addEventListener('submit', function(event) {
    event.preventDefault()

    //retrieve all the values in the array that are > 30
    let outputField = myArray.filter(function(value){
    
        return value > 30
    })

    //create a header element and display the filtered values
    const text3 = document.createTextNode('The array contains the following values > 30:  ' + outputField)
    const h3 = document.createElement('h4')
    h3.appendChild(text3)
    this.appendChild(h3)
    this.classList.add('filter')

})


//access form4
const form4 = document.querySelector('#reduce')

//prevent form from trying to submit to server
form4.addEventListener('submit', function(event) {
    event.preventDefault()

let inputArray = []

   const i1 = document.querySelector('#reduce .val1').value
   const userInput1 = parseInt(i1)
   inputArray.push(userInput1)
   
  const i2 = document.querySelector('#reduce .val2').value
  const userInput2 = parseInt(i2)
  inputArray.push(userInput2)
   
  const i3 = document.querySelector('#reduce .val3').value
  const userInput3 = parseInt(i3)
  inputArray.push(userInput3)

let sum = 0
let sum2 = inputArray.reduce(function(total, value){
return total + value
})

console.log(inputArray)
console.log(sum2)

//create a header element and display the filtered values
 const text4 = document.createTextNode('The sum of the values entered for the array is:  ' + sum2)
 
 const h4 = document.createElement('h4')
 h4.appendChild(text4)
 this.appendChild(h4)
  this.classList.add('reduce')

})

