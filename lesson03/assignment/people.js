const peopleJSON = '[{"name":"Paolo Maldini","jobTitle":"Front End Developer","company":"Web Weavers","experience":"3 years","school":"University of Washington","major":"Marketing","email":"paolo@example.com","linkedInUrl":"paolo.linkedinprofile.com","codeLanguages":["HTML","CSS","JavaScript","Node","Express"]},{"name":"Barbara Bonansea","jobTitle":"Software Engineer","company":"Excellence in the Cloud","experience":"12 years","school":"University of Southern California","major":"Computer Science","email":"barbara@example.com","linkedInUrl":"barbara.linkedinprofile.com","codeLanguages":["HTML","JavaScript","C","Go"]},{"name":"Javier Hernandez","jobTitle":"User Experience Engineer","company":"Web Sites and More","experience":"5 years","school":"Seattle University","major":"Performing Arts","email":"javier@example.com","linkedInUrl":"javier.linkedinprofile.com","codeLanguages":["HTML","CSS"]},{"name":"Maribel Dominguez","jobTitle":"Front End Engineer","company":"Bits and Bytes","experience":"6 years","school":"University of Washington","major":"Mechanical Engineering","email":"maribel@example.com","linkedInUrl":"maribel.linkedinprofile.com","codeLanguages":["HTML","CSS","JavaScript","React","Vue","Redux"]}]'

//Parse through JSON
const people = JSON.parse(peopleJSON);

//Get HTML element
const main = document.querySelector('.main');

//Loop through each JSON element
people.forEach(el => {
    let card = document.createElement('section');

    //Create new card and add JSON keys and values
    card.setAttribute("class", "card");
    card.innerHTML = `
        <section class="card_headshot">
            <img src="img/headshot.jpg" alt="Headshot of a very good boy">
            <div class="card_headshot_name">
                <h3 id="name">${el.name}</h3>
                <h4 id="position">${el.jobTitle}</h4>
            </div>
            
        </section>

        <section class="card_experience">
            <div class="card_experience_info">
                <p class="title">Company:</p>
                <p id="company">${el.company}</p>
            </div>
            <div class="card_experience_info">
                <p class="title">Experience:</p>
                <p id="experience">${el.experience}</p>
            </div>
            <div class="card_experience_info">
                <p class="title">School:</p>
                <p id="school">${el.school}</p>
            </div>
            <div class="card_experience_info">
                <p class="title">Major:</p>
                <p id="major">${el.major}</p>
            </div>
            <div class="card_experience_info">
                <p class="title">Email:</p>
                <p id="email">${el.email}</p>
            </div>
            <div class="card_experience_info">
                <img src="img/linkedin.svg" alt="LinkedIn Logo">
                <p id="linkedin">${el.linkedInUrl}</p>
            </div>
        </section>
    `
    main.append(card);
});

