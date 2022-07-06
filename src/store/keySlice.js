import { createSlice } from "@reduxjs/toolkit";

const keySlice = createSlice({
  name: "key",
  initialState: { 
    key: sessionStorage.getItem('key') || '',
   },
  reducers: {
    add(state, actions) {
      sessionStorage.setItem('key', actions.payload);
      state.key = actions.payload;
    },
    remove(state, actions) {
        sessionStorage.removeItem('key');
    },
  },
});


export const keyActions = keySlice.actions;

export default keySlice;
