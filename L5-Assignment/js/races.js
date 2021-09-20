// const race = {
//     image: "",
//     gender: "female",
//     firstName: "rName",
//     lastName: "lName",
//     race: "5K",
//     time: "14:41",
//     year: "2016"
// };

const racesJSON = `
[
    {
        "image": "images/potter.jfif",
        "gender": "female",
        "firstName": "Beth",
        "lastName": "Potter",
        "race": "5K",
        "time": "14:41",
        "year": "2016"
      
    }
] `

//parse the JSON
const races = JSON.parse(racesJSON)

//




//find element to append to
const cont = document.querySelector('#race-container')

//console.log each element
races.forEach(function (e){

    //create each race
    let race = document.createElement('div')
    race.className = "race-template"
    race.innerHTML = `
    <img class="image" src="${e.image}">
    <div class="details">
      <p>${e.firstName} ${e.lastName}</p>
      <p>${e.gender}</p>
      <p>${e.year}</p>
      <p>${e.time}</p>
    </div>
 
    `

    cont.append(race)
})




  