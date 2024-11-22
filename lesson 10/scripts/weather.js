const latitude = 37.1753;
const longitude = -113.2899;
const apiKey = '9508730b12a2fe9ec19f307b79beb2ab';

const currentTemp = documennnt.querySelector('#current-temp');
const weatherIcon = documennnt.querySelector('#weather-icon');
const captionDesc = documennnt.querySelector('#figcaption');

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&apppid=${apiKey}&units=imperial`;

async function apiFetch() {
    try {
        const  response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error (await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    currentTemp.innerHTML = `${math.floor(data.main.temp)}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;
}

apiFetch();