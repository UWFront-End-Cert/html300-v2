// TODO: Create HTML code from cars JSON
const carsJSON = '[{"make":"Ford","model":"Mustang","year":2010,"color":"black"},{"make":"Chevy","model":"Corvette","year":1984,"color":"red"},{"make":"Jeep","model":"Wrangler","year":1999,"color":"silver"}]'

const cars = JSON.parse(carsJSON)

const container = document.querySelector('#list-container')

cars.forEach(function(el){
    let list = document.createElement('ul')
    list.innerHTML = `
    <li>${el.make} ${el.model}</li>
    <li>Color: ${el.color}</li>
    <li>Year: ${el.year}</li>
    `
    container.append(list)
})



// let carsHTML = cars.map(function(el) {
//     let car =`<article class="car">
//       <ul>
//        <li class="car__make">${el.make}</li>
//        <li class="car__model">${el.model}</li>
//        <li class="car__details">Color: ${el.color}</li>
//        <li class="car__details">Year: ${el.year}</li>
//       </ul>
//      </article>`;
   
//    return car;
//    })