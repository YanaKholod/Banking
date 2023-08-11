import { createSlice } from "@reduxjs/toolkit";
import { getUser, login, logout, registerUser } from "./actions";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: { password: null, phone: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
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
        state.user = { password: null, phone: null };
        state.token = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload;
        state.user = action.payload.user;
        // state.isLoggedIn = true;
        // state.isRefreshing = false;
      })
      .addCase(getUser.rejected, (state) => {
        state.isRefreshing = false;
      });
    // .addCase(getUser.fulfilled, (state, action) => {
    //   state.isLoggedIn = true;
    //   state.user = action.payload.user;
    //   // state.token = action.payload.token;
    //   // state.error = null;
    //   state.isRefreshing = false;
    // })
    // .addCase(getUser.rejected, (state, action) => {
    //   state.isRefreshing = false;
    //   // state.user = { password: null, phone: null };
    //   // state.token = null;
    //   // state.error = action.payload;
    // });
  },
});

export const authReducer = authSlice.reducer;
