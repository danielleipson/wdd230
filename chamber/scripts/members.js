// Selecting necessary DOM elements
const directory = document.querySelector("#directory");
const memberData = "data/members.json";
const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");
const view = document.querySelector("#view");

// Grid and list view toggle logic
gridButton.addEventListener("click", () => {
    directory.classList.add("grid");
    directory.classList.remove("list");
});

listButton.addEventListener("click", () => {
    directory.classList.add("list");
    directory.classList.remove("grid");
});

// Fetch and display member data
async function getMemberData() {
    try {
        const response = await fetch(memberData);
        const data = await response.json();
        displayMembers(data.members);
    } catch (error) {
        console.error("Error fetching member data:", error);
    }
}

// Function to display members
const displayMembers = (members) => {
    directory.innerHTML = ""; // Clear any previous content
    members.forEach((member) => {

        // Create Card Elements
        const card = document.createElement("div");
        card.classList.add("card");

        const name = document.createElement("h3");
        const icon = document.createElement("img");
        const address = document.createElement("p");
        const phone = document.createElement("p");
        const website = document.createElement("a");
        const membership = document.createElement("h4");

        // Populate Card Content
        name.textContent = member.name;

        icon.setAttribute("src", member.icon);
        icon.setAttribute("loading", "lazy");
        icon.setAttribute("alt", `Logo of ${member.name}`);
        icon.setAttribute("width", "auto");
        icon.setAttribute("height", "250px");

        address.textContent = `Address: ${member.address}`;
        phone.textContent = `Phone: ${member.phone_number}`;
        website.setAttribute("href", member.website_url);
        website.setAttribute("target", "_blank");
        website.textContent = `${member.name} Website`;

        membership.textContent = `Membership Level: ${member.membership_level}`;

        // Append Elements to Card
        card.appendChild(name);
        card.appendChild(icon);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        card.appendChild(membership);

        // Append Card to Directory
        directory.appendChild(card);
    });
};

// View toggle button functionality
view.addEventListener("click", () => {
    directory.classList.toggle("list");
    directory.classList.toggle("grid");
    listButton.classList.toggle("hidden");
    gridButton.classList.toggle("hidden");
});

// Fetch member data on page load
getMemberData();