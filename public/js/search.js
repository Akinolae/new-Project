// Dear developer/software Engineer, Kindly leave this code as e dey. kindly use as forked thank you!. **SMILES**
submit.addEventListener('click', submitForm);
const weather_search_history = []

function submitForm(e) {
    e.preventDefault();
    if (text.value.trim() === '' || search_input.value.trim() === '') {
        validate.style.opacity = '1';
        setTimeout(() => {
            validate.style.opacity = '0';
        }, 1100)
    }
    loadingText.style.display = 'block';
    loadingBox.style.display = 'none';
    errorMsg.style.display = 'none';
    let cityName = text.value;
    weather_search_history.push(cityName);

    // Loop through the weather_search_history Array;
    // The new data is then sent to the front end as a list of history of search!.
    for (let index = 0; index < weather_search_history.length; index++) {
        const history = weather_search_history[index];
        console.log(history);
    }
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
            loadingText.style.display = 'none';
            errorMsg.style.display = 'block';
            setTimeout(() => {
                errorMsg.style.display = 'none';
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