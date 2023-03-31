// variables to get the weather
var APIKey = "914aa2f97745e35890164fd91e196191";
var cityEl = "atlanta";
var fetchButton = document.getElementById('search');
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + cityEl + "&appid=" + APIKey;
var units = "imperial";

// ste up the funtion to grab the api
function getApi() {
fetch(queryURL)
  .then(function (response) {
    return (response.json());
  })
//   logs all the data needed for the weather
  .then(function (data) {
    console.log(data)
    return (data)
  })
  .then(function (data) {
    console.log(data.main)
    return (data.main)
  })
  .then(function (data) {
    console.log(data.wind)
    return (data.wind)
  })
};

fetchButton.addEventListener('click', getApi);
