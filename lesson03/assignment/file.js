const data = [{
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
console.log(data);



// //create template for html, copy from lesson to so we can us scss

// // <div id="outside-border">
// //     <div id=title>
//         <img src="https://i.insider.com/59d4f1dec68d7b26008b754e?width=800&format=jpeg&auto=webp">
//         <h2>Rusty Shackelford</h2>
//         <h3><em>Front End Developer</em></h3>
//     </div>
//     <div id="inner-content">
//         <ul>
//             <li><strong>Company:</strong>Hackers Anonymous R Us</li>
//             <li><strong>Experience:</strong>Have sailed the 7 Seas</li>
//             <li><strong>School:</strong>Hard-Knocks, Self-taught</li>
//             <li><strong>Major:</strong>Hacking</li>
//             <li><strong>Email:</strong>me@mail.com</li>
//             <li><i class="fab fa-linkedin"></i>me@mail.com</li>

//         </ul>
//     </div>
// </div>

//loop through  the array of objects and the object...(for of loop? object . entries?)covnert each element into strings using object .entries???
//  //need to create a main first with a class of outside-border, then append that to the body then then append a div with the id of title to main
//   //then I need to  create an h2 and get its innertext from the name key of the elements in the array
//     //then i need to create an h3 and and em tag inside the h3 and set the h3s innertext to the value at the jobtitle key
//       //then I need to create another div with an id of inner-content
//         //then append a ul inside of that, then do something like 
//         //list = document.createElement('ul'); 
//         //list.innerText = <li><strong>object key:</strong>key value<li>
//                            <li><strong>object key:</strong>key value<li>
//                            <li><strong>object key:</strong>key value<li>



const body = document.querySelector('body');

function createTemplate(input) {



    //(create title div append to border and create an h2 and h3 setting inner text with the loop below)
    //iterate over the entire array
    input.map((el) => {
        //every time we get to a new element, create new containing div, need to append to body
        const main = document.createElement('main')
            //create div that contains title
        const outerBorder = document.createElement('div');
        //set divs attribute
        outerBorder.setAttribute("id", "outside-border");
        //create title container div
        const title = document.createElement('div');
        title.setAttribute("id", "title");
        //create img tag
        //create h2
        const titleH2 = document.createElement('h2');
        //create h3
        const titleH3 = document.createElement('h3');
        //put main inside of body
        // body.prepend(main);
        //put outerborder inside of main
        main.prepend(outerBorder);
        //add title div inside of outsideborder
        outerBorder.prepend(title);
        //add h2 inside of title
        title.append(titleH2);
        title.append(titleH3);
        //create inner content div
        const innerContent = document.createElement('div');
        innerContent.setAttribute("id", "inner-content");
        //append inner-content to outerboard
        outerBorder.append(innerContent);
        //create ul inside of inner content
        const list = document.createElement("ul");
        innerContent.append(list);
        //iterate over each key value pair in the individual objects
        for (const [key, value] of Object.entries(el)) {
            console.log(`${key}: ${value}`);
            //add innercontent based on key name
            this.name = el.name;
            this.jobTitle = el.jobTitle;
            this.company = el.company;
            this.school = el.school;
            this.major = el.major;
            this.email = el.email;
            this.linkedInUrl = el.linkedInUrl;
            titleH2.innerText = `${el.name}`;
            titleH3.innerText = `${el.jobTitle}`;
            list.innerHTML = `<li><strong>Company:</strong></strong> ${el.company}</li> 
                            <li><strong>School:</strong> ${el.school}</li>
                            <li><strong>Major:</strong> ${el.major}</li>
                            <li><strong>Email:</strong> ${el.email}</li>
                            <li><strong>linkedin:</strong> ${el.linkedInUrl}</li>`
        }
        return body.prepend(main);
    })
}


//call function with our data
createTemplate(data);