// Code that requires the DOM be loaded should not be run until the DOM is loaded
document.addEventListener("DOMContentLoaded", function() {

  // Find the example form, and handle its submit event
  const exampleForm = document.querySelector('#example-form')

  exampleForm.addEventListener('submit', function(event) {
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

})

// #1 Using the forEach method to list all the main Star Wars movies in order!
// Find the forEach form and handle its submit event
const forEachForm = document.querySelector('#forEach-form')

forEachForm.addEventListener('submit', function(event) {
  //Prevents the form from trying to submit to a server
  event.preventDefault()

  //Array of all main star wars movies that will be listed with their index in order
  const starWarsMovies = ["The Phantom Menace", "Attack of the Clones", "Revenge of the Sith", "A New Hope", "The Empire Strikes Back", "Return of the Jedi", "The Force Awakens", "The Last Jedi", "The Rise of Skywalker"];

  //forEach method that will run the listFunction for each element in the array
  let list = "";
  starWarsMovies.forEach(listFunction);
  document.querySelector("#starWars").innerHTML = list;
  //Function that lists each element in a numbered list vertically
  function listFunction(item, index) {
    //Added 1 to the index so the numbers are accurate to the movies
    list += (index + 1) + ": " + item + "<br>";
  }
})

// #2 Using the sort function to list the given array in order!
// Find the sort form and handle its submit event
const sortForm = document.querySelector("#sort-form")
sortForm.addEventListener('submit', function(event) {
  // Prevents the form from trying to submit to a server
  event.preventDefault()

  //Creates an array of baby names for each letter in the alphabet, unorganized.
  const babyNames = ["Emma", "Kennedy", "Parker", "Grace", "Yaretzi", "Olivia", "Ryan", "Willow", "Quinn", "Zachary", "Henry", "Isabella", "Xavier", "Ava", "Liam", "Sophia", "Theodore", "Benjamin", "James", "Mia", "Finn", "Charlotte", "Unique", "Noah", "Vincent", "Daniel"];

  //Sorts the original array in alphabetical order and creates a new array
  let sortedBabyNames = babyNames.sort();
  document.getElementById("listNames").innerHTML = "[" + sortedBabyNames + "]";
})


// #3 Using the map function to multiply the given array by whatever number a user inputs
// Finds the map form and handles its submit event
const mapForm = document.getElementById('map-form');

mapForm.addEventListener('submit', function(event) {
  // Prevent the form from trying to submit to a server
  event.preventDefault();

  // The default array that will be changed based on the users input
  const map_data = [12, 523, 2, 90, 1234567];
  // Finds the input field in order to clear it later
  const inputField = document.querySelector('#map-form .input');
  // Takes the value entered into the input box and converts it into integer. Returns NaN if a string is entered.
  let mapInput = document.getElementById("mapInput").value;
  let userNumber1 = parseInt(mapInput);

  // Use map to multiply each element by the input number and return value to a new array.
  let map_data_new = map_data.map(multiplyInput);
  function multiplyInput(numbers) {
    return numbers * userNumber1;
  }

  /* Used this to make sure a new array was created properly
  console.log(map_data_new);
  */

  // Output the new array to the page
  document.getElementById("mapOutput").innerHTML = "[" + map_data_new + "]";

  // Clear the form field so the user can try again
  inputField.value = '';
});

//#4 Using the filter method to take a users input of their birthyear to filter out years of historic events
const filterForm = document.querySelector('#filter-form');
filterForm.addEventListener('submit', function(event) {
  // Prevent the form from trying to submit to a server
  event.preventDefault();

  //Creates the beginning array listing the years of the historical events on the webpage
  const filter_data = [1903, 1954, 1969, 2004, 2007, 2014];
  const inputField = document.querySelector('#filter-form .input');
  // Takes the value entered into the input box and converts it into integer. Returns NaN if a string is entered.
  let filterInput = document.getElementById("filterInput").value;
  let userNumber2 = parseInt(filterInput);

  //Function to return the Birth Year of anything younger than the input year.
  function checkAge(birthYear) {
    return birthYear >= userNumber2;
  }
  //Uses the filter method to create a new array that gets rid of the years that have already passed after the users entered birth year.
  let historicYear = filter_data.filter(checkAge);
  document.getElementById("historicEvents").innerHTML = historicYear;
  //Clear the form field so the user can type another year
  inputField.value = '';
})