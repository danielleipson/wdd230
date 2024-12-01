// Fetch JSON data and display spotlight members
async function loadSpotlight() {
    const spotlightContainer = document.getElementById('spotlight');

    try {
        // Fetch the JSON data
        const response = await fetch('data/members.json');
        const data = await response.json();

        // Filter members with Gold or Silver membership
        const eligibleMembers = data.members.filter(member => 
            member.membership_level === 'Gold' || member.membership_level === 'Silver'
        );

        // Shuffle array and select 2–3 members
        const shuffled = eligibleMembers.sort(() => 0.5 - Math.random());
        const spotlightMembers = shuffled.slice(0, 3);

        // Generate and inject HTML for selected members
        spotlightContainer.innerHTML = spotlightMembers.map(member => `
            
            <div class="bis-card">
                <div class="content">
                    <!-- Front of the card -->
                    <div class="front">
                        <img src="${member.icon}" alt="${member.name} logo" class="logo">
                    </div>
                    <!-- Back of the card -->
                    <div class="back">
                        <h3>${member.name}</h3>
                        <p>${member.phone_number}</p>
                         <p><a href="${member.website_url}" target="_blank">Visit Website</a></p>
                        <p>${member.address}</p>
                    </div>
                </div>
            </div>
        `).join('');


    } catch (error) {
        console.error('Error loading spotlight members:', error);
        spotlightContainer.innerHTML = '<p>Unable to load business spotlight at this time.</p>';
    }
}

loadSpotlight();
