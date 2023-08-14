import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://banking-5ah7.onrender.com/api";

export const fetchAllCompanies = createAsyncThunk("companies/all", async () => {
  try {
    const response = await axios.get("/companies/all");
    return response.data;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
});

export default axios;
