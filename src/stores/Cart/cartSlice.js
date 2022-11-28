import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  listItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const cloneData = [...state.listItems];

      const index = cloneData.findIndex(
        (item) => item.id === action.payload.id
      );

      if (index >= 0) {
        cloneData[index].amount += Number(action.payload.amount);
      } else {
        state.listItems = [...cloneData, action.payload];
      }
      localStorage.setItem("cart", JSON.stringify(state.listItems));
    },
    updateCart: (state, action) => {
      state.listItems = action.payload;
    },
    deleteItem: (state, action) => {
      const cloneData = [...state.listItems];
      const index = cloneData.findIndex((item) => item.id === action.payload);
      if (index >= 0) {
        cloneData.splice(index, 1);
      }
      state.listItems = cloneData;
      localStorage.setItem("cart", JSON.stringify(state.listItems));
    },
    UpdateAmount: (state, action) => {
      const cloneData = [...state.listItems];
      const index = cloneData.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index >= 0) {
        cloneData[index].amount += action.payload.amount;
      }
      state.listItems = cloneData;
    },
    ClearItems: (state, action) => {
      state.listItems = [];
      localStorage.setItem("cart", JSON.stringify(state.listItems));
    },
  },
});

export const {addToCart, updateCart, UpdateAmount, deleteItem, ClearItems} =
  cartSlice.actions;
export default cartSlice.reducer;
