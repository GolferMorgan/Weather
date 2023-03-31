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
    
  })
  .then(function (data) {
    for (var i = 0; i < data.length; i++) {
      var listItem = document.createElement('li');
      listItem.textContent = data[i].html_url;
      weather.appendChild(listItem);
    }
  });
};

fetchButton.addEventListener('click', getApi);
