const cardList = 
[
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

 for (let i = 0; i < cardList.length; i++) {
   const cards = cardList[i];

   const cardContainer = document.getElementById('container-list');
   console.log(cardContainer);
   console.log(cardList[i]);

   const whoFrame = document.createElement('div');
   whoFrame.setAttribute('class', 'card-who');
   cardContainer.append(whoFrame);

   const cardImage = document.createElement('img');
   cardImage.setAttribute('src', cards.img);
   cardImage.setAttribute('alt', cards.alt);
   cardImage.setAttribute('class', 'pup')
   whoFrame.append(cardImage);

   const cardName = document.createElement('h3');
   cardName.setAttribute('class', 'card-name');
   cardImage.append(cardName);

   const jobName = document.createElement('p');
   jobName.setAttribute('class', 'job');
   cardName.append(jobName);

   const jobTitle  = document.createElement('div');
   jobTitle.setAttribute('class', 'info');
   jobName.append(jobTitle);

   const listItems = document.createElement('ul');
   listItems.setAttribute('id', 'listItems');
   jobTitle.append(listItems);

   const company = document.createElement('li');
   listItems.append(company);
   
   const experience = document.createElement('li');
   company.append(experience);
   
   const school = document.createElement('li');
   experience.append(school);
   
   const major = document.createElement('li');
   school.append(major);
   
   const email = document.createElement('li');
   major.append(email);

   const languages = document.createElement('li');
   email.append(languages);

   const profile = document.createElement('div');
   profile.setAttribute('class', 'linked');
   languages.append(profile);

   const linkedIcon = document.createElement('img');
   linkedIcon.setAttribute('src', cards.img);
   linkedIcon.setAttribute('alt', cards.alt);
   profile.append(linkedIcon);

   const linkedProfile = document.createElement('a');
   linkedIcon.append(linkedProfile);














 }
