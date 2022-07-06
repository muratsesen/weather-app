import React from "react";
import { getWeather } from "../../service/weatherService";
import { useSelector } from "react-redux";

const WeatherState = () => {
  const [current, setCurrent] = React.useState("");
  const city = useSelector((state) => state.weather.city);

  const fetchCityWeather = React.useCallback(async () => {
    if (city) {
      const {current} = await getWeather(city.lat, city.lng);
       setCurrent({...current});
    }
  }, [city]);

  React.useEffect(() => {
    fetchCityWeather();
  }, [city, fetchCityWeather]);
  return (
  <div>
    Temp: {current.temp}
    <br />
    Feels like: {current.feels_like}
    <br />
    Humidity: {current.humidity}
    <br />
    Wind: {current.wind_speed}
    <br />
    Visibility: {current.visibility}
    <br />
    Sunrise: {current.sunrise}
    <br />
    </div>);
};

export default WeatherState;
