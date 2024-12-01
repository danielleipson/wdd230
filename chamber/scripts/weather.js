const API_KEY = "546d8e8af2a2f34bfbe5bf393b58b430";
const LATITUDE = 37.1753; // Example: Hurricane, Utah
const LONGITUDE = -113.1899;

const CURRENT_WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${LATITUDE}&lon=${LONGITUDE}&units=imperial&appid=${API_KEY}`;
const FORECAST_URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${LATITUDE}&lon=${LONGITUDE}&units=imperial&appid=${API_KEY}`;

// Function to fetch and display the current weather
async function fetchCurrentWeather() {
  try {
    const response = await fetch(CURRENT_WEATHER_URL);
    const data = await response.json();

    if (response.ok) {
      // Select elements to update
      const currentTempElement = document.getElementById("current-temp");
      const weatherIconElement = document.getElementById("weather-icon");
      const weatherCaptionElement = document.querySelector("figure figcaption");

      // Extract and display data
      const temp = data.main.temp.toFixed(1);
      const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
      const description = capitalizeWords(data.weather[0].description);

      currentTempElement.textContent = `${temp}°F`;
      weatherIconElement.src = icon;
      weatherIconElement.alt = description;
      weatherCaptionElement.textContent = description;
    } else {
      console.error("Error fetching current weather:", data.message);
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

// Function to fetch and display the 3-day forecast
async function fetchForecast() {
  try {
    const response = await fetch(FORECAST_URL);
    const data = await response.json();

    if (response.ok) {
      const forecastElement = document.getElementById("forecast");
      forecastElement.innerHTML = ""; // Clear previous forecast
      const dailyForecasts = data.list.filter((item) => item.dt_txt.includes("12:00:00")).slice(0, 3);

      dailyForecasts.forEach((forecast) => {
        const date = new Date(forecast.dt_txt).toLocaleDateString("en-US", { weekday: "long" });
        const temp = forecast.main.temp.toFixed(1);
        const icon = `https://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`;
        const description = capitalizeWords(forecast.weather[0].description);

        const listItem = document.createElement("li");
        listItem.innerHTML = `
          <div>
            <h3>${date}</h3>
            <p>${description}</p>
          </div>
          <div>
            <img src="${icon}" alt="${description}">
            <p>${temp}°F</p>
          </div>
        `;

        forecastElement.appendChild(listItem);
      });
    } else {
      console.error("Error fetching forecast:", data.message);
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

// Helper function to capitalize each word in a string
function capitalizeWords(description) {
  return description
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// Fetch current weather and forecast on page load
fetchCurrentWeather();
fetchForecast();
