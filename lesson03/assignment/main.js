const dataJSON = '[{"name": "Paolo Maldini", "jobTitle": "Front End Developer", "company": "Web Weavers", "experience": "3 years", "school": "University of Washington", "major": "Marketing", "email": "paolo@example.com", "linkedInUrl": "paolo.linkedinprofile.com", "codeLanguages": ["HTML", "CSS", "JavaScript", "Node", "Express"]}, {"name": "Barbara Bonansea", "jobTitle": "Software Engineer", "company": "Excellence in the Cloud", "experience": "12 years", "school": "University of Southern California", "major": "Computer Science", "email": "barbara@example.com","linkedInUrl": "barbara.linkedinprofile.com", "codeLanguages": ["HTML", "JavaScript", "C", "Go"]}, {"name": "Javier Hernandez", "jobTitle": "User Experience Engineer", "company": "Web Sites and More", "experience": "5 years", "school": "Seattle University", "major": "Performing Arts", "email": "javier@example.com", "linkedInUrl": "javier.linkedinprofile.com", "codeLanguages": ["HTML", "CSS"]}, {"name": "Maribel Dominguez","jobTitle": "Front End Engineer","company": "Bits and Bytes","experience": "6 years","school": "University of Washington","major": "Mechanical Engineering","email": "maribel@example.com","linkedInUrl": "maribel.linkedinprofile.com","codeLanguages": ["HTML", "CSS", "JavaScript", "React", "Vue", "Redux"]}]'

 // I couldn't figure out how to import the data from the json files

const data = JSON.parse(dataJSON);

console.log(data)

// declare container
const container = document.querySelector('.template-hook')

data.forEach(function(el){
  // test elements
  // console.log(`${el.name}`)
  let card = document.createElement('main')
  card.classList.add("box")
  card.innerHTML = `
    <div class="box-outer">
      <div class="box-column1">
        <img src="img/headshot.jpg" alt="Profile picture of Paolo Maldini">
        <h1>${el.name}</h1>
        <h2>${el.jobTitle}</h2>
      </div>
      <aside class="box-column2">
        <div class="box-content">
          <p><span class="box-about">Company: </span>${el.company}</p>
          <p><span class="box-about">Experience: </span>${el.experience}</p>
          <p><span class="box-about">School: </span>${el.school}</p>
          <p><span class="box-about">Major: </span>${el.major}</p>
          <p><span class="box-about">Email: </span>${el.email}</p>
          <p><img src="img/linkedin.svg" alt="LinkedIn Logo">${el.linkedInUrl}</p>
        </div>
      </aside>
  </div>
  `

//add card into container
// had to move script to later portion of the html
container.append(card);
})
