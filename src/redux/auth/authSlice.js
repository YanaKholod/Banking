import { createSlice } from "@reduxjs/toolkit";
import {
  addDeposit,
  fetchAllUsers,
  fetchUserById,
  getCurrentUser,
  login,
  logout,
  makePayment,
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
    isLoading: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = false;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoggedIn = false;
        state.error = action.payload;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoggedIn = false;
        state.error = action.payload;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = { password: null, phone: null };
        state.token = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
      })
      .addCase(logout.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(getCurrentUser.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload;
        state.isRefreshing = false;
        state.isLoading = false;
      })
      .addCase(getCurrentUser.rejected, (state, action) => {
        state.isRefreshing = false;
        state.isLoggedIn = true;
        state.error = action.payload;
      })
      .addCase(updateCurrentUserCard.pending, (state) => {
        state.isLoggedIn = true;
        state.isRefreshing = true;
      })
      .addCase(updateCurrentUserCard.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(updateCurrentUserCard.rejected, (state, action) => {
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.error = action.payload;
      })
      .addCase(updateTransaction.pending, (state) => {
        state.isLoggedIn = true;
        state.isRefreshing = true;
      })
      .addCase(updateTransaction.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(updateTransaction.rejected, (state, action) => {
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.error = action.payload;
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
        state.isLoggedIn = true;
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
        state.isLoggedIn = true;
        state.error = action.payload;
        state.isRefreshing = false;
      })
      .addCase(makePayment.pending, (state) => {
        state.isLoggedIn = true;
        state.isRefreshing = true;
      })
      .addCase(makePayment.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(makePayment.rejected, (state, action) => {
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.error = action.payload;
      })
      .addCase(addDeposit.pending, (state) => {
        state.isLoggedIn = true;
        state.isRefreshing = true;
      })
      .addCase(addDeposit.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(addDeposit.rejected, (state, action) => {
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.error = action.payload;
      });
  },
});

export const authReducer = authSlice.reducer;
