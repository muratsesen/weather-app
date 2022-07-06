import { configureStore } from "@reduxjs/toolkit";
import weatherSlice from "./weatherSlice";
import keySlice from "./keySlice";

const store = configureStore({
    reducer: { key:keySlice.reducer, weather: weatherSlice.reducer }
});

export default store;