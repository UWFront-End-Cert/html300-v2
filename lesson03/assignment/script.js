/* Setting up data as an object */
const employee = [
  {
    "name": "Steve Smith",
    "jobTitle": "Project Manage",
    "company": "Front End Dev Co",
    "experience": "3 years",
    "school": "UW",
    "major": "Marketing",
    "email": "steve@fedc.com",
    "linkedInUrl": "steve.linkedinprofile.com",
  },
  {
    "name": "Aaron Katz",
    "jobTitle": "Full Stack Developer",
    "company": "Web Sites and More",
    "experience": "5 years",
    "school": "SU",
    "major": "Computer Science",
    "email": "aaronNotMyemail@uw.edu",
    "linkedInUrl": "aaron.linkedinprofile.com",
  },
  {
    "name": "Kyle Hendricks",
    "jobTitle": "Starting Pitcher",
    "company": "Chicago Cubs",
    "experience": "12 years",
    "school": "USC",
    "major": "Pitching",
    "email": "kyleH@cubs.com",
    "linkedInUrl": "kyle.linkedinprofile.com",
  },
  {
    "name": "Michael Jordan",
    "jobTitle": "Point Guard",
    "company": "Chicago Bulls",
    "experience": "20 years",
    "school": "UNC",
    "major": "Trash Talking",
    "email": "mJordan@bulls.com",
    "linkedInUrl": "mJordas.linkedinprofile.com",
  },
];

/* Writing function and assigning to the variable "cardHtml" */
let cardHtml = employee.map(function(info) {
  let card = `
    <div id="container">
      <div class="emp-image">
      	<img class="headshot" src="img/unsplash-headshot.jpg" alt="Headshot of ${info.name}">
        <p class="name">${info.name}</p>
        <p class="title">${info.jobTitle}</p>
      </div>
      <div class="details">
        <p><b>Company:</b> ${info.company}</p>
        <p><b>Experience:</b> ${info.experience}</p>
        <p><b>School:</b> ${info.school}</p>
        <p><b>Major:</b> ${info.major}</p>
        <p><b>Email:</b> ${info.email}</p>
        <p><img class="linkedin-icon" src="img/linkedin.svg" alt="LinkedIn icon">
  				<a class="linkedin-link" href="#">${info.linkedInUrl}</a>
      </div>
    </div>
    `;
    return card;
});

/* Accessing "template-hook" class on html page and populating it with "cardHtml" info */
$(".template-hook").append(cardHtml);
