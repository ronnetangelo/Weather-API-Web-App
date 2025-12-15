const API_KEY = "b171c5b74ee692ca65d5df8d1313084b";

async function getWeather() {
    const city = document.getElementById("cityInput").value;
    if (!city) {
        alert("Please enter a city name");
        return;
    }

    // Current Weather API
    const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    
    // 5-Day Forecast API
    const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`;

    try {
        const [weatherRes, forecastRes] = await Promise.all([
            fetch(weatherURL),
            fetch(forecastURL)
        ]);

        const weatherData = await weatherRes.json();
        const forecastData = await forecastRes.json();

        if (weatherData.cod !== 200) {
            alert(weatherData.message);
            return;
        }

        displayCurrentWeather(weatherData);
        displayForecast(forecastData);

    } catch (err) {
        console.error(err);
        alert("Error fetching weather data.");
    }
}

function displayCurrentWeather(data) {
    const currentDiv = document.getElementById("currentWeather");
    currentDiv.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="icon">
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>${data.weather[0].description}</p>
    `;
}   

function displayForecast(data) {
    const forecastDiv = document.getElementById("forecast");
    forecastDiv.innerHTML = "";

    // Select one forecast per day at 12:00:00
    const daily = data.list.filter(item => item.dt_txt.includes("12:00:00"));

    daily.forEach(day => {
        const card = document.createElement("div");
        card.className = "forecast-card";
        card.innerHTML = `
            <h3>${new Date(day.dt_txt).toLocaleDateString()}</h3>
            <img src="https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png" alt="icon">
            <p>${day.weather[0].description}</p>
            <p>Temp: ${day.main.temp}°C</p>
            <p>Humidity: ${day.main.humidity}%</p>
        `;
        forecastDiv.appendChild(card);
    });
}
