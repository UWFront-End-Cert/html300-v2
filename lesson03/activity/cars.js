// TODO: Create HTML code from cars JSON
/// this is JSON
const carsJSON = '[{"make":"Ford","model":"Mustang","year":2010,"color":"black"},{"make":"Chevy","model":"Corvette","year":1984,"color":"red"},{"make":"Jeep","model":"Wrangler","year":1999,"color":"silver"}]'

//turning it into javascript
const cars = JSON.parse(carsJSON)

//pull first
console.log(cars[0])

let output ="<ul>"

//TODO make out put variable hold html with info about each car in the list

//this.make, this.model, this.year
cars.forEach(function(c){

  //print out key and value
  for(const key in c){
    output += `<li>${key}: ${c[key]}</li>`
  }
})
