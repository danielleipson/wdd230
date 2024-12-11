 const title = document.querySelector(".banner-title");
 const text = document.querySelector(".banner-text");
 const button = document.querySelector(".banner-close");
 const banner = document.querySelector(".banner");
 const bannerData = "data/banner.json";
 const date = new Date();
 const showDates = [1, 2, 3];

 async function getBannerData() {
     const response = await fetch(bannerData);
     const data = await response.json()
     const h3 = document.createElement('h3');
     const hr = document.createElement('hr');
     h3.textContent = `${data.info[0].title}`
     title.appendChild(h3)
     title.appendChild(hr)
     text.textContent = `${data.info[0].text}`
         // console.table(data.info);
 }

 if (showDates.includes(date.getDay())) {
    getBannerData();
} else {
    banner.style.display = "none"; // Hide the banner completely on other days
}

button.addEventListener('click', () => {
    banner.classList.toggle('hidden-banner');
});