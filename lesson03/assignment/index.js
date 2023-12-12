
// loop through cards, run each loop

let devs = [
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
  
  
// looping through

let cardhtml = ""
// The loop that places all the JSON data in the proper places.
devs.forEach(function (dev) {
    let card = `<div class="card">
<div class="left">
    <img src="img/headshot.jpg"></img>
    <div class="name">${dev.name}</div>
    <p class="subheading">${dev.jobTitle}</p>
</div>
<div class="right">
    <div class="item"> 
        <div class="title">Company:</div>
        <p>${dev.company}</p>
    </div>
    <div class="item">
        <div class="title">Experience:</div>
        <p>${dev.experience}</p>
    </div>
    <div class="item">
        <div class="title">School:</div>
        <p>${dev.school}</p>
    </div>
    <div class="item">
    <div class="title">Major:</div>
        <p>${dev.major}</p>
    </div>
    <div class="item">
    <div class="title">Email:</div>
        <p>${dev.email}</p>
    </div>
    <div class="item">
        <img src="img/linkedin.svg"></img>
        <p>${dev.linkedInUrl}</p>
    </div>
</div>
</div>`
// Adds card and html together
 cardhtml = cardhtml+card;
console.log(cardhtml);
});

// Hooks the data with HTML
const el = document.querySelector(".template-hook")
el.innerHTML = cardhtml

