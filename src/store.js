import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "./stores/Cart/cartSlice";

export const store = configureStore({
  reducer: {
    cartReducer,
  },
});
