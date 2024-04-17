const apiKey = 'place your API of OpenWeatherMap here';
const units = 'metric';

const locationElement = document.getElementById('location');
const weatherIconElement = document.getElementById('weather-icon');
const weatherDescriptionElement = document.getElementById('weather-description');
const temperatureElement = document.getElementById('temperature');

async function fetchWeather() {
  const cityInput = document.getElementById('city-input').value;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=${units}`;
  
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    updateWeather(data);
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
}

function updateWeather(data) {
  locationElement.textContent = `${data.name}, ${data.sys.country}`;
  weatherDescriptionElement.textContent = data.weather[0].description;
  temperatureElement.textContent = `${data.main.temp}°C`;

  const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
  weatherIconElement.innerHTML = `<img src="${iconUrl}" alt="${data.weather[0].description}">`;
}
