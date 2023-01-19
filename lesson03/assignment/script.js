// Code that requires the DOM be loaded should not be run until the DOM is loaded
document.addEventListener("DOMContentLoaded", function(){
    
    //import the cards json with fetch()
    async function getCards() {
        try {
            let res = await fetch('./data/data.json');
            return await res.json();
        } catch (error) {
            console.log(error);
        }
    }

    // grab the container
    const container = document.querySelector('.template-hook');

    // render the json to cards
    async function renderCards() {
        
        //call getCards function
        let cards = await getCards();

        //loop through cards and insert json text into html
        let cardList = cards.forEach(function(el) {

            let card = document.createElement('ul');
            card.innerHTML = `
                <div class="grid">
                    <div class="grid__name">
                        <img src="img/headshot.jpg" alt="an image of a dog">
                        <h1>${el.name}</h1>
                        <h2>${el.jobTitle}</h2>
                    </div>  
    
                    <div class="grid__list">
                        <ul>
                            <li><span>Company:</span> ${el.company}</li>
                            <li><span>Experience:</span> ${el.experience}</li>
                            <li><span>School:</span> ${el.school}</li>
                            <li><span>Major:</span> ${el.major}</li>
                            <li><span>Email:</span> ${el.email}</li>
                            <li>
                                <img src="img/linkedin.svg" alt="a LinkedIn photo">
                                ${el.linkedInUrl}
                            </li>
                        </ul>
                    </div>
                </div>
            `
    
            //append the text to the html page
            container.append(card)
        })
    }
    
    //call render function
    renderCards();
 
})