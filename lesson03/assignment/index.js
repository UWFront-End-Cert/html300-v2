//Array of objects from JSON data

const people = [
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

//Array.map to create HTML that builds the cardFolks

 let cardFolks = people.map(function(e) {

   return `
    <div class="biz-card">

      <div class="panel1">
        <img src="./img/headshot.jpg" alt="Portrait of ${e.name}">
        <h1>${e.name}</h1>
        <h2>${e.jobTitle}</h2>
      </div>

      <div class="panel2">
        <p><span>Company: </span>${e.company}</p>
        <p><span>Experience: </span>${e.experience}</p>
        <p><span>School: </span>${e.school}</p>
        <p><span>Major: </span>${e.major}</p>
        <p><span>Coding Languages: </span></p>
          <ul>${e.codeLanguages.map(function(l) {
            return '<li>' + l + '</li>';
            }).join('')}</ul>
        <p><span>Email: </span>${e.email}</p>
        <p class="linkedin"><img src="./img/linkedin.svg">${e.linkedInUrl}</p>
      </div>

    </div>`;

 }).join('');

  document.querySelector(".template-hook").innerHTML = cardFolks;
