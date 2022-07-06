//const api_key = '959061596eded62a4e27c1222bfa7c1a'
const api_key = sessionStorage.getItem('key') || '';

export function getWeather(lat, long) {
  return fetch(
    `http://api.openweathermap.org/data/3.0/onecall?units=metric&lat=${lat}&lon=${long}&appid=${api_key}`
  )
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      if (response.status === 401) {
        throw new Error("Unauthorized");
      }
      throw new Error("Something went wrong:\n"+response.statusText);
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      alert(error);
    });
}
