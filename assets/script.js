// variables to get the weather
var APIKey = "914aa2f97745e35890164fd91e196191";
var cityEl = document.querySelector(".input-bar");
var icon = document.getElementById("icon");
var temp = document.getElementById("temp");
var humidity = document.getElementById("humidity");
var wind = document.getElementById("wind");
var weather = document.getElementById("weather");
var outlook = document.getElementById("outlook");
var forecastWeather = document.getElementById("forecast-weather");
var forecastWind = document.getElementById("forecast-wind");
var forecastHumid = document.getElementById("forecast-humidity");
var forecastTemp = document.getElementById("forecast-temp");
var forecastIcon = document.getElementById("forecast-icon");
var search = document.getElementById("btn");
var units = "imperial";
var locations = [];

// set up the funtion to grab the api
function getApi() {
  var today = dayjs();
  $("h4").text(today.format("MMM D, YYYY"));
  var name = cityEl.value;
  var city = cityEl.value;
  var queryURL =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&units=imperial&appid=" +
    APIKey;
  fetch(queryURL)
    .then(function (response) {
      return response.json();
    })
    // logs all the data needed for the weather
    .then(function (data) {
      // displays current weather
      renderWeather(data);
      console.log(data);
      icon.innerHTML = data.weather[0].icon;
      wind.innerHTML = data.wind.speed;
      weather.innerHTML = data.weather[0].description;
      humidity.innerHTML = data.main.humidity;
      temp.innerHTML = data.main.temp;
      document.querySelector(".city").innerText = name;
      document.querySelector(
        "#icon"
      ).src = `https://openweathermap.org/img/w/${forecast.weather[0].icon}.png`;
      getForecast();
    });

  // current weather
  function renderWeather(data) {
    weather.innerHTML = data.weather[0].description;
    return data;
  }
}

function fetchWeather(location) {
  var { lat } = location;
  var { lon } = location;
  var city = location.name;
}

// data for forecsat outlook
function getForecast() {
  var forecastURL = `${rootUrl}/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${APIKey}`;
  var rootUrl = "https://api.openweathermap.org/";
  fetch(forecastURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      renderForecast(data);
      console.log(data);
    });
}

function renderForecast(dailyForecast) {
  var startDt = dayjs().add(1, "day").startOf("day").unix();
  var endDt = dayjs().add(6, "day").startOf("day").unix();

  var headingCol = document.createElement("div");
  var h4 = document.createElement("h4");

  headingCol.setAttribute("class", "col-12");
  h4.textContent = "5 Day Forecast;";
  headingCol.append("h4");

  forecastContainer.innerHTML = "";
  forecastContainer.append(headingCol);

  for (var i = 0; i < dailyForecast.length; i++) {
    if (dailyForecast[i].dt >= startDt && dailyForecast[i].dt < endDt) {
      if (dailyForecast[i].dt_txt.slice(11, 13) == "12") {
        forecastCard(dailyForecast[i]);
      }
    }
  }
}

function forecastCard(forecast) {
  // variables

  // iconUrl
  var iconUrl = `https://openweathermap.org/img/w/${forecast.weather[0].icon}.png`;
  // iconDescription
  var iconDesc = forecast.weather[0].description;
  // temp
  var foreTemp = forecast.main.temp;
  // humidity
  var foreHumid = forecast.main.humidity;
  // speed
  var foreWind = forecast.wind.speed;

  // create elements

  // card - div
  var card = document.createElement("div");
  var column = document.createElement("div");
  var body = document.createElement("div");
  var t = document.createElement("p");
  var h = document.createElement("p");
  var w = document.createElement("p");

  //  append created elements
  column.append(card);
  card.append(body);
  cardBody.append(t, h, w);

  // classList.add
  // setAttribute
  // textContent
  // setAttribute for icons
  // use textocontent to fill everyting created with the api
  t.textContent = `${foreTemp}`;
  h.textContent = `${foreHumid}`;
  w.textContent = `${foreWind}`;
  // appending column to container for forecast
  forecastContainer.append(column);
}

// need to add the searched locations under previous locations tab
function appendSearchHistory() {
  // added local storage so it would save the location
  localStorage.setItem("btn", input - bar);
  // set alert to show the appointment was saved
  console.log(input - bar);
}

// need to add local storage so everything stays on page
function getSearchHistory() {}
var locations = document.querySelector(".search");

// added event listerner to the search button
search.addEventListener("click", getApi);
// localStorage.setItem("btn", input-bar)
