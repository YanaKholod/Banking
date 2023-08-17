import { createSlice } from "@reduxjs/toolkit";
import { fetchAllCompanies, deleteCompanyById, updateCompany } from "./actions";

const companySlice = createSlice({
  name: "companies",
  initialState: {
    companies: [],
    error: null,
    isLoggedIn: false,
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
        state.companies = state.companies.filter(
          (company) => company._id !== action.payload
        );
        state.error = null;
      })
      .addCase(deleteCompanyById.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(updateCompany.pending, (state, action) => {
        state.isLoggedIn = true;
      })
      .addCase(updateCompany.fulfilled, (state, action) => {
        console.log(action.payload, "actpay");
        const updatedCompanyIndex = state.companies.findIndex(
          (company) => company._id === action.payload._id
        );
        if (updatedCompanyIndex !== -1) {
          state.companies[updatedCompanyIndex] = action.payload;
        }
        state.error = null;
      })
      .addCase(updateCompany.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const companyReducer = companySlice.reducer;
