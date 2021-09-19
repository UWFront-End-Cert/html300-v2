const dogsJSON = `[
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
 ]
 `






//parse the data
const dogs = JSON.parse(dogsJSON)


//put in the main block section of HTML
const container = document.querySelector('.main-block')


// Loop through all the elements in the list
let dogList = dogs.forEach(function(el){

// Build HTML, what is inside each block
let list = document.createElement('main')
  list.innerHTML = `
  <main class="main-block">
    <div class="main-block__1">
      <img src="img/headshot.jpg" alt="headshot" class="main-block__img1">
      <h4 class="main-block__name">${el.name} </h4>
      <p class="main-block__jobtitle">${el.jobTitle} </p>
    </div>

    <div class="main-block__2">
      <ul>Company: ${el.company}</ul>
      <ul>Experience: ${el.experience}</ul>
      <ul>School: ${el.school}</ul>
      <ul>Major: ${el.major}</ul>
      <ul>Email: ${el.email}</ul>
      <ul>${el.linkedInUrl}</ul>
      <ul>Skills: ${el.codeLanguages}</ul>
      </div>

    </main>
  `




  // Insert the created HTML list into page
  container.appendChild(list)
})
