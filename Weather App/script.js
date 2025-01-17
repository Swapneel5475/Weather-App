const apiUrl =
    "https://api.openweathermap.org/data/2.5/weather";
const apiKey =
    "4eb3703790b356562054106543b748b2";

    const searchBox = document.querySelector(".search input"); 
    const searchBtn = document.querySelector(".search button"); 
    async function checkWeather(city) {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        var data = await response.json();

        console.log(data);
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = data.main.temp + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";

        searchBtn.addEventListener("click",()=>{
            checkWeather(searchBox.value);
        })
    }

    checkWeather();