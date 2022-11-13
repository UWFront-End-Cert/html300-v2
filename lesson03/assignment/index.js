
//Selecting the template hook element
const nameEl = document.getElementsByClassName('template-hook');

//Reusable function creating each card
DOMfunc = (el) => {

    const containerEl = document.createElement('div');
    containerEl.setAttribute('class', 'content-container');
    nameEl[0].appendChild(containerEl);

        const contentEl = document.createElement('div');
        contentEl.setAttribute('class', 'content-box');
        containerEl.appendChild(contentEl);

            const headerEl = document.createElement('div');
            headerEl.setAttribute('class', 'header-box');
            contentEl.appendChild(headerEl);

                const headshot = document.createElement('IMG');
                headshot.setAttribute('src', './img/headshot.jpg');
                headshot.setAttribute('alt', 'dog headshot');
                headerEl.appendChild(headshot);

                const headTitle = document.createElement('div');
                headTitle.setAttribute('class', 'header-title');
                headerEl.appendChild(headTitle);

                    const h2El = document.createElement('h2');
                    h2El.innerHTML = `${el.name}`;
                    headTitle.appendChild(h2El);

                    const headPEl = document.createElement('p');
                    headPEl.innerHTML = `${el.jobTitle}`;
                    headTitle.appendChild(headPEl);

                const detailsEl = document.createElement('div');
                detailsEl.setAttribute('class', 'details-box');
                contentEl.appendChild(detailsEl);

                    //Company
                    const detailsP1 = document.createElement('p');
                    detailsEl.appendChild(detailsP1);

                    const p1Strong = document.createElement('strong');
                    p1Strong.innerHTML = `Company: `;
                    detailsP1.appendChild(p1Strong);

                    const companyNode = document.createTextNode(`${el.company}`);
                    detailsP1.appendChild(companyNode);

                    //Experience
                    const detailsP2 = document.createElement('p');
                    detailsEl.appendChild(detailsP2);

                    const p2Strong = document.createElement('strong');
                    p2Strong.innerHTML = `Experience: `;
                    detailsP2.appendChild(p2Strong);

                    const experienceNode = document.createTextNode(`${el.experience}`);
                    detailsP2.appendChild(experienceNode);

                    // School
                    const detailsP3 = document.createElement('p');
                    detailsEl.appendChild(detailsP3);

                    const p3Strong = document.createElement('strong');
                    p3Strong.innerHTML = `School: `;
                    detailsP3.appendChild(p3Strong);

                    const schoolNode = document.createTextNode(`${el.school}`);
                    detailsP3.appendChild(schoolNode);

                    //Major
                    const detailsP4 = document.createElement('p');
                    detailsEl.appendChild(detailsP4);

                    const p4Strong = document.createElement('strong');
                    p4Strong.innerHTML = `Major: `;
                    detailsP4.appendChild(p4Strong);

                    const majorNode = document.createTextNode(`${el.major}`);
                    detailsP4.appendChild(majorNode);

                    //Email
                    const detailsP5 = document.createElement('p');
                    detailsEl.appendChild(detailsP5);

                    const p5Strong = document.createElement('strong');
                    p5Strong.innerHTML = `Email: `;
                    detailsP5.appendChild(p5Strong);

                    //Email link
                    const emailLink = document.createElement('a');
                    emailLink.setAttribute('href', 'mailto: paolo@example.com');
                    emailLink.innerHTML = `${el.email}`;
                    detailsP5.appendChild(emailLink);

                    //Linkedin
                    const linkedinContainer = document.createElement('div');
                    linkedinContainer.setAttribute('class', 'linkedin-container');
                    detailsEl.appendChild(linkedinContainer);

                        const linkedinLink = document.createElement('a');
                        linkedinLink.setAttribute('href', 'paolo.linkedinprofile.com');
                        linkedinContainer.appendChild(linkedinLink);


                            const linkedinLogo = document.createElement('img');
                            linkedinLogo.setAttribute('src', './img/linkedin.svg');
                            linkedinLogo.setAttribute('alt', 'Linkedin Logo');
                            linkedinLink.appendChild(linkedinLogo);

                            const linkedinURL = document.createElement('p');
                            linkedinURL.innerHTML = `${el.linkedInUrl}`;
                            linkedinLink.appendChild(linkedinURL);
}

// Fetch data
fetch('./data/data.json').then(function (response) {
    //Parsed the data
    return response.json();
}).then(function (obj) {
    //Used a forEach to loop through each data set.
    obj.forEach(function (el) {
        //Used the reusable function to create each card for each loop.
        DOMfunc(el);
    });
});








