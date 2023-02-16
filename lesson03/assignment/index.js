
//JSON data for users
const users = ` [
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

    
    
    // parse JSON data
    const dogCard = JSON.parse(users);
    
    // turn html into template to use with JSON data
    function usersLoop(userDog) {
    let dogs = `<main class="main">
           
          <div class="card">

            <div class="card-image">
            <img class="card-image_img" src="img/headshot.jpg" alt="Picture of a white dog with brown ears wearing a black bowtie">
            <h1 class="card-image_h1">${userDog.name}</h1>
            <h2 class="card-image_h2">${userDog.jobTitle}</h2>
            </div>

            <div class="card-details">
            <div class="card-details_rows">
              <h3 class="card-details_h3">Company:</h3>
              <h4 class="card-details_h4">${userDog.company}</h4>
            </div>
            <div class="card-details_rows">
              <h3 class="card-details_h3">Experience:</h3>
              <h4 class="card-details_h4">${userDog.experience}</h4>
            </div>
            <div class="card-details_rows">
              <h3 class="card-details_h3">School:</h3>
              <h4 class="card-details_h4">${userDog.school}</h4>
            </div>
            <div class="card-details_rows">
              <h3 class="card-details_h3">Major:</h3>
              <h4 class="card-details_h4">${userDog.major}</h4>
            </div>
            <div class="card-details_rows">
              <h3 class="card-details_h3">Email:</h3>
              <h4 class="card-details_h4">${userDog.email}</h4>
            </div>
            <div class="card-details_rows">
            <img src="img/linkedin.svg" alt="Blue Linkedin logo">
            <h4 class="card-details_h4">${userDog.linkedInUrl}</h4>
            </div>

          </div>
        </main>
        `
        return dogs;
    }