let weather = {
    apiKey: "Put your API key here",
    fetchWeather: function (city) {
      fetch(
        "https://api.openweathermap.org/data/2.5/forecast?q=" +
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
      
      for(i = 0; i<5; i++){
      const  name  = document.querySelector(".bar").value;
      const { description } = data.list[i].weather;
      const { temp, humidity } = data.list[i].main;
      const { speed } = data.list[i].wind;
      document.getElementById("day" + (i+1) +"City").innerText = "Weather in " + name;
      document.getElementById("img" + (i+1)).src = "http://openweathermap.org/img/wn/"+
        data.list[i].weather[0].icon
        +".png";
      document.getElementById("day" + (i+1) +"Description").innerhtml = description;
      document.getElementById("day" + (i+1) +"Temp").innerText = temp.toFixed(1) + "°C";
      // toFixed will put only 1 number after the ,
      document.getElementById("day" + (i+1) +"Humidity").innerText = "Humidity: " + humidity + "%";
      document.getElementById("day" + (i+1) +"Wind").innerText = "Wind : " + speed + " km/h";
      document.getElementById("day" + (i+1) +"Weather").classList.remove("loading");
      document.body.style.backgroundImage =
        "url('https://source.unsplash.com/1600x900/?" + name + "')";
        const remember = localStorage.setItem("lastChoice", name)
        
      }
    //  fetchWeather(localStorage.getItem("lastChoice"))
      //Chart
let myChart = null

 var xyValues = [
  
  {x:1, y:(data.list[0].main.temp)},
  {x:2, y:(data.list[1].main.temp)},
  {x:3, y:(data.list[2].main.temp)},
  {x:4, y:(data.list[3].main.temp)},
  {x:5, y:(data.list[4].main.temp)},
]

const ctx = document.getElementById('myChart').getContext('2d');
const config = {
   type: 'bar',
   data: {
       labels: ["1", "2", "3", "4", "5"], 
       datasets: [{
           label: '°C',
           data: xyValues, 
           backgroundColor: [
               'rgba(255, 99, 132, 0.2)',
               'rgba(54, 162, 235, 0.2)',
               'rgba(255, 206, 86, 0.2)',
               'rgba(75, 192, 192, 0.2)',
               'rgba(153, 102, 255, 0.2)',
               'rgba(255, 159, 64, 0.2)'
           ],
           borderColor: [
               'rgba(255, 99, 132, 1)',
               'rgba(54, 162, 235, 1)',
               'rgba(255, 206, 86, 1)',
               'rgba(75, 192, 192, 1)',
               'rgba(153, 102, 255, 1)',
               'rgba(255, 159, 64, 1)'
           ],
           borderWidth: 1
       }]
   },
   options: {
       scales: {
           y: {
               beginAtZero: true
           }
       }
           
       
   }
  
   
  
 };


 if (Chart.getChart("myChart")){
  Chart.getChart("myChart").destroy();
}

myChart=new Chart(ctx,config)

    },
      search: function () {
      this.fetchWeather(document.querySelector(".bar").value);
      
      },
  
  };

  document.querySelector(".searchBtn").addEventListener("click", function (event) {
    weather.search();
     
 });
  
  document.querySelector(".bar").addEventListener("keyup", function (event) {
      if (event.key == "Enter") {
        weather.search();
        
      }
    });


// getting the last city knowed from the Local storage    

    window.addEventListener('load', () => {
      const name2 = localStorage.getItem('lastChoice');
      document.querySelector(".bar").value = name2;
      
  })
  const name2 = localStorage.getItem('lastChoice'); 
 
  weather.fetchWeather(name2)
 

//Getting and displaying the text for the upcoming five days of the week
var d = new Date();
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];



function CheckDay(day){
    if(day + d.getDay() > 6){
        return day + d.getDay() - 7;
    }
    else{
        return day + d.getDay();
    }
}
    for(i = 0; i<5; i++){
        document.getElementById("day" + (i+1)).innerHTML = weekday[CheckDay(i)]
          
    }

    

  