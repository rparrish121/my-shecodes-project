function formatDate(date) {
  let hours = date.getHours();

  if (hours < 10) {
    hours = "0".concat(hours);
  }

  let minutes = date.getMinutes();

  if (minutes < 10) {
    minutes = "0".concat(minutes);
  }

  let dayIndex = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[dayIndex];
  return "".concat(day, " ").concat(hours, ":").concat(minutes);
}

function displayWeatherCondition(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperatureNew").innerHTML = Math.round(
    response.data.main.temp
  );
}

function searchCity(city) {
  var apiKey = "7e36930029c858b6aa50b205e0bada96";
  var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q="
    .concat(city, "&appid=")
    .concat(apiKey, "&units=metric");
  axios.get(apiUrl).then(displayWeatherCondition);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#cityInput").value;
  searchCity(city);
}

let dateElement = document.querySelector("#changeTime");
let date = new Date();
dateElement.innerHTML = formatDate(date);

let searchForm = document.querySelector("#search");
searchForm.addEventListener("submit", handleSubmit);
