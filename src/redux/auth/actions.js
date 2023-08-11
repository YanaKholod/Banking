import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://banking-5ah7.onrender.com/api";

const tokenHeaders = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const registerUser = createAsyncThunk(
  "auth/register",
  async (credentials) => {
    try {
      const { data } = await axios.post("/auth/register", credentials);
      tokenHeaders.set(data.token);
      return data;
    } catch (error) {
      console.log(error.message);
      throw error;
    }
  }
);
//credentials - имена полей в форме по типу name, password, email,
// они прокидіваются в диспатч как обьект с полями

export const login = createAsyncThunk("auth/login", async (user) => {
  try {
    const { data } = await axios.post("/auth/login", user);

    tokenHeaders.set(data.token);

    return data;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
});

export const logout = createAsyncThunk("auth/logout", async (user) => {
  try {
    await axios.post("/auth/logout", user);

    tokenHeaders.unset();
  } catch (error) {
    console.log(error.message);
    throw error;
  }
});

export const getCurrentUser = createAsyncThunk(
  "auth/current",
  async (_, { getState }) => {
    const { token } = getState().auth;
    token && tokenHeaders.set(token);
    try {
      const response = await axios.get("/auth/current");
      return response.data;
    } catch (error) {
      console.log(error.message);
      throw error;
    }
  }
);
export default axios;
