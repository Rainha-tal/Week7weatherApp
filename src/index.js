function updateWeatherData(response) {
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let weatherInfoElement = document.querySelector(".weather-info");

  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  weatherInfoElement.innerHTML = `Today, ${response.data.time} | ${response.data.condition.description}
    <br />
    Humidity: <strong>${response.data.temperature.humidity}%</strong> , Wind: <strong> ${response.data.wind.speed}km/h</strong>`;
}

function searchCity(city) {
  let apiKey = "b2a5adcct04b33178913oc335f405433";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(updateWeatherData);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");

  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Pretoria");


