
// constructor of card listings
const cardList =
  [
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
  ];
// Container constructor
const container = document.querySelector('#container-list')

// Template for cardList
cardList.forEach(function(el) {
  let list = document.createElement('div');
  list.setAttribute('class', 'card-who');
  list.innerHTML = 
    <div class="card-who">
      <img class="pup" src="img/headshot.jpg" alt="picture of dog">
      <h3>${el.name}</h3>
      <p>${el.jobTitle}</p>
    </div>
    <div class="info">
      <ul>
        <li><span>Company: </span>${el.company}</li>
        <li><span>Experience: </span>${el.experience}</li>
        <li><span>School: </span>${el.school}</li>
        <li><span>Major: </span>${el.major}</li>
        <li><span>Email: </span>${el.email}</li>
        <li><span>Code Languages: </span>${el.codeLanguages}</li>
      </ul>
    </div>
    <div class=linked>
      <img class="icon" src="img/linkedin.svg" alt="icon for LinkedIn">
      <a href="paolo.linkedinprofile.com">${linkedInUrl}</a>
    </div>
  `;
});
document.querySerlector(".container").innerHTML = cardHTML;
});
