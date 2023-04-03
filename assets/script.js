// variables to get the weather
var APIKey = "914aa2f97745e35890164fd91e196191";
var cityEl = document.querySelector(".input-bar");
var icon =document.getElementById("icon")
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
  var today = dayjs();
$('h4').text(today.format('MMM D, YYYY'));
var name = cityEl.value;
  var city = cityEl.value;
  var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + APIKey;
fetch(queryURL)
  .then(function (response) {
    return (response.json());
  })
// logs all the data needed for the weather
.then(function (data) {
  // displays current weather
  renderWeather(data)
  console.log(data)
  icon.innerHTML = data.weather[0].icon
  wind.innerHTML = data.wind.speed
  weather.innerHTML = data.weather[0].description
  humidity.innerHTML = data.main.humidity
  temp.innerHTML = data.main.temp
  document.querySelector(".city").innerText = name
  document.querySelector("#icon").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
  });

// current weather
function renderWeather(data) {
   weather.innerHTML = data.weather[0].description
     return (data);
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