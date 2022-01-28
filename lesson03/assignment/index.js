window.addEventListener('DOMContentLoaded', (event) => {

const container = document.querySelector('.container');

/*Function for JSON data*/
async function fetchDataJSON() {
  const response = await fetch('/data/data.json');
  const card = await response.json();  return card;
};

fetchDataJSON().then(card => {
  card; // fetched data

/*Loop Here*/
card.forEach((card) => {

let cardMaster = document.createElement('main');
cardMaster.className = 'card';

const keys = Object.values(card.codeLanguages);

let name = card.name;
let jobTitle = card.jobTitle;
let company = card.company;
let experience = card.experience;
let school = card.school;
let major = card.major;
let email = card.email;
let linkedIn = card.linkedInUrl;
let code = card.codeLangauges;

cardMaster.innerHTML = `
  <div class="main-container">
    <div class="left-content">
      <figure class="portrait">
        <img src="img/headshot.jpg" alt="Picture of beagle dog looking at camera wearing a bowtie" class="image">
      </figure>
      <div class="title-card">
        <p class="name">${name}</p>
        <p class="title" id="jobTitle">${jobTitle}</p>
      </div>
    </div>
    <div class="details">
      <ul class="profile-list">
      <li class="item" id="company"><span class="info">Company:&nbsp;</span><span>${company}</span></li>
            <li class="item" id="experience"><span class="info">Experience:&nbsp;</span><span>${experience}</span></li>
            <li class="item" id="school"><span class="info">School:&nbsp;</span><span>${school}</span></li>
            <li class="item" id="major"><span class="info">Major:&nbsp;</span><span>${major}</span></li>
            <li class="item" id="email"><span class="info">Email:&nbsp;</span><span>${email}</span </li>
            <li class="item" id="codeLanguages"><span class="info">Coding Languages:&nbsp;</span><span>${keys}</span></li>
            <li class="item linkedin" id="linkedInUrl"><span class="info"><img src="img/linkedin.svg" alt="LinkedIn Logo" class="logo" ></span><span>${linkedIn}</span></li>
      </ul>
    </div>
  </div>
`
container.appendChild(cardMaster);

    });
document.body.appendChild(container);
  });

console.log('DOM has been loaded/parsed');
});
