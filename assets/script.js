var APIKey = "914aa2f97745e35890164fd91e196191";
var city;
var state;
var country;
var fetchButton = document.getElementById('search');
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=+{city}+&appid=+{APIKey}";

function getApi() {
fetch(queryURL)
  .then(function (response) {
    return (response.json());
  })
  .then(function (data) {
    for (var i = 0; i < data.length; i++) {
      var listItem = document.createElement('li');
      listItem.textContent = data[i].html_url;
      repoList.appendChild(listItem);
    }
  });
}

fetchButton.addEventListener('click', getApi);
