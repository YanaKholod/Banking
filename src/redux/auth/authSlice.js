import { createSlice } from "@reduxjs/toolkit";
import {
  fetchAllUsers,
  fetchUserById,
  getCurrentUser,
  login,
  logout,
  registerUser,
  updateCurrentUserCard,
  updateTransaction,
} from "./actions";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    usersArray: [],
    userForDetails: null,
    error: null,
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
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload;
        state.isRefreshing = false;
      })
      .addCase(getCurrentUser.rejected, (state) => {
        state.isRefreshing = false;
      })
      .addCase(updateCurrentUserCard.pending, (state) => {
        state.isLoggedIn = true;
        state.isRefreshing = true;
      })
      .addCase(updateCurrentUserCard.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(updateCurrentUserCard.rejected, (state) => {
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(updateTransaction.pending, (state) => {
        state.isLoggedIn = true;
        state.isRefreshing = true;
      })
      .addCase(updateTransaction.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(updateTransaction.rejected, (state) => {
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(fetchAllUsers.pending, (state) => {
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(fetchAllUsers.fulfilled, (state, action) => {
        state.usersArray = action.payload.users;
        state.error = null;
        state.isRefreshing = false;
      })
      .addCase(fetchAllUsers.rejected, (state, action) => {
        state.error = action.payload;
        state.isRefreshing = false;
      })
      .addCase(fetchUserById.pending, (state) => {
        state.isLoggedIn = true;
        state.error = null;
        state.isRefreshing = false;
      })
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.userForDetails = action.payload;
        state.isRefreshing = false;
      })
      .addCase(fetchUserById.rejected, (state, action) => {
        state.isLoggedIn = false;
        state.error = action.payload;
        state.isRefreshing = false;
      });
  },
});

export const authReducer = authSlice.reducer;
