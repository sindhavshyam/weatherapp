const city = document.querySelector(".city");
const temp = document.querySelector(".temp");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const input = document.querySelector(".input");
const btn = document.querySelector(".icon");
const weathericon = document.querySelector(".icon-weather")
const content = document.querySelector(".content");
const error = document.querySelector(".error");


const apikey = "6ab0c4bc66140c541580c5a2b8f3e069";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?q=";

async function checkwhether(cityName){
    const response = await fetch(apiurl + encodeURIComponent(cityName) + `&units=metric&appid=${apikey}`);

    if(response.status == 404){
        error.style.display = "block";
        weather.style.display = "none";  //not working some issue
    }else{
        var data = await response.json();
    console.log(data);
    city.innerHTML = data.name;
    temp.innerHTML = Math.round(data.main.temp) + " °C";
    humidity.innerHTML = data.main.humidity + " %";
    wind.innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main == 'Clouds'){
        weathericon.src = "./clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        weathericon.src = "./Clear.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weathericon.src = "./Drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        weathericon.src = "./mist.png";
    }
    else if(data.weather[0].main == "Rain"){
        weathericon.src = "./rain.png";
    }
    content.style.display = "flex";
    }

    
}


btn.addEventListener("click", () => {
    checkwhether(input.value);
});