const employeeJSON = [{
    "name": "Paolo Maldini",
    "jobTitle": "Front End Developer",
    "company": "Web Weavers",
    "experience": "3 years",
    "school": "University of Washington",
    "major": "Marketing",
    "email": "paolo@example.com",
    "linkedinURL": "paolo.linkedinprofile.com",
    "codeLanguages": [
      "HTML",
      "CSS",
      "JavaScript",
      "Node",
      "Express"
    ]
  }];
//Creates a container that finds the id "container" in the HTML document
const box = document.querySelector('#container')
//
employeeJSON.forEach(function(el)
{
    let employeeCard = document.createElement('div')
    employeeCard.classList.add('whole-card')
    employeeCard.innerHTML = `
      <div class="left-card">
        <img src="./img/headshot.jpg" alt="White dog with brown ears looking at camera wearing a bowtie!">
        <h1>${el.name}</h1>
        <h2>${el.jobTitle}</h2>
      </div>
      <div class="right-card">
        <p><span>Company: </span>${el.company}</p>
        <p><span>Experience: </span>${el.experience}</p>
        <p><span>School: </span>${el.school}</p>
        <p><span>Major: </span>${el.major}</p>
        <p><span>Email: </span>${el.email}</p>
        <p class="linkedin"><img src="./img/linkedin.svg">${el.linkedinURL}</p>
      </div>
    `
    box.append(employeeCard);
});

/*
    <div class="whole-card">
      <div class="left-card">
        <img src="./img/headshot.jpg" alt="White dog with brown ears looking at camera wearing a bowtie!">
        <h1>Paolo Maldini</h1>
        <h2>Front End Developer</h2>
      </div>
      <div class="right-card">
        <p><span>Company: </span>Web Weavers</p>
        <p><span>Experience: </span>3 years</p>
        <p><span>School: </span>University of Washington</p>
        <p><span>Major: </span>Marketing</p>
        <p><span>Email: </span>paolo@example.com</p>
        <p class="linkedin"><img src="./img/linkedin.svg">paolo.linkedinprofile.com</p>
      </div>
    </div>
*/