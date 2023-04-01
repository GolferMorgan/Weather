// variables to get the weather
var APIKey = "914aa2f97745e35890164fd91e196191";
var cityEl = "atlanta";
var fetchButton = document.getElementById('search');
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + cityEl + "&appid=" + APIKey;
var units = "imperial";

// set up the funtion to grab the api
function getApi() {
fetch(queryURL)
  .then(function (response) {
    return (response.json());
  })
// logs all the data needed for the weather
  .then(function (data) {
    console.log(data)
    return (data)
  })
  .then(function (data) {
    console.log(data.main)
    return (data.main)
  })
  .then(function (data) {
    console.log(data.base)
    return (data.base)
  })
};

// need to add a way to display data for current weather

// need to add a way to display 5 day outlook

// need to add the searched locations under previous locations tab

// need to add local storage so everything stays on page


// added event listerner to the search button 
fetchButton.addEventListener('click', getApi);
