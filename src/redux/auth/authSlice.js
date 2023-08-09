import { createSlice } from "@reduxjs/toolkit";
import { getUser, login, logout, registerUser } from "./actions";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: { fullName: null, phone: null },
    token: null,
    isLoggedIn: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = { fullName: null, phone: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.isLoggedIn = action.payload.isLoggedIn;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.error = null;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.isLoggedIn = false;
        state.user = { fullName: null, phone: null };
        state.token = null;
        state.error = action.payload;
      });
  },
});

export const authReducer = authSlice.reducer;
