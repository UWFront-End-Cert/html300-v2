// creating a card class
class Card {
    constructor(name, jobTitle, company, experience, school, major, email, linkedInUrl, codeLanguages) {
        this.name = name;
        this.jobTitle = jobTitle;
        this.company = company;
        this.experience = experience;
        this.school = school;
        this.major = major;
        this.email = email;
        this.linkedInUrl = linkedInUrl;
        this.codeLanguages = codeLanguages;
    }
}


//I am fetching the .json file from local folder
let myRequest = new Request("./data/data.json");
fetch(myRequest)
    .then(function(resp) {
        return resp.json();
    })
    .then(function(data) {
        //I am now going to iterate through the data using the map function
        const answer = Object.values(data).map(el => {
            // Creating a new card
            const card = new Card(el.name, el.jobTitle, el.company, el.experience, el.school, el.major, el.email, el.linkedInUrl, el.codeLanguages);
            //Returning the HTML format of the card and then passing in the values for each of the respective cards
            return `

            <div class="card">
				<div class="avatar-container">
					<img src="img/circle-dog.jpg" class="dog-avatar">
					<h1 class="contact-name">${card.name}</h1>
					<p><span class="emphasis">${card.jobTitle}</span></p>
				</div>
	
				<div class="contact-container">
					<h4>Company: <span class="contact-text">${card.company}</span></h4>
					<h4>Experience: <span class="contact-text">${card.experience}</span></h4>
					<h4>School: <span class="contact-text">${card.school}</span></h4>
					<h4>Major: <span class="contact-text">${card.major}</span></h4>
					<h4>Email: <span class="contact-text">${card.email}</span></h4>
                    <h4>Code Languages: <span class="contact-text">${card.codeLanguages}</span></h4>
					<p class="linkedin-detail"><img src="img/linkedin.svg" alt="linkedin-logo" class="linkedin-image"><a href="${card.linkedInUrl}"></a>
					<span class="contact-text">${card.linkedInUrl}</span></p>   
				</div>
			</div>
            `;
        });
        //HTML file will be getting element by Id
        document.getElementById("app").innerHTML = `<div>${answer}</div>`
    });