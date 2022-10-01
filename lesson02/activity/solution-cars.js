const carsJSON = '[{"make":"Ford","model":"Mustang","year":2010,"color":"black"},{"make":"Chevy","model":"Corvette","year":1984,"color":"red"},{"make":"Jeep","model":"Wrangler","year":1999,"color":"silver"}]'
const cars = JSON.parse(carsJSON)

const container = document.querySelector('#list-container')

// Loop through all elements of the list
let carList = cars.forEach(function(el){

  // Build HTML 
  let list = document.createElement('ul')
  list.innerHTML = `
      <li>${el.make} ${el.model}</li>
      <li>Color: ${el.color}</li>
      <li>Year: ${el.year}</li>
  `
  // Insert HTML into page
  container.append(list)
})


