const apiKey = "YOUR_API_KEY_HERE";

async function getWeather() {
    const city = document.getElementById("city").value;

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === "404") {
        alert("City not found!");
        return;
    }

    document.getElementById("city-name").innerText = "📍 " + data.name;
    document.getElementById("temp").innerText = "🌡 Temperature: " + data.main.temp + "°C";
    document.getElementById("humidity").innerText = "💧 Humidity: " + data.main.humidity + "%";
    document.getElementById("wind").innerText = "🌬 Wind: " + data.wind.speed + " km/h";
      }
