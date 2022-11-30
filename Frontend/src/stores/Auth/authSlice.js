import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  user: {},
  loading: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateUser: (state, action) => {
      state.user = action.payload;
    },
    isLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const {updateUser, isLoading} = authSlice.actions;
export default authSlice.reducer;
