import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { 
    items: [],
    totalItemsCount:123
   },
  reducers: {
    add(state, actions) {
      const newItem = actions.payload;
      const isExistingItem = state.items.find(item=>item.itemId === newItem.id)
      if(!isExistingItem){
        state.items.push({
          itemId:newItem.id,
          name:newItem.title,
          price:newItem.price,
          quantity:1,
          totalPrice:newItem.price
        })
        state.totalItemsCount++;
      }
      else{
        const index = state.items.findIndex(i=>i.itemId === newItem.id);
        state.items[index].quantity++;
        state.items[index].totalPrice += newItem.price;
        state.totalItemsCount++;
      }
    },
    remove(state, actions) {
        let index = state.items.findIndex(i=>i.item.title === actions.payload.title);
        if(index > -1){
            state.items[index].count--;
            if(state.items[index].count === 0 || state.items[index].count < 0)
            state.items.splice(index,1);
        }
    },
  },
});


export const cartActions = cartSlice.actions;

export default cartSlice;
