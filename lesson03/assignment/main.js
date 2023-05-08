// I wasn't sure how to import or fetch the JSON data over from the data.json file. So I just copied it over and then parsed data
const peopleJSON = `[
    {
      "name": "Paolo Maldini",
      "jobTitle": "Front End Developer",
      "company": "Web Weavers",
      "experience": "3 years",
      "school": "University of Washington",
      "major": "Marketing",
      "email": "paolo@example.com",
      "linkedInUrl": "paolo.linkedinprofile.com",
      "codeLanguages": [
          "HTML", "CSS", "JavaScript", "Node", "Express"
      ]
    },
    {
      "name": "Barbara Bonansea",
      "jobTitle": "Software Engineer",
      "company": "Excellence in the Cloud",
      "experience": "12 years",
      "school": "University of Southern California",
      "major": "Computer Science",
      "email": "barbara@example.com",
      "linkedInUrl": "barbara.linkedinprofile.com",
      "codeLanguages": [
          "HTML", "JavaScript", "C", "Go"
      ]
    },
    {
      "name": "Javier Hernandez",
      "jobTitle": "User Experience Engineer",
      "company": "Web Sites and More",
      "experience": "5 years",
      "school": "Seattle University",
      "major": "Performing Arts",
      "email": "javier@example.com",
      "linkedInUrl": "javier.linkedinprofile.com",
      "codeLanguages": [
          "HTML", "CSS"
      ]
    },
    {
      "name": "Maribel Dominguez",
      "jobTitle": "Front End Engineer",
      "company": "Bits and Bytes",
      "experience": "6 years",
      "school": "University of Washington",
      "major": "Mechanical Engineering",
      "email": "maribel@example.com",
      "linkedInUrl": "maribel.linkedinprofile.com",
      "codeLanguages": [
         "HTML", "CSS", "JavaScript", "React", "Vue", "Redux"
      ]
    }
  ]`
  
  const people = JSON.parse(peopleJSON)
  
  // Create a container for the cards that'll be made in the DOM
  const container = document.querySelector(`#template-hook`)
  
  // Creates a card template for each pup worker (haha cute) from the JSON data
  people.forEach(function(el){
    let card = document.createElement('div')
    let name = el.name
  
    // Giving longer names some extra room
    if (name.length >= 14) {
        card.innerHTML = `
          <div class="outer-profile">
            <img class="headshot" src="img/headshot.jpg" alt="a handsome white dog in a bowtie" height="230" width="230">
            <h1 style="margin-left: -1.5rem;">${el.name}</h1>
            <h2>${el.jobTitle}</h2>
          </div>
          <div class="inner-profile">
            <h3>Company:</h3>
            <p>${el.company}</p>
            <br>
            <h3>Experience:</h3>
            <p>${el.experience}</p>
            <br>
            <h3>School:</h3>
            <p>${el.school}</p>
            <br>
            <h3>Major:</h3>
            <p>${el.major}</p>
            <br>
            <h3>Coding Languages:</h3>
            <p>${el.codeLanguages}</p>
            <br>
            <h3>Email:</h3>
            <p>${el.email}</p>
            <br>
            <img class="logo" src="img/linkedin.svg" alt="linkedin logo" height="32" width="32">
            <p id="linkedin-text">${el.linkedInUrl}</p>
          </div>
        `
      }
  
      else {
        card.innerHTML = `
          <div class="outer-profile">
            <img class="headshot" src="img/headshot.jpg" alt="a handsome white dog in a bowtie" height="230" width="230">
            <h1>${el.name}</h1>
            <h2>${el.jobTitle}</h2>
          </div>
          <div class="inner-profile">
            <h3>Company:</h3>
            <p>${el.company}</p>
            <br>
            <h3>Experience:</h3>
            <p>${el.experience}</p>
            <br>
            <h3>School:</h3>
            <p>${el.school}</p>
            <br>
            <h3>Major:</h3>
            <p>${el.major}</p>
            <br>
            <h3>Coding Languages:</h3>
            <p>${el.codeLanguages}</p>
            <br>
            <h3>Email:</h3>
            <p>${el.email}</p>
            <br>
            <img class="logo" src="img/linkedin.svg" alt="linkedin logo" height="32" width="32">
            <p id="linkedin-text">${el.linkedInUrl}</p>
          </div>
        `
      }
    // Giving the card a class
    card.setAttribute('class', 'card')
  
    // Append new card to html
    container.append(card)
  })
  