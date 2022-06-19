const data = [{"name": "Paolo Maldini","jobTitle": "Front End Developer","company": "Web Weavers","experience": "3 years","school": "University of Washington","major": "Marketing","email": "paolo@example.com","linkedInUrl": "paolo.linkedinprofile.com","codeLanguages": ["HTML", " CSS", " JavaScript", " Node", " Express"]},{"name": "Barbara Bonansea","jobTitle": "Software Engineer","company": "Excellence in the Cloud","experience": "12 years","school": "University of Southern California","major": "Computer Science","email": "barbara@example.com","linkedInUrl": "barbara.linkedinprofile.com","codeLanguages": ["HTML", " JavaScript", " C", " Go"]},{"name": "Javier Hernandez","jobTitle": "User Experience Engineer","company": "Web Sites and More","experience": "5 years","school": "Seattle University","major": "Performing Arts","email": "javier@example.com","linkedInUrl": "javier.linkedinprofile.com", "codeLanguages": ["HTML", " CSS"]},{"name": "Maribel Dominguez","jobTitle": "Front End Engineer","company": "Bits and Bytes","experience": "6 years","school": "University of Washington","major": "Mechanical Engineering","email": "maribel@example.com","linkedInUrl": "maribel.linkedinprofile.com","codeLanguages": ["HTML", " CSS", " JavaScript", " React", " Vue", " Redux"]}]


function createDiv(div_class) {
    const newDiv = document.createElement('div');
    newDiv.setAttribute('class', div_class);
    
    return newDiv;
}

function organizeElement(elementName, parentElement, textContentString) {
    const organizeThis = document.createElement(elementName);
    organizeThis.textContent = textContentString;
    parentElement.append(organizeThis);

    return organizeThis;
}

function addListItemWithLabel(label, textString, parentListElement){
    const listItem = document.createElement('li');
    listItem.textContent = textString;
    
    const boldLabel = document.createElement('strong');
    boldLabel.textContent = label;

    listItem.prepend(boldLabel);
    parentListElement.append(listItem);

    return listItem;
}

function runMe() {
    const templateHookDiv = document.querySelector('.template-hook');
    
    data.forEach(datum => {
        // Create business-card div and attach it to template
        const myNewCard = createDiv('business-card');
        templateHookDiv.append(myNewCard);
                
        // Create major-info div and attach it to business-card div
        const cardMajorInfo = createDiv('major-info');
        myNewCard.append(cardMajorInfo); 

        // Create content and append to cardMajorInfo column
        organizeElement('h1', cardMajorInfo, `${datum['name']}`);
        organizeElement('h2', cardMajorInfo, `${datum['jobTitle']}`);

        // Create details div and attach it to business-card div
        const cardDetails = createDiv('details');
        myNewCard.append(cardDetails);

        // Create ul and append it to cardDetails
        const unorderedListCardDetails = document.createElement('ul');
        
        // Create li elements for ul
        addListItemWithLabel('Company: ', `${datum['company']}`, unorderedListCardDetails);
        addListItemWithLabel('Experience: ', `${datum['experience']}`, unorderedListCardDetails);
        addListItemWithLabel('School: ', `${datum['school']}`, unorderedListCardDetails);
        addListItemWithLabel('Major: ', `${datum['major']}`, unorderedListCardDetails);
        addListItemWithLabel('Email: ', `${datum['email']}`, unorderedListCardDetails);
        
        // Continuing with li elements for ul, but create LinkedIn logo for LinkedIn link
        const linkedInLogo = document.createElement('img');
        linkedInLogo.setAttribute('src', 'img/linkedin.svg');
        
        // Prepend LinkedIn logo to the LinkedIn li element, append to ul
        const linkedInUrl = addListItemWithLabel(null, ` ${datum['linkedInUrl']}`, unorderedListCardDetails);
        linkedInUrl.prepend(linkedInLogo);
        unorderedListCardDetails.append(linkedInUrl);

        // Finish out the li elements for ul
        addListItemWithLabel('Languages: ', `${datum['codeLanguages']}`, unorderedListCardDetails);
        

        cardDetails.append(unorderedListCardDetails);
    })
}

runMe();