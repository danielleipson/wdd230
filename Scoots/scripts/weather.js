const weatherDiv = document.querySelector("#weather");
const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=20.508046802875196&lon=-86.94553121679152&appid=6abb07fe3579e18bd052380bbf880933&units=imperial`;
const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=20.508046802875196&lon=-86.94553121679152&appid=6abb07fe3579e18bd052380bbf880933&units=imperial`;

const highTemp = document.querySelector(".hightemp"); // Closable banner container
const tempbutton = document.querySelector(".tempbutton"); // Button to toggle banner
const tempDataURL = "data/high-temp.json"; // JSON file path

async function fetchTempData() {
    try {
        const response = await fetch(tempDataURL);
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            throw new Error("Failed to fetch temp data: " + response.statusText);
        }
    } catch (error) {
        console.error(error);
    }
}

async function setupBanner(highTempValue) {
    const data = await fetchTempData();

    if (!data || !data.info || data.info.length === 0) {
        console.error("No data available for the banner.");
        return;
    }

    const bannerInfo = data.info[0]; // Get the first banner info object
    const title = document.createElement("h2");
    const text = document.createElement("p");
    const closeButton = document.createElement("button");

    // Populate content from JSON and high temperature value
    title.textContent = bannerInfo.title;
    text.textContent = `${bannerInfo.text} ${highTempValue}°F.`;

    // Configure close button
    closeButton.textContent = "X";
    closeButton.classList.add("close-btn");
    closeButton.addEventListener("click", () => {
        highTemp.classList.add("closed");
    });

    // Append content to the banner
    highTemp.innerHTML = ""; // Clear previous content
    highTemp.appendChild(closeButton);
    highTemp.appendChild(title);
    highTemp.appendChild(text);

    // Ensure the banner is visible initially
    highTemp.classList.remove("closed");
}

async function getWeather() {
    try {
        const response = await fetch(weatherURL);
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}

async function getForecast() {
    try {
        const response = await fetch(forecastURL);
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.error("Error fetching forecast data:", error);
    }
}

async function displayWeather() {
    const weatherData = await getWeather();
    const forecastData = await getForecast();

    if (!weatherData || !forecastData) {
        console.error("Weather or forecast data is missing.");
        return;
    }

    const iconToday = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
    const iconTomorrow = `https://openweathermap.org/img/wn/${forecastData.list[3].weather[0].icon}@2x.png`;

    // Create elements
    const h2 = document.createElement("h2");
    const currWeather = document.createElement("div");
    const tomorrowWeather = document.createElement("div");
    const temp1 = document.createElement("p");
    const temp2 = document.createElement("p");
    const icon1 = document.createElement("img");
    const icon2 = document.createElement("img");
    const main1 = document.createElement("p");
    const main2 = document.createElement("p");
    const hr = document.createElement("hr");
    const todayP = document.createElement("p");
    const tomorrowP = document.createElement("p");
    const humidity1 = document.createElement("p");
    const humidity2 = document.createElement("p");

    // Assign content
    h2.textContent = weatherData.name;
    temp1.textContent = `${weatherData.main.temp} °F`;
    temp2.textContent = `${forecastData.list[3].main.temp} °F`;
    icon1.setAttribute("src", iconToday);
    icon1.setAttribute("alt", weatherData.weather[0].description);
    icon2.setAttribute("src", iconTomorrow);
    icon2.setAttribute("alt", forecastData.list[3].weather[0].description);
    main1.textContent = weatherData.weather[0].main;
    main2.textContent = forecastData.list[3].weather[0].main;
    todayP.textContent = "Today's Weather:";
    tomorrowP.textContent = "Tomorrow's Weather:";
    humidity1.textContent = `Humidity: ${weatherData.main.humidity}%`;
    humidity2.textContent = `Humidity: ${forecastData.list[3].main.humidity}%`;

    // Add elements to div
    currWeather.appendChild(todayP);
    currWeather.appendChild(temp1);
    currWeather.appendChild(icon1);
    currWeather.appendChild(main1);
    currWeather.appendChild(humidity1);

    tomorrowWeather.appendChild(tomorrowP);
    tomorrowWeather.appendChild(temp2);
    tomorrowWeather.appendChild(icon2);
    tomorrowWeather.appendChild(main2);
    tomorrowWeather.appendChild(humidity2);

    weatherDiv.appendChild(h2);
    weatherDiv.appendChild(hr);
    weatherDiv.appendChild(currWeather);
    weatherDiv.appendChild(tomorrowWeather);

    // Setup the banner
    setupBanner(weatherData.main.temp_max);
}

displayWeather();
