// TODO: Create HTML code from cars JSON

const carsJSON = '[{"make":"Ford","model":"Mustang","year":2010,"color":"black"},{"make":"Chevy","model":"Corvette","year":1984,"color":"red"},{"make":"Jeep","model":"Wrangler","year":1999,"color":"silver"}]'

const cars = JSON.parse(carsJSON)

console.log(cars[0])

let output = "hello!"

//TODO  make output variable hold html with info about each car in the list

document.querySelector("#list-container").innerHTML = output