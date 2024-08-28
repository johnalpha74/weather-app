document.getElementById('search-btn').addEventListener('click', function() {
    const city = document.getElementById('city-input').value;
    if (city) {
        getWeatherData(city);
    } else {
        alert('Please enter a city name');
    }
});

function getWeatherData(city) {
    const apiKey = 'YOUR_API_KEY';  // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayWeatherData(data);
        })
        .catch(error => {
            console.error('Error fetching the weather data:', error);
        });
}

function displayWeatherData(data) {
    const output = document.getElementById('weather-output');
    if (data.cod === 200) {
        const { main, weather, name } = data;
        output.innerHTML = `
            <h2>${name}</h2>
            <p>${weather[0].description}</p>
            <p>Temperature: ${main.temp} °C</p>
            <p>Humidity: ${main.humidity}%</p>
            <p>Pressure: ${main.pressure} hPa</p>
        `;
    } else {
        output.innerHTML = `<p>${data.message}</p>`;
    }
}
