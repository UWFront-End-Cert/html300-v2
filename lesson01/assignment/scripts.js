// jQuery Doc Ready
$(function () {

    // Set up some data and variables
    let data = [1, 2, 3, 4, 11, 14, 18, 20, 25, 30];
    let input = $('.input');
    let submit = $('.submit');
    let resultSum = $('.sum');

    // REDUCE() METHOD
    let reduceMethod = $('.reduce-method');
    reduceMethod.find(submit).on('click', () => {

        // Grab the input value and parse it into a number
        const val = input.val();
        const num = parseInt(val);

        // Verify the user gave us a real number
        if (!isNaN(num)) {
            // Add our new number to the data array
            data.push(num);
            // Use reduce to convert our array of numbers into a single value - the sum of all of the numbers
            const sum = data.reduce((acc, curr) => acc + curr);
            // Add our new total to the page
            reduceMethod.find(resultSum).text(`The Total with Reduce: ${sum}`);
            // Reset the input value to an empty string
            input.val('');
        }
    });

    // EVERY() METHOD
    let everyMethod = $('.every-method');
    everyMethod.find(submit).on('click', () => {

        // Grab the input value and parse it into a number
        let val = everyMethod.find(input).val();
        let everyVal = parseInt(val);

        // Verify the user gave us a real number
        if (!isNaN(everyVal)) {
            // Use every()
            const everyNumber = data.every(n => n <= everyVal);
            // Add results to the page based on conditions
            if (everyNumber) {
                everyMethod.find(resultSum).text(`True: ${everyVal} is greater than the highest element in the array.`);
            } else {
                everyMethod.find(resultSum).text(`False: ${everyVal} is NOT greater than the elements in the array.`);
            }
            // Reset the input value to an empty string
            input.val('');
        }
    });

    // FILTER() METHOD
    let filterMethod = $('.filter-method');
    filterMethod.find(submit).on('click', () => {

        // Grab the input value and parse it into a number
        let val = filterMethod.find(input).val();
        let filterNum = parseInt(val);

        // Verify the user gave us a real number
        if (!isNaN(filterNum)) {
            // Use filter()
            const filteredArray = data.filter(n => n >= filterNum);
            // Add results to the page based on conditions
            if (filteredArray) {
                filterMethod.find(resultSum).text(`The Number ${filterNum} is less than or equal to the following elements: ${filteredArray} `);
            } else {
                filterMethod.find(resultSum).text(`Sorry is way off. Please try agin.`);
            }
            // Reset the input value to an empty string
            input.val('');
        }
    });

    // MAP() METHOD
    let mapMethod = $('.map-method');
    mapMethod.find(submit).on('click', () => {

        // Grab the input value and parse it into a number
        let val = mapMethod.find(input).val();
        let mapVal = parseInt(val);

        // Verify the user gave us a real number
        if (!isNaN(mapVal)) {
            // User map()
            let mapArray = data.map(n => n * mapVal);
            // Add results to the page
            mapMethod.find(resultSum).text(`Elements After Being Multiplied By ${mapVal} are: ${mapArray}`)
            // Reset the input value to an empty string
            input.val('');
        }
    })

    // FIND() METHOD
    let findMethod = $('.find-method');
    findMethod.find(submit).on('click', () => {

        // Grab the input value and parse it into a number
        let val = findMethod.find(input).val();
        let findVal = parseInt(val);

        if (!isNaN(findVal)) {
            // Use find()
            let findArray = data.find(n => n > findVal);
            // Add results to the page
            findMethod.find(resultSum).text(`The First Element After ${findVal} in the given array is: ${findArray}`)
            // Reset the input value to an empty string
            input.val('');
        }
    })

    // SOME() METHOD
    let someMethod = $('.some-method');
    someMethod.find(submit).on('click', () => {

        // Grab the input value and parse it into a number
        let val = someMethod.find(input).val();
        let someNum = parseInt(val);

        // Verify the user gave us a real number
        if (!isNaN(someNum)) {
            // Use filter()
            const someVal = data.some(n => n >= someNum);
            // Add results to the page based on conditions
            if (someVal) {
                // Add restuls to the page if True
                someMethod.find(resultSum).text(`${someVal}: The Number ${someNum} is LESS than or equal to the elements in the array.`);
            } else {
                // Add restuls to the page if False
                someMethod.find(resultSum).text(`${someVal}: The Number ${someNum} is NOT less than or equal the elements in the array. It is Over.`);
            }
            // Reset the input value to an empty string
            input.val('');
        }
    });

    // ACCORDIAN / TABS
    const acc = document.getElementsByClassName("accordion");
    for (let i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            let panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }

});