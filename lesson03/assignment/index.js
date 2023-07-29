//Start jquery
window.onload = () => {
        const candidates = [
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
         ]
         
        const templateHook = document.querySelector(".template-hook")
        const range = document.createRange()
        range.selectNodeContents(templateHook)
        candidates.forEach(candidate => {
          const card = range.createContextualFragment(cardLayout(candidate.name, candidate.jobTitle, candidate.company, candidate.experience, candidate.school, candidate.email, candidate.linkedInUrl, candidate.codeLanguages))   
          templateHook.appendChild(card)
        })
        
      
        function cardLayout(name, jobTitle, company, experience, school, email, linkedInUrl, ...codeLanguages) {
          return `
          <div class="card">
            <div class="image">
              <img src="img/Abel Mengstu.jpg" alt="Abel Mengstus' picture at UW" />
              <h1>${name}</h1>
              <h2>${jobTitle}</h2>
            </div>
            <!---details box -->
            <div class="details">
              <div class="details-box">
                <p><strong>Company:</strong>${company}</p>
                <p><strong>Experience:</strong>${experience}</p>
                <p><strong>School:</strong>${school}</p>
                <p>
                  <strong>Email:</strong>
                  <a href="mailto:abel@iim.com">${email}</a>
                </p>
                <div class="contact-info">
                  <img src="img/linkedin.svg" class="linkedin" alt="LinkedIn logo" />
                  <p>
                    <a
                      href="https://www.linkedin.com/in/abel-mengstu-65b25522b/"
                      target="_blank"
                      >${linkedInUrl}</a
                    >
                  </p>
                </div>
              </div>
            </div>
          </div>
          `
        }
      }