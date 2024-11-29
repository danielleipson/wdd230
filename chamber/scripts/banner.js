const title = document.querySelector(".banner-title");
const text = document.querySelector(".banner-text");
const button = document.querySelector(".banner-close");
const banner = document.querySelector(".banner");

// JSON Data URL
const bannerData = "https://www.danielleipson.github.io/wdd230/data/banner.json";

// Days to show the banner (1 = Monday, 2 = Tuesday, ..., 7 = Sunday)
const showDates = [1, 2, 3];

// Current day of the week
const date = new Date();

// Fetch and display banner data
async function getBannerData() {
    try {
        const response = await fetch(bannerData);
        if (!response.ok) throw new Error(`Failed to load banner data: ${response.status}`);
        const data = await response.json();

        // Populate banner content
        displayBanner(data.info[0]);
    } catch (error) {
        console.error("Error fetching banner data:", error);
    }
}

// Display banner content
function displayBanner(content) {
    // Add title and separator
    title.innerHTML = `<h3>${content.title}</h3><hr>`;

    // Add text
    text.textContent = content.text;

    // Show banner only if today is in `showDates`
    if (showDates.includes(date.getDay())) {
        banner.classList.remove("hidden-banner");
    } else {
        banner.classList.add("hidden-banner");
    }
}

// Handle banner close button click
button.addEventListener("click", () => {
    banner.classList.add("hidden-banner");
});

// Load banner data on page load
getBannerData();
