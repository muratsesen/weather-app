import { createSlice } from "@reduxjs/toolkit";

const weatherSlice = createSlice({
    name: "weather",
    initialState: {
        search: "",
        city:null,
    },
    reducers: {
        add(state,actions){
            state.search = actions.payload;
        },
        setCity(state,actions){
            state.city = {...actions.payload};
        }
    }
});

export const weatherActions = weatherSlice.actions;
export default weatherSlice;