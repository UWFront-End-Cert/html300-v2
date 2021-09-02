
//function to create the template literals
function cardTemplate(card) {
  return `
  <div class="main">
    <div class="title">
      <img id="image" src="./img/headshot.jpg"></img>
      <h1>${card.name}</h1>
      <h3>${card.jobTitle}</h3>
    </div>
    <div class="details">
      <p><strong>Company:  </strong>${card.company}</p>
      <p><strong>Experience:  </strong>${card.experience}</p>
      <p><strong>School:  </strong>${card.school}</p>
      <p><strong>Major:  </strong>${card.major}</p>
      <p><strong>Email:  </strong>${card.email}</p>
      <p><strong>Languages:  </strong>${card.codeLanguages}</p>
      <div class="profile">
      <img src="./img/linkedin.svg" alt="This is an image of the LinkedIn web site."></img>
      <p class="p-address">${card.linkedInUrl}</p>
      </div>

    </div>
  </div>
  `
}

//find the html element
const cardContainer =  document.querySelector("#a-container")

//load the json data file and parse it
fetch('./data/data.json')
.then(response => response.json())
.then(data => { 
  
  //set the innerhtml to display the data in the browser
  //create a new array of strings, call the cardTemplate function
  //NOTE:  using the join(' ') didn't work for me; the cards were getting joined without the empty space as expected so 
  //I opted to simply put a '*' instead
  cardContainer.innerHTML = `
    ${data.map(cardTemplate).join('*')}
`

})




