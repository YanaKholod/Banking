import { createSlice } from "@reduxjs/toolkit";
import { getUser, logIn, logOut, register } from "./actions";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logOut.fulfilled, (state, action) => {
        state.user = { name: null, email: null };
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
        state.user = { name: null, email: null };
        state.token = null;
        state.error = action.payload;
      });
  },
});

export const authReducer = authSlice.reducer;
