const API_KEY = "08228fe828c3659af41d3c7fb4659e4b";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const locationInfo = document.querySelector(".location__info");
      const weatherInfo = document.querySelector(".weather__info");
      locationInfo.innerText = data.name;
      weatherInfo.innerText = data.weather[0].main;
    });
}

function onGeoError() {
  alert("Can't find you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
