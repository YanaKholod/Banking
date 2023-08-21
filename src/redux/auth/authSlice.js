import { createSlice } from "@reduxjs/toolkit";
import { getCurrentUser, login, logout, registerUser } from "./actions";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: { password: null, phone: null, transactions: [] },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  reducers: {
    addTransaction: (state, action) => {
      state.user.transactions.push(action.payload);
    },
  },
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
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload;
        state.isRefreshing = false;
      })
      .addCase(getCurrentUser.rejected, (state) => {
        state.isRefreshing = false;
      });
  },
});

export const { addTransaction } = authSlice.actions;

export const authReducer = authSlice.reducer;
