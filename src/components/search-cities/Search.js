import React from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { useDispatch, useSelector } from "react-redux";
import { weatherActions } from "../../store/weatherSlice";
import { cities } from "../../data/cities";

const Search = () => {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.weather.search);
  
  const handleOnChange = (e) => {
    dispatch(weatherActions.setCity( cities.filter(c=>c.name === e.target.value)[0]));
  };
  return (
    <>
    <label htmlFor="search">Search City { }</label>
      <select onChange={handleOnChange} name="cars" id="cars">
        {cities.map((city) => (
          <option key={city.name} value={city.name}>
            {city.name}
          </option>
        ))}
      </select>
    </>
  );
};

export default Search;
