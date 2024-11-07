async function getWeather() {
    let response = await fetch('https://api.weather.gov/gridpoints/PIH/121,70/forecast/hourly');
    let data = await response.json();
    return data
}


let temp = 0;
let windSpeed = ''


getWeather().then(data => {
    info = data.properties.periods[0]
    console.log(data.properties.periods[0])
    let windChill = '';

    temp = info.temperature;
    windSpeed = info.windSpeed;

    let numberPattern = /\d+/g;
    let actualWindSpeed = windSpeed.match(numberPattern);
    console.log(actualWindSpeed)
    windSpeed = actualWindSpeed[0];

    const docuTemp = document.querySelector('#temp')
    const docuWind = document.querySelector('#windspeed')
    const docuChill = document.querySelector('#windchill')

    docuTemp.innerHTML = `Temperature: ${temp}°F`
    docuWind.innerHTML = `Wind: ${windSpeed} mph`

    if (temp <= 50 && windSpeed > 3) {
        windChill = (35.74 + 0.6215 * temp - 35.75(windSpeed ^ 0.16) + 0.4275 * temp * (windSpeed ^ 0.16))
        docuChill.innerHTML = `Windchill: ${windChill} degrees`
    } else {
        docuChill.innerHTML = 'Windchill: N/A'
    }

});