const cardJSON = '[ { "name": "Paolo Maldini", "jobTitle": "Front End Developer", "company": "Web Weavers", "experience": "3 years", "school": "University of Washington", "major": "Marketing", "email": "paolo@example.com", "linkedInUrl": "paolo.linkedinprofile.com", "codeLanguages": [ "HTML", "CSS", "JavaScript", "Node", "Express" ] }, { "name": "Barbara Bonansea", "jobTitle": "Software Engineer", "company": "Excellence in the Cloud", "experience": "12 years", "school": "University of Southern California", "major": "Computer Science", "email": "barbara@example.com", "linkedInUrl": "barbara.linkedinprofile.com", "codeLanguages": [ "HTML", "JavaScript", "C", "Go" ] }, { "name": "Javier Hernandez", "jobTitle": "User Experience Engineer", "company": "Web Sites and More", "experience": "5 years", "school": "Seattle University", "major": "Performing Arts", "email": "javier@example.com", "linkedInUrl": "javier.linkedinprofile.com", "codeLanguages": [ "HTML", "CSS" ] }, { "name": "Maribel Dominguez", "jobTitle": "Front End Engineer", "company": "Bits and Bytes", "experience": "6 years", "school": "University of Washington", "major": "Mechanical Engineering", "email": "maribel@example.com", "linkedInUrl": "maribel.linkedinprofile.com", "codeLanguages": [ "HTML", "CSS", "JavaScript", "React", "Vue", "Redux" ] } ]'
// converted data.json data into a single line by pressing Control + J
const card = JSON.parse(cardJSON)
//console.log(card)


card.forEach(function(el){

    let head = document.createElement('div');
    head.className = ('header');
    


    let mainsection = document.createElement('main');
    mainsection.className = ('main');

    // header contianing image, name, and jobtitle
    let image = document.createElement("img");
    image.className = ('header-image');
    image.src = "/Users/noahtesema/Desktop/html300-v2/html300-v2/lesson03/assignment/img/headshot.jpg";
    //image.innerHTML = `<h1>${el.name}</h1>
    //<p><i>${el.jobTitle}</i></p>`

    let head_text = document.createElement('div');
    head_text.className = ('header-text');
    head_text.innerHTML = `<h1>${el.name}</h1>
    <p><i>${el.jobTitle}</i></p>`

    // this div will have a class of info and will contain Experience, School, Major, and Email
    let info = document.createElement('div');
    info.className = ('info');
    info.innerHTML = `<h2 class="info-text"> <b>Company:</b> ${el.company}</h2>
    <h2 class="info-text"> <b>Expereience:</b> ${el.experience}</h2>
    <h2 class="info-text"> <b>School:</b> ${el.school}</h2>
    <h2 class="info-text"> <b>Major:</b> ${el.major}</h2>
    <h2 class="info-text"> <b>Email:</b> ${el.email}</h2>`

    // this div will have a class of info-linkedin  and will contain the linkedin logo with a link to a linkedin page
    let info_linkedin = document.createElement('div');
    info_linkedin.className = ('info-linkedin');
    image_linkedin = document.createElement("img");
    image_linkedin.src = "/Users/noahtesema/Desktop/html300-v2/html300-v2/lesson03/assignment/img/linkedin.svg";
    info_linkedin.innerHTML = `<p> &nbsp;&nbsp;&nbsp;${el.linkedInUrl}</p>`


    const container = document.querySelector('.template-hook')
    container.append(mainsection)
    mainsection.appendChild(head)
    head.appendChild(image)
    head.appendChild(head_text)
    head.appendChild(info)
    head.appendChild(info_linkedin)
    info_linkedin.append(image_linkedin)

    
});