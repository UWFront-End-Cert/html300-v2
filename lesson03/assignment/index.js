	// sets JSON data
	const personJSON = '[{"name": "Paolo Maldini", "job": "Front End Developer", "company": "Web Weavers", "experience": "3 years", "school": "University of Washington", "major": "Marketing", "email": "paolo@example.com", "linkedin": "paolo.linkedinprofile.com", "languages": "HTML, CSS, JavaScript, Node, Express"},{"name": "Barbara Bonansea", "job": "Software Engineer", "company": "Excellence in the Cloud", "experience": "12 years", "school": "University of Southern California", "major": "Computer Science", "email": "barbara@example.com", "linkedin": "barbara.linkedinprofile.com", "languages": "HTML, JavaScript, C, Go"},{"name": "Javier Hernandez", "job": "User Experience Engineer", "company": "Web Sites and More", "experience": "5 years", "school": "Seattle University", "major": "Performing Arts", "email": "javier@example.com", "linkedin": "javier.linkedinprofile.com", "languages": "HTML, CSS"},{"name": "Maribel Dominguez", "job": "Front End Engineer", "company": "Bits and Bytes", "experience": "6 years", "school": "University of Washington", "major": "Mechanical Engineering", "email": "maribel@example.com", "linkedin": "maribel.linkedinprofile.com", "languages": "HTML, CSS, JavaScript, React, Vue, Redux"}]'

	// parse JSON data
	const profile = JSON.parse(personJSON)

	// looks for id cards
	const container = document.querySelector('#cards')

	// Loop through all elements of the list
	profile.map(function(el) {

	// Build HTML 
	let card = document.createElement('main')
	card.innerHTML = `
	<div id="card-cont">
		<div id='left-marg'>
			<img id='profile-img' src="img/headshot.jpg" alt="">
			<p id='name'>${el.name}</p>
			<p id='position'>${el.job}</p>
		</div>

		<div id='profile-info'>
			<p><span>Company: </span>${el.company}</p>
			<p><span>Experience: </span>${el.experience}</p>
			<p><span>School: </span>${el.school}</p>
			<p><span>Major: </span>${el.major}</p>
			<p><span>Email: </span>${el.email}</p>
			<p><span id="langs">Code Languages: </span>${el.languages}</p>
			<p><img id='linkedin-img' src="img/linkedin.svg" alt="linkedin logo">${el.linkedin}</p>
		</div>
	</div>`

	// Insert HTML into page
	container.append(card);
	})