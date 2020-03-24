// const fileSystem = require('fs');
// const errors = "error.txt";

submit.addEventListener('click', submitForm);

function submitForm(e) {
    if (text.value.trim() === '') {
        validate.style.opacity = '1';
        setTimeout(() => {
            validate.style.opacity = '0';
        }, 1100)
    }
    e.preventDefault();
    loadingText.style.display = 'block';
    loadingBox.style.display = 'none';
    errorMsg.style.opacity = '0';
    let cityName = text.value;
    let http = new XMLHttpRequest();
    let apiKey = '7733cf409739e72dc2741f7677dcb531';
    let url = 'http://api.openweathermap.org/data/2.5/weather?q= ' + cityName + '&units=metric&appid=' + apiKey;
    let method = 'GET';
    http.open(method, url);
    http.onreadystatechange = function () {
        if (http.readyState == XMLHttpRequest.DONE && http.status === 200) {
            let data = JSON.parse(http.responseText);
            let weatherData = new weather(cityName, data.weather[0].description.toUpperCase());
            weatherData.temperature = data.main.temp;
            updateWeather(weatherData);
        } else if (http.readyState === XMLHttpRequest.DONE) {
            // fileSystem.writeFile(errors, "An error occurred while fetching data from the api")
            loadingText.style.display = 'none';
            errorMsg.style.opacity = '1';
            setTimeout(() => {
                errorMsg.style.opacity = '0';
            }, 4000)
        }
    };
    http.send();
}

function updateWeather(weatherData) {
    updateCity.textContent = weatherData.cityName;
    cityText.textContent = weatherData.description;
    tempText.textContent = weatherData.temperature;
    loadingText.style.display = " none";
    loadingBox.style.display = "block";
}