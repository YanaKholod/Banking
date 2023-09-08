import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://banking-5ah7.onrender.com/api";

export const fetchAllCompanies = createAsyncThunk(
  "companies/all",
  async ({ page = 1, perPage = 10, sort } = {}, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `/companies/all?page=${page}&perPage=${perPage}&sort=${sort}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "An error occurred"
      );
    }
  }
);

export const deleteCompanyById = createAsyncThunk(
  "companies/delete",
  async (_id, { rejectWithValue }) => {
    try {
      await axios.delete(`/companies/delete/${_id}`);
      return _id;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "An error occurred"
      );
    }
  }
);

export const updateCompany = createAsyncThunk(
  "companies/change",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.patch(`/companies/change/${data.id}`, {
        ...data,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "An error occurred"
      );
    }
  }
);
export const addCompany = createAsyncThunk(
  "companies/addCompany",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post("/companies/", {
        ...data,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "An error occurred"
      );
    }
  }
);

export const fetchCompanyByIdentifier = createAsyncThunk(
  "companies/fetchByIdentifier",
  async (identifier, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/companies/identifier/${identifier}`);

      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "An error occurred"
      );
    }
  }
);

export const fetchCompanyById = createAsyncThunk(
  "companies/:id",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/companies/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "An error occurred"
      );
    }
  }
);

export default axios;
