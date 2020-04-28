const nameCity = document.querySelector("[data-city-name]");
const currentTemp = document.querySelector("[data-current-temp");
const descriptionWeather = document.querySelector("[data-describe]");
const maxTemperature = document.querySelector('[data-max]');
const minTemperature = document.querySelector('[data-min]');

export function updateWeatherInfo(weather){
    nameCity.innerHTML = weather.name;
    currentTemp.innerHTML = weather.main.temp;
    descriptionWeather.innerHTML = weather.weather[0].description;
    maxTemperature.innerHTML = weather.main.temp_max;
    minTemperature.innerHTML = weather.main.temp_min;
    console.log(weather);
}