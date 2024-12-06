function calculateWindChill(tempF, windSpeedMPH) {
    if (tempF <= 50 && windSpeedMPH >= 3) {
        return (
            35.74 +
            0.6215 * tempF -
            35.75 * Math.pow(windSpeedMPH, 0.16)
        ).toFixed(1);
    } else {
        return null;
    }
}

async function getCurrentWeather() {
    const weatherContainer = document.getElementById("weather-info");

    try {
        const observationResponse = await fetch(`https://api.weather.gov/stations/KSGU/observations/latest`);
        const observationData = await observationResponse.json();
        const observation = observationData.properties;

        const temperatureF = (observation.temperature.value * 9/5 + 32).toFixed(1);
        let windSpeedMPH = null;
        if (observation.windSpeed && observation.windSpeed.value !== null) {
            windSpeedMPH = (observation.windSpeed.value * 0.621371).toFixed(1);
        }

        const windChill = windSpeedMPH !== null ? calculateWindChill(temperatureF, windSpeedMPH) : null;

        // Display current weather information
        weatherContainer.innerHTML = `
        <h4>${observation.textDescription}</h4>
        <p>Temperature: ${temperatureF}°F</p>
        ${windSpeedMPH !== null ? `<p>Wind: ${windSpeedMPH} mph</p>` : '<p>Wind data not available.</p>'} 
        ${windChill ? `<p>Wind Chill: ${windChill}°F</p>` : '<p>Wind chill not applicable.</p>'}
        `;
    } catch (error) {
        weatherContainer.innerHTML = '<p>Failed to load weather data.</p>';
    }
}

getCurrentWeather();
