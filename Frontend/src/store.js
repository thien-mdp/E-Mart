import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "./stores/Cart/cartSlice";
import authReducer from "./stores/Auth/authSlice";

export const store = configureStore({
  reducer: {
    cartReducer,
    authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({serializableCheck: false}),
});
