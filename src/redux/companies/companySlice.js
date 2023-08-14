import { createSlice } from "@reduxjs/toolkit";
import { getCurrentUser, login, logout, registerUser } from "./actions";

const authSlice = createSlice({
  name: "companies",
  initialState: {
    items: { companyName: null, iban: null, countryCode: null, edpnou: null },
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    //  builder
  },
});

export const authReducer = authSlice.reducer;
