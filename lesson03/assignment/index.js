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

const propContainer = document.querySelector('#intro')
const cardContainer = document.querySelector('#info-container')

let card = profile.forEach(function(el){
  let proPic = document.createElement('p')
  proPic.innerHTML = `
  <p>${el.name}</p>
  <p>${el.jobTitle}</p>
  `
  propContainer.append(proPic)

  let list = document.createElement('ul')
  list.innerHTML = `
    <li>Company: ${el.company}</li>
    <li>Experience: ${el.experience}</li>
    <li>School: ${el.school}</li>
    <li>Major: ${el.major}</li>
    <li>Email: ${el.email}</li>
    <li>LinkedIn: ${el.linkedInUrl}</li>
    <li>Languages: ${el.codeLanguages}</li>
  `
  cardContainer.append(list)

})
