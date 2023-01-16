// Code that requires the DOM be loaded should not be run until the DOM is loaded
document.addEventListener("DOMContentLoaded", function(){

    // select the first input box
    const boxOne = document.querySelector('#box1');

    // handle the input and output for the first input box
    boxOne.addEventListener('submit', function(event){
        event.preventDefault();

        // get the value from the first box's input and change to lower case
        const iOne = document.querySelector('#box1 .input').value.toLowerCase(); 

        // check whether iOne has the letter I somewhere in the string
        let resultOne = iOne.includes('i');

        // output the first box's entry 
        const oOne = document.querySelector('#box1 .output')
        oOne.innerHTML = resultOne;
        
    })

    // select the second input box
    const boxTwo = document.querySelector('#box2');

    // handle the input and output for the second input box
    boxTwo.addEventListener('submit', function(event){
        event.preventDefault();

        // a sample array that will transform with ES6
        let egArray = [10, 12, 14, 18, 20, 22];

        // get the value from the second box's input and change to Int
        const iTwo = document.querySelector('#box2 .input').value;
        const numTwo = parseInt(iTwo);

        // push the value to the array
        egArray.push(numTwo);
        console.log(egArray);

        // take the sum of the array with ES6 method: 'reduce"
        const total = egArray.reduce((acc, curr) => acc + curr)
        
        // output the first box's entry 
        const oTwo = document.querySelector('#box2 .output')
        oTwo.innerHTML = total;
        
        
    })

    // select the third input box
    const boxThree = document.querySelector('#box3');

    // handle the input and output for the third input box
    boxThree.addEventListener('submit', function(event){
        event.preventDefault();
    
        // a sample array that will transform with ES6
        let yrsArray = [1981, 1986, 1999];
    
        // get the value from the third box's input and change to int
        const iThree = document.querySelector('#box3 .input').value;
        const numThree = parseInt(iThree);
    
        // push the value to the array
        yrsArray.push(numThree);
    
        // manipulate box3 input with the ES6 method: filter
        let resultThree = yrsArray.filter(function(year) {
            return year < 1990;
        });
    
        // output the third box's entry 
        const oThree = document.querySelector('#box3 .output')
        oThree.innerHTML = resultThree;
            
    })

    // select the fourth input box
    const boxFour = document.querySelector('#box4');

    // handle the input and output for the fourth input box
    boxFour.addEventListener('submit', function(event){
        event.preventDefault();
    
        // a sample array that will transform with ES6
        let yrsArray2 = [1981, 1986, 1999];
    
        // get the value from the fourth box's input and change to int
        const iFour = document.querySelector('#box4 .input').value;
        const numFour = parseInt(iFour);
    
        // push the value to the array
        yrsArray2.push(numFour);
    
        // manipulate box3 input with the ES6 method: filter
        let resultFour = yrsArray2.map(x => x + 10);
    
        // output the first box's entry 
        const oFour = document.querySelector('#box4 .output')
        oFour.innerHTML = resultFour;
            
    })    
});

