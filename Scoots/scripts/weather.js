const weatherDiv = document.querySelector("#weather");
const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=20.508046802875196&lon=-86.94553121679152&appid=6abb07fe3579e18bd052380bbf880933&units=imperial`
const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=20.508046802875196&lon=-86.94553121679152&appid=6abb07fe3579e18bd052380bbf880933&units=imperial`
const highTemp = document.querySelector(".hightemp")
const tempbutton = document.querySelector(".tempbutton")


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
        console.error(error);
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
        console.error(error);
    }
}


async function displayWeather() {
    const weatherData = await getWeather();
    const forecastData = await getForecast();
    console.log(weatherData);
    console.log(forecastData);
    const iconToday = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
    const iconTomorrow = `https://openweathermap.org/img/wn/${forecastData.list[3].weather[0].icon}@2x.png`;

    // create elements
    const h2 = document.createElement('h2');
    const currWeather = document.createElement('div');
    const tomorrowWeather = document.createElement('div');
    const temp1 = document.createElement('p')
    const temp2 = document.createElement('p')
    const icon1 = document.createElement('img');
    const icon2 = document.createElement('img');
    const main1 = document.createElement('p');
    const main2 = document.createElement('p');
    const hr = document.createElement('hr');
    const todayP = document.createElement('p');
    const tomorrowP = document.createElement('p');
    const highTempP = document.createElement('p');
    const humidity1 = document.createElement('p');
    const humidity2 = document.createElement('p');


    // assign elements
    h2.textContent = weatherData.name;
    temp1.textContent = `${weatherData.main.temp} °F`;
    temp2.textContent = `${forecastData.list[3].main.temp} °F`;
    icon1.setAttribute('src', iconToday)
    icon1.setAttribute('alt', weatherData.weather[0].description)
    icon2.setAttribute('src', iconTomorrow)
    icon2.setAttribute('alt', forecastData.list[3].weather[0].description)
    main1.textContent = weatherData.weather[0].main;
    main2.textContent = forecastData.list[3].weather[0].main;
    todayP.textContent = "Today's Weather:"
    tomorrowP.textContent = "Tomorrow's Weather:"
    highTempP.textContent = `${weatherData.main.temp_max} °F`;
    humidity1.textContent = `Humidity: ${weatherData.main.humidity}%`
    humidity2.textContent = `Humidity: ${forecastData.list[3].main.humidity}%`



    // add elements to div
    currWeather.appendChild(todayP)
    currWeather.appendChild(temp1)
    currWeather.appendChild(icon1)
    currWeather.appendChild(main1)
    currWeather.appendChild(humidity1)


    tomorrowWeather.appendChild(tomorrowP)
    tomorrowWeather.appendChild(temp2)
    tomorrowWeather.appendChild(icon2)
    tomorrowWeather.appendChild(main2)
    tomorrowWeather.appendChild(humidity2)



    weatherDiv.appendChild(h2)
    weatherDiv.appendChild(hr)
    weatherDiv.appendChild(currWeather)
    weatherDiv.appendChild(tomorrowWeather)

    //set the hightemp closable modal
    highTemp.appendChild(highTempP)

}

displayWeather();

tempbtn.addEventListener('click', () => {
    highTemp.classList.toggle('closed')
})