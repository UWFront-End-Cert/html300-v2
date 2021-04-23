// TODO: Create HTML code from cars JSON

const carsJSON = '[{"make":"Ford","model":"Mustang","year":2010,"color":"black"},{"make":"Chevy","model":"Corvette","year":1984,"color":"red"},{"make":"Jeep","model":"Wrangler","year":1999,"color":"silver"}]'

const cars = JSON.parse(carsJSON);
console.log(cars[0]);

let output = "<ul>";

//TODO: make output variable hold html with info about each car in the list
// this.make, this.model
cars.forEach(function (car) {
  output = output + `<li>${car.make}</li>`
  //console.log(car.make);
})
// Print out key, value pairs
let keys = Object.keys(cars);
let values = Object.values(cars);
for(let i = 0; i < keys.length; i++) {
  output = output + `<li>${keys[i]; ${values[i]}}`

  for(const key in c) {
    output += ''
  }


output += "</ul>";
document.querySelector("#list-container").innerHTML = output;