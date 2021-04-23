// TODO: Create HTML code from cars JSON

const carsJSON = '[{"make":"Ford","model":"Mustang","year":2010,"color":"black"},{"make":"Chevy","model":"Corvette","year":1984,"color":"red"},{"make":"Jeep","model":"Wrangler","year":1999,"color":"silver"}]'

const cars = JSON.parse(carsJSON)
console.log(cars[0])

let output = "<ul>"

//TODO make output variable hold html with info about each car in the list
//this.make, this.model, this.year
cars.forEach(function(car){
    //print out key and value
    output += `<p>Your car is a: </p><li>${car.make}</li>` //or output = output + `<li>${car.make}</li>`
})

output += "</ul>"

document.querySelector("#list-container").innerHTML = output