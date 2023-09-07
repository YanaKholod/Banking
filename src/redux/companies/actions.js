import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://banking-5ah7.onrender.com/api";

export const fetchAllCompanies = createAsyncThunk(
  "companies/all",
  async ({ page = 1, perPage = 10, sort } = {}) => {
    try {
      const response = await axios.get(
        `/companies/all?page=${page}&perPage=${perPage}&sort=${sort}`
      );
      return response.data;
    } catch (error) {
      console.log(error.message);
      throw error;
    }
  }
);

export const deleteCompanyById = createAsyncThunk(
  "companies/delete",
  async (_id) => {
    try {
      await axios.delete(`/companies/delete/${_id}`);
      return _id;
    } catch (error) {
      console.log(error.message);
      throw error;
    }
  }
);

export const updateCompany = createAsyncThunk(
  "companies/change",
  async (data) => {
    try {
      const response = await axios.patch(`/companies/change/${data.id}`, {
        ...data,
      });
      return response.data;
    } catch (error) {
      console.log(error.message);
      throw error;
    }
  }
);
export const addCompany = createAsyncThunk(
  "companies/addCompany",
  async (data) => {
    try {
      const response = await axios.post("/companies/", {
        ...data,
      });
      return response.data;
    } catch (error) {
      console.log(error.message);
      throw error;
    }
  }
);

export const fetchCompanyByIdentifier = createAsyncThunk(
  "companies/fetchByIdentifier",
  async (identifier) => {
    try {
      const response = await axios.get(`/companies/identifier/${identifier}`);

      return response.data;
    } catch (error) {
      console.log(error.message);
      throw error;
    }
  }
);

export const fetchCompanyById = createAsyncThunk(
  "companies/:id",
  async (id) => {
    try {
      const response = await axios.get(`/companies/${id}`);
      return response.data;
    } catch (error) {
      console.log(error.message);
      throw error;
    }
  }
);

export default axios;
