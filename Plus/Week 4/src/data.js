function formatDate(date) {
  let hours = date.getHours();

  if (hours < 10) {
    hours = "0".concat(hours);
  }

  let minutes = date.getMinutes();

  if (minutes < 10) {
    minutes = "0".concat(minutes);
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  return "📅".concat(day, " ").concat(hours, ":").concat(minutes);
}

let dateElement = document.querySelector("#changeTime");
let date = new Date();
dateElement.innerHTML = formatDate(date);

function search(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#city");
  let cityInput = document.querySelector("#cityGrab");
  cityElement.innerHTML = cityInput.value;
}

let searchForm = document.querySelector("#search");
searchForm.addEventListener("submit", search);
