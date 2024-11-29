const directory = document.querySelector("#directory");
const memberData = './data/members.json';
const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");

let membersData = []; // To store fetched member data globally

// Event listener for Grid view
gridButton.addEventListener("click", () => {
    directory.classList.add("grid");
    directory.classList.remove("list");
    renderGridView(membersData); // Render grid view using stored data
    gridButton.disabled = true;
    listButton.disabled = false;
});

// Event listener for List view
listButton.addEventListener("click", () => {
    directory.classList.add("list");
    directory.classList.remove("grid");
    renderListView(membersData); // Render list view using stored data
    listButton.disabled = true;
    gridButton.disabled = false;
});

// Fetch and display member data
async function getMemberData() {
    try {
        const response = await fetch(memberData);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        membersData = data.members; // Store fetched data in a global variable
        renderGridView(membersData); // Initially render grid view
    } catch (error) {
        console.error("Error fetching member data:", error);
        directory.innerHTML = "<p>Failed to load members.</p>";
    }
}

// Render Grid View
const renderGridView = (members) => {
    directory.innerHTML = ""; // Clear previous content
    members.forEach((member) => {
        const card = document.createElement("div");
        card.classList.add("card");

        const name = document.createElement("h3");
        const icon = document.createElement("img");
        const address = document.createElement("p");
        const phone = document.createElement("p");
        const website = document.createElement("a");
        const membership = document.createElement("h4");

        name.textContent = member.name;
        icon.setAttribute("src", member.icon);
        icon.setAttribute("loading", "lazy");
        icon.setAttribute("alt", `Logo of ${member.name}`);
        icon.setAttribute("width", "100%");
        icon.setAttribute("height", "auto");
        address.textContent = `Address: ${member.address}`;
        phone.textContent = `Phone: ${member.phone_number}`;
        website.setAttribute("href", member.website_url);
        website.setAttribute("target", "_blank");
        website.textContent = `${member.name} Website`;
        membership.textContent = `Membership Level: ${member.membership_level}`;

        card.appendChild(name);
        card.appendChild(icon);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        card.appendChild(membership);

        directory.appendChild(card);
    });
};

// Render List View
const renderListView = (members) => {
    directory.innerHTML = ""; // Clear previous content

    const table = document.createElement("table");
    table.classList.add("list-table");

    const headerRow = document.createElement("tr");
    const headers = ["Name", "Address", "Phone", "Website", "Membership Level"];
    headers.forEach((header) => {
        const th = document.createElement("th");
        th.textContent = header;
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    members.forEach((member) => {
        const row = document.createElement("tr");

        const nameCell = document.createElement("td");
        const addressCell = document.createElement("td");
        const phoneCell = document.createElement("td");
        const websiteCell = document.createElement("td");
        const membershipCell = document.createElement("td");

        nameCell.textContent = member.name;
        addressCell.textContent = member.address;
        phoneCell.textContent = member.phone_number;

        const websiteLink = document.createElement("a");
        websiteLink.setAttribute("href", member.website_url);
        websiteLink.setAttribute("target", "_blank");
        websiteLink.textContent = `${member.name} Website`;
        websiteCell.appendChild(websiteLink);

        membershipCell.textContent = member.membership_level;

        row.appendChild(nameCell);
        row.appendChild(addressCell);
        row.appendChild(phoneCell);
        row.appendChild(websiteCell);
        row.appendChild(membershipCell);

        table.appendChild(row);
    });

    directory.appendChild(table);
};

// Fetch member data on page load
getMemberData();

