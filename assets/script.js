// variables to get the weather
var APIKey = "914aa2f97745e35890164fd91e196191";
var cityEl = document.querySelector(".input-bar");
var icon =document.getElementById("icon")
var temp = document.getElementById("temp");
var humidity = document.getElementById("humidity")
var wind = document.getElementById("wind")
var weather = document.getElementById("weather")
var outlook = document.getElementById("outlook")
var forecastWeather = document.getElementById("forecast-weather")
var forecastWind = document.getElementById("forecast-wind")
var forecastHumid = document.getElementById("forecast-humidity")
var forecastTemp = document.getElementById("forecast-temp")
var forecastIcon = document.getElementById("forecast-icon")
var lat; var lon; 
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
  lon = data.coord.lon
  lat = data.coord.lat
  document.querySelector(".city").innerText = name
  document.querySelector("#icon").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
  getForecast()
  });

// current weather
function renderWeather(data) {
   weather.innerHTML = data.weather[0].description
     return (data);
}    
}

// data for forecsat outlook
function getForecast() {
   var forecastURL = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + APIKey;
   fetch(forecastURL)
   .then (function (response) {
   return (response.json());
  })
   .then(function (data) {
   renderForecast(data)
   console.log(data)
   var time = data.list.dt_txt
   for(var i = 0; i < time.length; i++) { 
    console.log(time[15].dt_txt)
     if(time.length == "15:00:00")
     return(data)
   }
   return (data)
  })
  }
    
function renderForecast(data) {
   forecastIcon.innerHTML = icon
   forecastWind.innerHTML = wind.speed
   forecastWeather.innerHTML = weather[1]
   forecastHumid.innerHTML = humidity
   forecastTemp.innerHTML = temp
   return (data);
  }

  

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
var locations = document.querySelector(".search")

// added event listerner to the search button 
search.addEventListener('click', getApi);
// localStorage.setItem("btn", input-bar)