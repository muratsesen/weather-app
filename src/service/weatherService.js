const api_key = '959061596eded62a4e27c1222bfa7c1a'

export function getWeather(lat, long,) {
    return fetch(`http://api.openweathermap.org/data/3.0/onecall?units=metric&lat=${lat}&lon=${long}&appid=${api_key}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            return data;
        }
        )
}