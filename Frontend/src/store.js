import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "./stores/Cart/cartSlice";
import authReducer from "./stores/Auth/authSlice";
import orderReducer from "./stores/Orders/ordersSlice";

export const store = configureStore({
  reducer: {
    cartReducer,
    authReducer,
    orderReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({serializableCheck: false}),
});
