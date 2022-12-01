import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  orders: [],
  loading: false,
  error: null,
};

export const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    isUpdateOrder: (state, action) => {
      state.loading = action.payload;
    },
    isUpdateOrderSuccess: (state, action) => {
      state.loading = false;
      state.orders = action.payload;
    },
    isUpdateOrderFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {isUpdateOrder, isUpdateOrderSuccess, isUpdateOrderFailed} =
  ordersSlice.actions;
export default ordersSlice.reducer;
