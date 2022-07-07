let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  london: {
    temp: 20.9,
    humidity: 100,
  },
  moscow: {
    temp: -5,
    humidity: 20,
  },
};

function open_tab() {
  let entered_city = prompt("Enter a City").toLowerCase();

  if (weather[entered_city] !== undefined) {
    let temperature = weather[entered_city].temp;
    let humidity = weather[entered_city].humidity;
    let celsius = Math.round(temperature);
    let fahrenheit = Math.round((temperature * 9) / 5 + 32);
    alert(
      `It is currently ${celsius}°C (${fahrenheit}°F) in ${entered_city} with a humidity of ${humidity}%`
    );
  } else {
    alert(
      "Sorry we don't know the weather for this city, try going to https://www.google.com/search?q=weather+" +
        entered_city
    );
  }
}

open_tab();
