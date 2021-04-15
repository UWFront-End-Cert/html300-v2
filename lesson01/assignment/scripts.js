// Code that requires the DOM be loaded should not be run until the DOM is loaded
document. addEventListener("DOMContentLoaded", function(){

  // Find the example form, and handle its submit event
  const exampleForm = document.querySelector('#example-form')

  exampleForm.addEventListener('submit', function(event){
    // Prevent the form from trying to submit to a server
    event.preventDefault()

    // An array that we can transform based on user input
    let data = [0, 1, 2, 3, 5, 8]
    //An array of names of family to compare
    let nameData = ['Dan', 'Carol', 'Doug', 'Ben','Anna','Ross','Madison','Jennifer','Emily','Tom','Lisa']
    //An array of ages to compares
    let ageData = [27, 25, 61]
    //An array of animals to compare
    let spiritAnimalsData = ['Rhino','Orangutan','Yak','Gazelle','Bear','Igauna','Viper']
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
    //Selects the 2nd input field
    const inputField2 = document.querySelector('#example-form .inputName')
    
    const userNameInput = inputField2.value
    //Searches array for name that matches user's name
    const matchingNameBoolean = nameData.includes(userNameInput)
    //Outputs true or false depending on if the user's name is a match
    document.querySelector('#example-form .output2').innerHTML = matchingNameBoolean    

   
    //Selects the 3rd input field
    const inputField3 = document.querySelector('#example-form .fathersName')
    const nameOfFather = inputField3.value
    //Checks the length of the user's father's name
    const fathersNameLength = nameOfFather.length
    //Compares the length of the user's father's name to the array names
    const namesLongerThanFathersName = nameData.filter(element => element.length > fathersNameLength)
    //Counts the number of names that are shorter than or equal to the user's father's name
    const numberOfLongerNames = namesLongerThanFathersName.length
    //Outputs the number of names that are longer than the user's father's name
    document.querySelector('#example-form .ouput3').innerHTML = numberOfLongerNames
    //Selects the 4th input field
    const inputField4 = document.querySelector('#example-form .userAgeInput')
    const userAge = inputField4.value
    //Evalutes the difference between the user age and each member of my immediate family, and finds the absolute value. I think I can do this with a loop but I'm not entirely sure how.
    ageDifferences = (ageData.map(x=> Math.abs(x - userAge)))
    document.querySelector('#example-form .output4').innerHTML = ageDifferences[0]
    document.querySelector('#example-form .output5').innerHTML = ageDifferences[1]
    document.querySelector('#example-form .output6').innerHTML = ageDifferences[2]
    //Selects the 5th input field
    const inputField5 = document.querySelector('#example-form .userAnimalInput')
    const colorValue = inputField5.value
    //Evalutes the first letter of the user's input
    const firstLetterValue = colorValue.charAt(0)
    //Converts the letter to uppercase
    const firstLetterValueCaps = firstLetterValue.toUpperCase()
    //Compares the user's input to the array
    spiritAnimalResult = spiritAnimalsData.find(element => element[0]== (firstLetterValueCaps))
    document.querySelector('#example-form .output7').innerHTML = spiritAnimalResult
     // Clear the form field so the user can try again
     inputField.value = ''
     

  })

})