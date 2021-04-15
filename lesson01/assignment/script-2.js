// Search the "form", and handle its submit event
const form = document.querySelector('#first-form');
form.addEventListener('submit', function (event) {
    event.preventDefault()
    // create an array to transform or pass the user data, here an empty array
    let data = [ 'love' , 'peace', '&', 'harmony']
   
    //Target the input field to get data from the user
    const dataUser = document.querySelector('form .entry');

    // Get the user's data
    const grabDataUser = dataUser.value;

    // Print the output in the form plus a text, and display the data string
    document.querySelector('form span').innerHTML = `${'This is what you get '}` + ' " ' + grabDataUser + ' " ' + data.toString(); 

    // Slice method
    // Only works with words that contains at least 5 characters
    // Targest "slc1" button, and handle its click event
    slc1.addEventListener('click', function (e) {
        e.preventDefault();

        // slice method applied from the user's data
        let slc = grabDataUser.slice(0, -4);
        
        // Print the output
        document.getElementById('slc').innerHTML =  slc;  
    })
})


// Join method
// Search the "form2", and handle its submit event
const form2 = document.querySelector('#second-form');
form2.addEventListener('submit', function (evento) {
    evento.preventDefault()
    let array2 = [ 'Winter', 'Spring', 'Summer', 'Fall' ]
    
    // call the input when user click submit
    const btn1 = document.querySelector('#second-form #show-season');
    
    // The array prints out by using the join method
    document.querySelector('#print-season').innerHTML = array2.join(" - ");
})



// ForEach method
// Search the "form3", and handle its submit event
const form3 = document.querySelector('#third-form');
form3.addEventListener('submit', function (month) {
    month.preventDefault();

    // Declared the array
    const array3 = [ 'January', 'February', 'March' , 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    // forEach method passed through a function that will print out literally the array like a list
    array3.forEach(myFunction => document.querySelector('#third-form #print-month').innerHTML += myFunction + "<br>");
})
    
// Slice method
// Search the "form4", and handle its submit event
const form4 = document.querySelector('#fourth-form');
form4.addEventListener('submit', function (fru) {
    fru.preventDefault();
    // Array
    let fruits = [ 'Apples', 'Oranges', 'Kale', 'Berries'];

    // vegan will pass the slice method with the array above
    const vegan = fruits.slice(2, 3);

    // Outputs the 3 item of the list 
    document.querySelector('#result').innerHTML = `${'The answer is: '}` + vegan;
})


// Reduce method
// Search the "form5", and handle its submit event
const form5 = document.querySelector('#fith-form');
form5.addEventListener('submit', function (half) {
    half.preventDefault();
    
    // array 
    let nmbrs = [ 0 , 50, 100 ] 

    // this variable target the input to display the result
    const click3 = document.querySelector('#go');
    
    // declared this variable to apply 'reduce' method to do math through a function
    let result2 = nmbrs.reduce((sum, current) => sum + current, 0)
    
    // declared a variable that divides the method(result) with the length in the array 'nmbrs'
    const average = result2/nmbrs.length;
    
    // print the average value in the p tag with id called 'solution'
    document.querySelector('#fith-form #solution').innerHTML = average;
})

// Remove method
// Search the "click2" button, and handle its click event
const click2 = document.querySelector('#myFunction3')
    click2.addEventListener('click', function (color) {
    color.preventDefault();
    const noColor = document.querySelector('#myDiv')

    // it will remove the background color
    noColor.classList.remove('bg-red')
})