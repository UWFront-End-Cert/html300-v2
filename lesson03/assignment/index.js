// Code that requires the DOM be loaded should not be run until the DOM is loaded
document. addEventListener("DOMContentLoaded", function(){

// JSON data
const userData = `[
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


// parse json data
const content = JSON.parse(userData);

// query for template hook section
const container  = document.querySelector('.template-hook')

// add main class
container.className='main';

// loop through json and build cards
content.map(function(item) {
  let inside = document.createElement('div');
  inside.innerHTML = `
  <div class="employee-card">
  <div class="profile">
      <!-- dog -->
      <img class="headshot" src="./img/headshot.jpg" alt=${item.name}/>
      <p class="title">
          <strong>${item.name}</strong>
      </p>
      <p>
          <i>
          ${item.jobTitle}
          </i>
      </p>
  </div>
  <div class="experience">
      <!-- description -->
      <p>
          <strong> Company: </strong> ${item.company}
      </p>
      <p>
          <strong> Experience: </strong> ${item.experience}
      </p>
      <p>
          <strong> School: </strong> ${item.school}
      </p>
      <p>
          <strong> Major: </strong> ${item.major}
      </p>
      <p>
          <strong> Email: </strong> ${item.email}
      </p>
      <div class="center">
          <img src="./img/linkedin.svg" class="logo" alt="linkedin logo">
          <p class="profile-text">
              </strong> ${item.linkedInUrl}
          </p>
      </div>
  </div>
</div> <br>`

container.appendChild(inside);

})

})
