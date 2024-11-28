const directory = document.querySelector("#directory")
const memberData = "data/members.json"
    // const switcher = document.querySelector('.slider');
const grid = document.querySelector('#grid-btn')
const list = document.querySelector('#list-btn')
const view = document.querySelector('#view')

async function getMembertData() {
    const response = await fetch(memberData);
    const data = await response.json();
    // console.table(data.members);
    displaymembers(data.members);
};

const displaymembers = (members) => {
    members.forEach((member) => {

        // Create Card Elements
        let card = document.createElement("div");
        let name = document.createElement("h3");
        let icon = document.createElement("img");
        let address = document.createElement("p");
        let phone = document.createElement("p");
        let website = document.createElement("a");
        let membership = document.createElement("h4")

        // Generate Data
        name.textContent = member.name;
        icon.setAttribute("src", member.image_icon_filename);
        icon.setAttribute("loading", "lazy");
        icon.setAttribute("alt", `An icon for ${name}`);
        icon.setAttribute("width", "auto");
        icon.setAttribute("height", "250px");
        address.textContent = member.address;
        phone.textContent = member.phone_number;
        website.setAttribute("href", member.website_url)
        website.textContent = `${member.name} website`
        membership.textContent = `Membership Level: ${member.membership_level}`

        // Add Card Elements to Card
        card.appendChild(name);
        card.appendChild(icon);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        card.appendChild(membership);

        // Add card to section
        directory.appendChild(card);
    })
}

getMembertData();

// switcher.addEventListener('click', () => {
//     directory.classList.toggle('singlefile');
//     directory.classList.toggle('grid')
// })

view.addEventListener('click', () => {
    directory.classList.toggle('singlefile');
    directory.classList.toggle('grid')
    list.classList.toggle('none')
    grid.classList.toggle('none')
})