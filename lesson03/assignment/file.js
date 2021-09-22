const myData = [{
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
console.log(myData);

// create a new empty array
// const array = []
//create a function that takes in arrays a that have objects and returns new individual objecst no hard coding. then create another function to turn get that object on the dom
//iterate over the array
//if the object in the array name key doenst exist create new object push into array





// function Dev(el) {
//     this.name = el.name
//     this.jobTitle = el.jobTitle;
//     this.experience = el.experience;
//     this.school = el.school;
//     this.major = el.major;
//     this.email = el.email;
//     this.linkedInUrl = el.linkedInUrl;
//     this.codeLanguagess = el.codeLanguagess;

// }

// creatNewDev(myData);

// console.log(array);
//use a constructor function to create a new object



//create the class constructor
//name, jobTitle, company, experience, school, major, email, linkedInUrl, codeLanguagess
// class Devs {
//     constructor(input) {
//         //gonna have to iterate through codelangues prop at somepoint
//         this.name = input.name;
//         this.jobTitle = input.jobTitle;
//         this.experience = input.experience;
//         this.school = input.school;
//         this.major = input.major;
//         this.email = input.email;
//         this.linkedInUrl = input.linkedInUrl;
//         this.codeLanguagess = input.codeLanguagess;
//     }


// }

// //build a card for each element
// //data[0].name, data[0].jobTitle ect
// const paolo = new Devs(data[0])
// console.log(paolo);
// //if name is already taken ignore 
// //if not create new object


// //use object .keys in arguements?
// //create a function that creates new cards using the scss from assignment 2

// function Makenew(newData) {
//     newData.forEach(el => {

//     })
// }

// //write a function a gets keys
// function getKeys(input) {
//     let keys = Object.keys(input);
// }

// // paolo = New Devs data.forEach((el => {
// //                 Object.keys(el)