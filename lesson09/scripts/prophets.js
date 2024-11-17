const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    //consol.table(data.prophets);
    displayProphets(data.prophets);
};

const displayProphets = (prophets) => {
    prophets.forEach((prophet)=> {
        const card = document.createElement('section');
        const fullName = document.createElement('h2'); 
        const portrait = document.createElement('img');
       

        fullName.textContent = `${prophet.name} ${prophet.lastname}`; 
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`); 
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '220');
        portrait.setAttribute('height', 'auto');

        // Append the section(card) with the created elements
        card.appendChild(fullName); 
        card.appendChild(portrait);
        

        cards.appendChild(card);
    });
}
getProphetData();