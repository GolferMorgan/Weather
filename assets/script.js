// variables to get the weather
var APIKey = "914aa2f97745e35890164fd91e196191";
var cityEl = "atlanta";
var temp = document.getElementById("temp");
var humidity = document.getElementById("humidity")
var wind = document.getElementById("wind")
var weather = document.getElementById("weather")
var description = document.getElementById("description")
var search = document.getElementById("btn");
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + cityEl + "&appid=" + APIKey;
var units = "imperial";
var container = document.getElementById("container");

// set up the funtion to grab the api
function getApi() {
fetch(queryURL)
  .then(function (response) {
    return (response.json());
  })
// logs all the data needed for the weather
  .then(function (data) {
    // displays current weather
    renderCurrentWeather(data.weather)
    console.log(data)
    return (data.weather) 
  })
};

function renderCurrentWeather(data) {
   weather.innerHTML = weather
     return (data.weather)
    
}


// need to add a way to display 5 day outlook

// need to add the searched locations under previous locations tab

// need to add local storage so everything stays on page


// added event listerner to the search button 
search.addEventListener('click', getApi);
