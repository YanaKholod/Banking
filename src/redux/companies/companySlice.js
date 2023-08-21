import { createSlice } from "@reduxjs/toolkit";
import {
  fetchAllCompanies,
  deleteCompanyById,
  updateCompany,
  addCompany,
  fetchCompanyByIdentifier,
} from "./actions";

const companySlice = createSlice({
  name: "companies",
  initialState: {
    companies: [],
    error: null,
    isLoggedIn: false,
    dropdownCompanies: [],
    companyForTransaction: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCompanies.pending, (state, action) => {
        state.isLoggedIn = true;
      })
      .addCase(fetchAllCompanies.fulfilled, (state, action) => {
        state.companies = action.payload;
        state.error = null;
      })
      .addCase(fetchAllCompanies.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(deleteCompanyById.pending, (state, action) => {
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(deleteCompanyById.fulfilled, (state, action) => {
        state.error = null;
      })
      .addCase(deleteCompanyById.rejected, (state, action) => {
        state.error = "Error on backend side";
      })
      .addCase(updateCompany.pending, (state, action) => {
        state.isLoggedIn = true;
      })
      .addCase(updateCompany.fulfilled, (state, action) => {
        state.error = null;
      })
      .addCase(updateCompany.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(addCompany.pending, (state, action) => {
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(addCompany.fulfilled, (state, action) => {
        state.error = null;
      })
      .addCase(addCompany.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(fetchCompanyByIdentifier.pending, (state) => {
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(fetchCompanyByIdentifier.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.dropdownCompanies = action.payload;
      })
      .addCase(fetchCompanyByIdentifier.rejected, (state, action) => {
        state.isLoggedIn = false;
        state.error = action.payload;
      });
  },
});

export const companyReducer = companySlice.reducer;
