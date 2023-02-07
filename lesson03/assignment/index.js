const profileJSON = `
[{
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

const profile = JSON.parse(profileJSON)
//console.log(profile) - code is functioning

const cardContainer = document.querySelector('#info-container')

let card = profile.forEach(function(el){
  let list = document.createElement('ul')
  list.innerHTML = `
  <div class="card">
    <article class="card_left">
      <img class="profile-pic" src="./img/headshot.jpg" alt="a cute dog wearing a black bowtie">
      <h1><b>${el.name}</b></h1>
      <p><i>${el.jobTitle}</i></p>
    </article>
    <aside class="info">
      <p><b>Company:</b> ${el.company}</p>
      <p><b>Experience:</b> ${el.experience}</p>
      <p><b>School:</b> ${el.school}</p>
      <p><b>Major:</b> ${el.major}</p>
      <p><b>Email:</b> ${el.email}</p>
      <div class="linkedIn"><img src="./img/linkedin.svg" alt="the Linkelogo"><p> ${el.linkedInUrl}</p></div>
    </aside>
  </div>
  `
  cardContainer.append(list)
})

// Code languages bonus element
//let codeLanguages = '<ul>'
//el.codeLanguages.forEach(function(el) {
//  codeLanguages += `
//  <li>${el}</li>
//  `
//});

//codeLanguages += '</ul>'
