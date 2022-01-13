// LOTTERY NUMBER PICKER
// Turn the array into a string
let lottoArr = [23, 14, 59]
const lottoNumber = lottoArr.join('-')
console.log(lottoNumber)

const lottoForm = document.querySelector('#lotto')

// Add event listener for when user hits submit 
lottoForm.addEventListener('submit',function(event){
  event.preventDefault()

  //Handle user input for 'Lotto'
  const lottoInput = document.querySelector('#lotto .input').value
  const userNumber = parseInt(lottoInput)
  console.log(userNumber)

  //Handle output for 'Lotto'
  if(!isNaN(userNumber)){
    //Add user's number to the beginning of lottoNumber string 
    const lottoText = document.createTextNode(`Your lottery number is ${userNumber}-${lottoNumber}.`)
    let p = document.createElement('p')
    p.appendChild(lottoText)
    this.appendChild(p)
  }
})


// HOW MANY BURRITOS?
// Add event listener for when user hits submit 
const burritoForm = document.querySelector('#burritos')

burritoForm.addEventListener('submit', function(event){
  event.preventDefault()
  
  // Handle input
  const userInput = document.querySelector('#burritos .input').value
  const userNumber = parseInt(userInput)
  console.log(userNumber)
  
  if(!isNaN(userNumber)){
    // Handle output
    const text = document.createTextNode(`${userNumber + 26} burritos?! Take a bow, you're a beast!`)
    const p = document.createElement('p')
    p.appendChild(text)
    this.appendChild(p)
    this.classList.add('submitted')
  }
})

// WHICH NUMBER IS LARGER
    function largestNumber()
      {
// Find which number is larger with getElementById
        var num1, num2;
        num1 = Number(document.getElementById("first-number").value);
        num2 = Number(document.getElementById("second-number").value);

        if(num1>num2)
        {
          window.alert(num1+" is the larger number!");
        }
        else if(num2>num1)
        {
          window.alert(num2+" is the larger number!");
        }
        else if(num2>num1 && num2>num1)
        {
          window.alert(num2+" is the larger number!");
        }
      }
      
// FAHRENHEIT CONVERSION
// Take the user input and subtract 32 and divide by 1.8
function tempConverter(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("celsius-output").innerHTML = (valNum-32) / 1.8;
}
 