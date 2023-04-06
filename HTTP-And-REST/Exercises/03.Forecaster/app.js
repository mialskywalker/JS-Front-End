function attachEvents() {
    
    const BASE_URL = 'http://localhost:3030/jsonstore/forecaster/';
    const textInput = document.getElementById('location');
    const submitBtn = document.getElementById('submit');
    const currentWeather = document.getElementById('current');
    const upcomingWeather = document.getElementById('upcoming');
    const forecast = document.getElementById('forecast');

    submitBtn.addEventListener('click', getLocation);

    function getLocation() {
        const text = textInput.value;

        fetch(`${BASE_URL}locations`)
            .then((res) => res.json())
            .then((data) => {
                for (el of data) {
                    if (el.name === text) {
                        getCurrent(el.code);
                        getUpcoming(el.code);
                    }
                }
            })
            .catch((err) => {
                console.error(err);
            })
    }

    function getCurrent(code) {
        fetch(`${BASE_URL}today/${code}`)
            .then((res) => res.json())
            .then((data) => {
                forecast.style.display = 'block';

                const forecasts = document.createElement('div');
                const symbol = document.createElement('span');
                const condition = document.createElement('span');
                const name = document.createElement('span');
                const degrees = document.createElement('span');
                const weather = document.createElement('span');

                forecasts.classList.add('forecasts');
                symbol.classList.add('condition', 'symbol');
                condition.classList.add('condition');
                name.classList.add('forecast-data');
                degrees.classList.add('forecast-data');
                weather.classList.add('forecast-data');

                symbol.innerHTML = checkDegrees(data.forecast.condition);
                forecasts.appendChild(symbol);

                name.textContent = data.name;
                degrees.innerHTML = `${data.forecast.low}&#176/${data.forecast.high}&#176`;
                weather.textContent = data.forecast.condition;
                condition.appendChild(name);
                condition.appendChild(degrees);
                condition.appendChild(weather);

                forecasts.appendChild(condition);
                currentWeather.appendChild(forecasts);
                
            })
            .catch(() => {
                forecast.textContent = "Error";
            })
    }

    function getUpcoming(code) {
        fetch(`${BASE_URL}upcoming/${code}`)
            .then((res) => res.json())
            .then((data) => {
                for (el of data.forecast) {
                    const forecastInfo = document.createElement('div');
                    const upcoming = document.createElement('span');
                    const symbol = document.createElement('span');
                    const degrees = document.createElement('span');
                    const weather = document.createElement('span');

                    forecastInfo.classList.add('forecast-info');
                    upcoming.classList.add('upcoming');
                    symbol.classList.add('symbol');
                    degrees.classList.add('forecast-data');
                    weather.classList.add('forecast-data');

                    symbol.innerHTML = checkDegrees(el.condition);
                    degrees.innerHTML = `${el.low}&#176/${el.high}&#176`;
                    weather.textContent = el.condition;

                    upcoming.appendChild(symbol);
                    upcoming.appendChild(degrees);
                    upcoming.appendChild(weather);

                    forecastInfo.appendChild(upcoming);
                    forecastInfo.style.display = 'inline-block';
                    upcomingWeather.appendChild(forecastInfo);
                }

            })
            .catch((err) => {
                console.error(err);
            })
    }

    function checkDegrees(weatherCondition) {
        if (weatherCondition === 'Sunny') {
            return '&#x2600';
        }
        else if (weatherCondition === 'Partly sunny') {
            return '&#x26C5';
        }
        else if (weatherCondition === 'Overcast') {
            return '&#x2601';
        }
        else if (weatherCondition === 'Rain') {
            return '&#x2614';
        }
        else if (weatherCondition === 'Degrees') {
            return '&#176';
        }
    }


}

attachEvents();