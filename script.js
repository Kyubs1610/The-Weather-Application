let weather = {
    apiKey: "Put your API KEY HERE",
    fetchWeather: function (city) {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          city +
          "&units=metric&appid=" +
          this.apiKey
      )
        .then((response) => {
          if (!response.ok) {
            alert("No weather found.");
            throw new Error("No weather found.");
          }
          return response.json();
        })
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
      const { name } = data;
      const { description } = data.weather[0];
      const { temp, humidity } = data.main;
      const { speed } = data.wind;
      document.querySelector(".city").innerText = "Weather in " + name;
      document.querySelector(".description").innerText = description;
      document.querySelector(".temp").innerText = temp + "°C";
      document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
      document.querySelector(".wind").innerText = "Wind speed: " + speed + " km/h";
      document.querySelector(".weather").classList.remove("loading");
      document.body.style.backgroundImage =
        "url('https://source.unsplash.com/1600x900/?" + name + "')";
    },
    search: function () {
      this.fetchWeather(document.querySelector(".bar").value);
    },
  };
  
  document.querySelector(".searchBtn").addEventListener("click", function () {
    weather.search();
  });
  
  document
    .querySelector(".bar")
    .addEventListener("keyup", function (event) {
      if (event.key == "Enter") {
        weather.search();
      }
    });
  
  weather.fetchWeather("Brussels");




allNames = localStorage.getItem("bar");
if (allNames) allNames = allNames.split(';;;');
document.querySelector(".city").innerHTML = allNames


function submit() {
  var partnerName = document.querySelector(".bar").value;
  allNames.push(bar);
  localStorage.setItem("city", allNames.join(';;;'));
  document.querySelector(".city").innerHTML = allNames;
}
