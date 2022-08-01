const cardsJSON = '[{"data": "circle","circle1"}]'

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
