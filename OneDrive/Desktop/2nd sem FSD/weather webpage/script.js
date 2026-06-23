const apiKey = "YOUR_API_KEY";

const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("city");

const temp = document.getElementById("temp");
const desc = document.getElementById("desc");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const icon = document.getElementById("icon");

async function getWeather(city) {

    try {

        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );

        const data = await response.json();

        if (data.cod !== 200) {
            alert("City not found!");
            return;
        }

        temp.innerHTML = `${Math.round(data.main.temp)}°C`;
        desc.innerHTML = data.weather[0].description;
        humidity.innerHTML = `${data.main.humidity}%`;
        wind.innerHTML = `${data.wind.speed} km/h`;

        const weatherType = data.weather[0].main;

        if (weatherType === "Clear") {
            icon.innerHTML = "☀️";
        }
        else if (weatherType === "Clouds") {
            icon.innerHTML = "☁️";
        }
        else if (weatherType === "Rain") {
            icon.innerHTML = "🌧️";
        }
        else if (weatherType === "Snow") {
            icon.innerHTML = "❄️";
        }
        else if (weatherType === "Thunderstorm") {
            icon.innerHTML = "⛈️";
        }
        else {
            icon.innerHTML = "🌤️";
        }

    } catch (error) {
        console.log(error);
        alert("Something went wrong!");
    }
}

searchBtn.addEventListener("click", () => {

    const city = cityInput.value.trim();

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    getWeather(city);
});

cityInput.addEventListener("keydown", (event) => {

    if (event.key === "Enter") {
        searchBtn.click();
    }
});