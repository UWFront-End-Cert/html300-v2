const personJSON = [
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
      }
      ,
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

function personTemplate(person) {
  return `
  <div class="card-container">
    <div class="card">
      <div class="profile-pic">
          <img src="img/headshot.jpg" alt=""></img>
          <h2 class="person-name">${person.name}</h2>
          <p>${person.jobTitle}</p>
      </div>
      <div class="info">
          <ul> 
              <li><span>Company:</span> ${person.company}</li>
              <li><span>Experience:</span> ${person.experience}</li>
              <li><span>School:</span> ${person.school}</li>
              <li><span>Major:</span> ${person.major}</li>
              <li><span>Email:</span> ${person.email}</li>
               <li class="linkedin">
                   <img src="img/linkedin.svg" alt=""></img>
                   ${person.linkedInUrl}
                </li>
          </ul>
        </div>
    </div>
  </div>
  `
}

document.getElementById("template-hook").innerHTML =
`
  <h1 class="assignment-title">People (${personJSON.length} results)</h1>
  ${personJSON.map(personTemplate).join("")}

    
`

