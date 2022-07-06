import classes from './App.module.css';
import Search from "./components/search-cities/Search";
import {useSelector} from 'react-redux';
import WeatherState from './components/weather-state/weather-state';


function App() {
  const search = useSelector(state => state.weather.search);
  return (
    <div className={classes.container}>
      <Search />
      <WeatherState />
    </div>
  );
}

export default App;
