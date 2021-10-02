
//json data
const racesJSON = `
[
    {
        "image": "images/5k_female.jpg",
        "gender": "Female",
        "firstName": "Tirunesh",
        "lastName": "Dibaba",
        "race": "5K",
        "time": "14:06.62",
        "year": "2020",
        "country": "Ethiopia"
      
    },
    {
        "image": "images/5k_male.jpg",
        "gender": "Male",
        "firstName": "Joshua",
        "lastName": "Cheptegei",
        "race": "5K",
        "time": "12:35.36",
        "year": "2020",
        "country": "Uganda"
      
    },
    {
        "image": "images/10k_female.jfif",
        "gender": "Female",
        "firstName": "Sifan",
        "lastName": "Hassan",
        "race": "10K",
        "time": "29:06.82",
        "year": "2021",
        "country": "Ethiopia"
      
    },
    {
        "image": "images/10k_male.jfif",
        "gender": "Male",
        "firstName": "Joshua",
        "lastName": "Cheptegei",
        "race": "10K",
        "time": "26:11.00",
        "year": "2020",
        "country": "Uganda"
      
    },
    {
        "image": "images/half_female.jfif",
        "gender": "Female",
        "firstName": "Ababel ",
        "lastName": "Yeshaneh ",
        "race": "Half-Marathon",
        "time": "1:04:31",
        "year": "2021",
        "country": "Ethiopia"
      
    },
    {
        "image": "images/half_male.jfif",
        "gender": "Male",
        "firstName": "Kibiwott",
        "lastName": "Kandie",
        "race": "Half-Marathon",
        "time": "57:32:00",
        "year": "2020",
        "country": "Kenya"
      
    },
    {
        "image": "images/full_female.jfif",
        "gender": "Female",
        "firstName": "Mary ",
        "lastName": "Keitany ",
        "race": "Full-Marathon",
        "time": "2:17:01",
        "year": "2017",
        "country": "Kenya"
      
    },
    {
        "image": "images/full_male.jfif",
        "gender": "Male",
        "firstName": "Eliud ",
        "lastName": "Kipchoge",
        "race": "Full-Marathon",
        "time": "2:01:39",
        "year": "2018",
        "country": "Kenya"
      
    }
] `

//parse the JSON
const races = JSON.parse(racesJSON)

//find element to append to
const cont = document.querySelector('.main')

//show each element value in browser
races.forEach(function (e){

    //create each race
    let race = document.createElement('div')
    race.className = "runner"
    race.innerHTML = `
    <div class="runner-name">
        <img class="image" src="${e.image}">
        <h1>${e.firstName} ${e.lastName}</h1>
    </div>
    <div class="details">
    <p><strong>Distance:</strong> ${e.race}</p>  
    <p><strong>Gender:</strong> ${e.gender}</p>
      <p><strong>Race Year:</strong> ${e.year}</p>
      <p><strong>Country:</strong> ${e.country}</p>
      <p><strong>Time:</strong> ${e.time} min</p>
    </div>
 
    `
    cont.append(race)
})




  