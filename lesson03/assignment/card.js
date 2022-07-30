// Create HTML code from cards JSON

const cardsJSON = '[{"name": "Paolo Maldini","jobtitle": "Front End Developer","company": "Web Weavers","experience": "3 years","school": "University of Washington","major": "Marketing","email": "paolo@example.com","linkedInUrl": "paolo.linkedinprofile.com","codeLanguages": ["HTML", "CSS", "JavaScript", "Node", "Express"]},{"name": "Barbara Bonansea","jobtitle": "Software Engineer","company": "Excellence in the Cloud","experience": "12 years","school": "University of Southern California","major": "Computer Science","email": "barbara@example.com","linkedInUrl": "barbara.linkedinprofile.com","codeLanguages": ["HTML", "JavaScript", "C", "Go"]},{"name": "Javier Hernandez","jobtitle": "User Experience Engineer","company": "Web Sites and More","experience": "5 years","school": "Seattle University","major": "Performing Arts","email": "javier@example.com","linkedInUrl": "javier.linkedinprofile.com","codeLanguages": ["HTML", "CSS"]},{"name": "Maribel Dominguez","jobtitle": "Front End Engineer","company": "Bits and Bytes","experience": "6 years","school": "University of Washington","major": "Mechanical Engineering","email": "maribel@example.com","linkedInUrl": "maribel.linkedinprofile.com","codeLanguages": ["HTML", "CSS", "JavaScript", "React", "Vue", "Redux"]}]'

const cards = JSON.parse(cardsJSON)

const container = document.querySelector('#list-container')

// Loop through all elements of the List
let cardList = cards.forEach(function(el) {

    // Build HTML
   let list = document.createElement('ul')
   list.innerHTML = `
    <ul class="card">
      <ul class="card-image">
        <li class="card-image__title"><h1>${el.name}</h1></li>
        <li class="card-image__copy"><p>${el.jobtitle}</p></li>
      </ul>
      <ul class="card-details">
        <li class="card-details__copy"><strong>Company: </strong>${el.company}</li>
        <li class="card-details__copy"><strong>Experience: </strong>${el.experience}</li>
        <li class="card-details__copy"><strong>School: </strong>${el.school}</li>
        <li class="card-details__copy"><strong>Major: </strong>${el.major}</li>
        <li class="card-details__copy"><strong>Email: </strong>${el.email}</li>
        <li class="card-details__copy"><strong>LinkedInUrl: </strong>${el.linkedInUrl}</li>
        <li class="card-details__copy"><strong>Code Languages: </strong>${el.codeLanguages}</li>
      </ul>
    </ul>
   `

   container.append(list)
 })
