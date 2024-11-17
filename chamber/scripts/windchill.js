async function getCurrentWeather() {
    const weatherContainer = document.getElementById("weather-info");

    try{
        const observationResponse = await fetch(`https://api.weather.gov/stations/KSGU/observations/latest`);
        const observationData = await observationResponse.json();
        const observation = observationData.properties;

        console.log('Observation data:', observation);

        const temperatureF = (observation.temperature.value * 9/5 + 32).toFixed(1);
        let windSpeedMph = null;
        if (observation.windSpeed && observation.windSpeed.value !== null) {
            windSpeedMph = (observation.windspeed.value * 0.621371).toFixed(1);
            console.log('Wind  speed (mph):', windSpeedMph);
        } else {
            console.log('Wind speed date not available.');
        }

        const windChill = windSpeedMph !== null ? calculateWindChill(temperatureF, windSpeedMph) : null;
        console.log('Wind chill:', windChill);

        //Display current weather information
        weatherContainer.innerHTML = `
        <h4>${observation.textDescription}</h4>
        <p>Temperature: ${temperatureF}°F</p>
        ${windSpeedMph !== null ? `<p>Wind: ${windSpeedMph} mph</p>` : '<p>Wind data not available.</p>'} 
        ${windChill ? `<p>Wind Chill: ${windChill}°F</p>` : '<p>Wind chill not applicable.</p>'}
        `;
    } catch (error) {
        weatherContainer.innerHTML = '<p>Failed to load weather data.</p>';
        console.error('Error fetching weather data:', error);
    }
}

getCurrentWeather();