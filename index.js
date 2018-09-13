const API_KEY = "20cc01df9e2c26be69104537be607298"

function handleFormSubmit(event) {
  //handle submit event
  event.preventDefault(); 
  let enterCity = document.getElementById("city").value;
  fetchCurrentWeather(enterCity)
}


function fetchCurrentWeather(city) {
  //fetch current weather based on city
   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}`)
  .then(resp => resp.json())
  .then(json => displayCurrentWeather(json));
}

function displayCurrentWeather(json) {
  
  // render current weather data to the DOM using provided IDs and json from API
  // console.log(json)
  
  document.getElementById("temp").innerHTML=json.main.temp;
  document.getElementById("low").innerHTML=json.main.temp_min;
  document.getElementById("high").innerHTML=json.main.temp_max;
  document.getElementById("humidity").innerHTML=json.main.humidity;
  document.getElementById("cloudCover").innerHTML=json.clouds.all;
  
}






function fetchFiveDayForecast(city) {
  //fetch five day forecast data based on city
  fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${API_KEY}`)
  .then(resp => resp.json())
  .then(json => displayFiveDayForecast(json));
}

// function displayFiveDayForecast(json) {
//   //render five day forecast data to the DOM using provided IDs and json from API
//   document.getElementById("cloudCover").innerHTML=json.list.main.temp
//   const aside = document.getElementsByTagName("aside")[0];
//   while (aside.firstChil)
// }

// function createChart(json) {
//   //Bonus: render temperature chart using five day forecast data and ChartJS
// }

document.addEventListener('DOMContentLoaded', function() {
  //add event listener here for form submission
  document.getElementById("cityForm").addEventListener("click", handleFormSubmit)
})




  // if (enterCity == "").addEventListener("click", handleFormSubmit) { 
  //   enterCity.addEventListener("submit", callback); 
  // var x = ;
  //     if (x == "") {
  //   document.getElementById("cityForm").addEventListener("click", handleFormSubmit)} else {
  //     alert ("invalid",handleFormSubmit)
  //   }
  // check value and invoke variable 
  // console.log("working")
