import classes from './App.module.css';
import Search from "./components/search-cities/Search";
import {useSelector} from 'react-redux';
import WeatherState from './components/weather-state/weather-state';
import ApiKey from './components/api-key/api-key';

function App() {

  const city = useSelector(state => state.weather.city);
  const key = useSelector(state => state.key.key);
  return (
    <div className={classes.container}>
      {key ? <Search /> : <ApiKey />}
      {city ? <WeatherState /> : null}
      
      
    </div>
  );
}

export default App;
