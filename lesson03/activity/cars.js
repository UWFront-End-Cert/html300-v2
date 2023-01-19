// TODO: Create HTML code from cars JSON

const carsJSON = '[{"make":"Ford","model":"Mustang","year":2010,"color":"black"},{"make":"Chevy","model":"Corvette","year":1984,"color":"red"},{"make":"Jeep","model":"Wrangler","year":1999,"color":"silver"}]'

const cars = JSON.parse(carsJSON)

const container = document.querySelector('#list-container');

cars.forEach(function(el){
    let list = document.createElement('li');
    list.innerHTML = `
        ${el.make} ${el.model}, ${el.color}
    `;

    container.append(list);
})