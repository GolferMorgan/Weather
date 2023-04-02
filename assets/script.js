// variables to get the weather
var APIKey = "914aa2f97745e35890164fd91e196191";
var cityEl = document.querySelector(".input-bar");
var temp = document.getElementById("temp");
var humidity = document.getElementById("humidity")
var wind = document.getElementById("wind")
var weather = document.getElementById("weather")
var outlook = document.getElementById("outlook")
var description = document.getElementById("description")
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
    renderCurrentWeather(data)
    console.log(data)
    return (data) 
  })
  .then(function (data) {
    renderWind(data.main)
    console.log(data.main)
    return (data.main)
});
}

// current weather
function renderCurrentWeather(data) {
   weather.innerHTML = data.weather[0].description
     return (data);
}    

// current wind
function renderWind(data) {
  wind.innerhtml = data.main[0]
  return (data.main);
}


function getForecast() {
   var forecastURL = "https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={APIKey}";
   fetch(forecastURL)
   .then (function (response) {
   return (response.json());
  })
   .then(function (data) {
   renderForecast(data)
   console.log(data)
   return (data)
  })
  }
    
function renderForecast(data) {
  var outlook = getElementById("outlook")
   outlook.innerHTML = data[0].description
   return (data);
  }
  

// function renderCurrentWeather(data) {
//   temp.innerHTML = data[3]
//   return (data.main);
// }

// need to add a way to display 5 day outlook




// need to add the searched locations under previous locations tab
function appendSearchHistory() {
    // added local storage so it would save the location
    localStorage.setItem('locations', input);
    // set alert to show the appointment was saved
    console.log(locations);
}

// need to add local storage so everything stays on page
function getSearchHistory() {

}

// added event listerner to the search button 
search.addEventListener('click', getApi);
