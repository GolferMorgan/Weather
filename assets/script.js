// variables to get the weather
var APIKey = "914aa2f97745e35890164fd91e196191";
var cityEl = document.querySelector(".input-bar");
var temp = document.getElementById("temp");
var humidity = document.getElementById("humidity")
var wind = document.getElementById("wind")
var weather = document.getElementById("weather")
var outlook = document.getElementById("outlook")
var search = document.getElementById("btn");
var units = "imperial";
var locations = []

// set up the funtion to grab the api
function getApi() {
  var city = cityEl.value;
  var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
fetch(queryURL)
  .then(function (response) {
    return (response.json());
  })
// logs all the data needed for the weather
  .then(function (data) {
    // displays current weather
    renderWeather(data)
    console.log(data)
    return (data) 
  })
  .then(function (data) {
    renderWind(data)
    console.log(data.wind)
    return (data.wind)
  })
  .then(function (data) {
    renderHumidity(data)
    console.log(data.humidity)
    return (data.main)
  })
  .then(function (data) {
    renderTemp(temp)
    console.log(data.temp)
    return (temp)
  });

// current weather
function renderWeather(data) {
   weather.innerHTML = data.weather[0].description
     return (data);
}    

// current wind
function renderWind(data) {
  wind.innerHTML = data.wind
  return (wind);
}

// current humidity
function renderHumidity(data) {
  console.log(data.humidity)
  humidity.innerHTML = data.humidity
  return (humidity);
}

// current temp
function renderTemp(data) {
  console.log(data.temp)
  temp.innerHTML = data.temp
  return (temp);
}
}

// function getForecast() {
//    var forecastURL = "https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={APIKey}";
//    fetch(forecastURL)
//    .then (function (response) {
//    return (response.json());
//   })
//    .then(function (data) {
//    renderForecast(data)
//    console.log(data)
//    return (data)
//   })
//   }
    
// function renderForecast(data) {
//   var outlook = getElementById("outlook")
//    outlook.innerHTML = data[0].description
//    return (data);
//   }
  

// function renderCurrentWeather(data) {
//   temp.innerHTML = data[3]
//   return (data.main);
// }

// need to add a way to display 5 day outlook




// need to add the searched locations under previous locations tab
function appendSearchHistory() {
    // added local storage so it would save the location
    localStorage.setItem("btn", input-bar);
    // set alert to show the appointment was saved
    console.log(input-bar);
}

// need to add local storage so everything stays on page
function getSearchHistory() {

}

// added event listerner to the search button 
search.addEventListener('click', getApi);
localStorage.setItem("btn", input-bar)