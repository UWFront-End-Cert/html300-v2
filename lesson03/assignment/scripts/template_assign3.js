// User Profiles
const data = `[
    {
      "name": "Paolo Maldini",
      "jobTitle": "Front End Developer",
      "company": "Web Weavers",
      "experience": "3 years",
      "school": "University of Washington",
      "major": "Marketing",
      "email": "paolo@example.com",
      "linkedInUrl": "paolo.linkedinprofile.com",
      "codeLanguages": [
          "HTML", "CSS", "JavaScript", "Node", "Express"
      ]
    },
    {
      "name": "Barbara Bonansea",
      "jobTitle": "Software Engineer",
      "company": "Excellence in the Cloud",
      "experience": "12 years",
      "school": "University of Southern California",
      "major": "Computer Science",
      "email": "barbara@example.com",
      "linkedInUrl": "barbara.linkedinprofile.com",
      "codeLanguages": [
          "HTML", "JavaScript", "C", "Go"
      ]
    },
    {
      "name": "Javier Hernandez",
      "jobTitle": "User Experience Engineer",
      "company": "Web Sites and More",
      "experience": "5 years",
      "school": "Seattle University",
      "major": "Performing Arts",
      "email": "javier@example.com",
      "linkedInUrl": "javier.linkedinprofile.com",
      "codeLanguages": [
          "HTML", "CSS"
      ]
    },
    {
      "name": "Maribel Dominguez",
      "jobTitle": "Front End Engineer",
      "company": "Bits and Bytes",
      "experience": "6 years",
      "school": "University of Washington",
      "major": "Mechanical Engineering",
      "email": "maribel@example.com",
      "linkedInUrl": "maribel.linkedinprofile.com",
      "codeLanguages": [
         "HTML", "CSS", "JavaScript", "React", "Vue", "Redux"
      ]
    }
   ]`
   
//Import & Parse JSON Data for User Profiles

const parsedData = JSON.parse(data);

// Loopin' through each person!
parsedData.forEach((p) => {

    const list = document.createElement('ul');

    list.innerHTML = `
    <div class="card">
        <div class="profile-pic">
            <img src="img/headshot.jpg" alt="Front">
            <h1>${p.name}</h1>
            <p>${p.jobTitle}</p>
        </div>
        <div class="profile-info">
            <ul> 
                <p><b>Company:</b> ${p.company}</p>
                <p><b>Experience:</b> ${p.experience}</p>
                <p><b>School:</b> ${p.school}</p>
                <p><b>Major:</b> ${p.major}</p>
                <p><b>Email:</b> ${p.email}</p>
                <li class="linkedin">
                    <img src="img/linkedin.svg" alt="">
                    ${p.linkedInUrl}
                </li>
            </ul>
        </div>
    </div>`;
    
    // Append the list to the body tag
    document.body.append(list);
});
