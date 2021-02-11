const data = [
    {
      "name": "Steve Smith",
      "jobTitle": "Project Manage",
      "company": "Front End Dev Co",
      "experience": "3 years",
      "school": "UW",
      "major": "Marketing",
      "email": "steve@fedc.com",
      "linkedInUrl": "steve.linkedinprofile.com",
      "codeLanguages": [
          "HTML", "CSS", "JavaScript", ".NET", "C#"
      ]
    }, 
    {
      "name": "Aaron Katz",
      "jobTitle": "Full Stack Developer",
      "company": "Web Sites and More",
      "experience": "5 years",
      "school": "SU",
      "major": "Computer Science",
      "email": "aaronNotMyemail@uw.com",
      "linkedInUrl": "aaron.linkedinprofile.com",
      "codeLanguages": [
          "HTML", "CSS", "JavaScript", "PHP", "Twig"
      ]
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
      "codeLanguages": [
          "HTML", "CSS", "JavaScript", "Ruby", "Rails"
      ]
    },
    {
      "name": "Michael Jordan",
      "jobTitle": "Point Guard",
      "company": "Chicago Buls",
      "experience": "20 years",
      "school": "UNC",
      "major": "Trash Talking",
      "email": "mJordan@bulls.com",
      "linkedInUrl": "mJordas.linkedinprofile.com",
      "codeLanguages": [
         "HTML", "CSS", "JavaScript", "Java", "Spring"
      ]
    }
   ];
console.log(data);

data.forEach(function(el) {
    console.log(el.company);
    let list = document.createElement('div')
    list.innerHTML = `
      <div class="card"> 
          <div class="c1"> 
            <img class="personimg" src="img/unsplash-headshot.jpg" alt="Avatar">
                        <div><p>${el.name}</p></div>
                        <div><p class = "titlename">${el.jobTitle}</p></div> 
          </div>
          
          <div class = "c2">
          <div class = "card-text-box">
              <p class="cardp"> <b>Company</b>: ${el.company} </p>
              <p class="cardp"> <b>Experience</b>: ${el.codeLanguages} </p>
              <p class="cardp"> <b>School:</b> ${el.school} </p>
              <p class="cardp"> <b>Major:</b> ${el.major} </p>
              <p class="cardp"> <b>Email:</b> ${el.email} </p> 
              <div class="linkedin">
                  <img src="img/linkedin.svg" alt="Italian Trulli">
                  <p class="linkedin-text">s${el.email} </p> 
              </div>
          </div>
        </div>
      </div>

    `
    const container = document.querySelector("#list-container");
    console.log(container.firstChild);
    container.append(list);
})