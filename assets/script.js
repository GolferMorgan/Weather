var APIKey = "914aa2f97745e35890164fd91e196191";

fetch("https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={APIKey")
  .then(function(response) {
    return (response.json());
  });