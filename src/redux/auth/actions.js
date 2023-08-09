import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// axios.defaults.baseURL = "https://banking-5ah7.onrender.com/api";

const api = axios.create({
  baseURL: "https://banking-5ah7.onrender.com/api",
});

const token = {
  set(token) {
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    api.defaults.headers.common.Authorization = ``;
  },
};

export const register = createAsyncThunk(
  "auth/register",
  async (credentials) => {
    console.log("credentials", credentials);
    console.log("axios", axios);
    try {
      const { data } = await api.post("/auth/register", credentials);

      // token.set(data.token);
      return data;
    } catch (error) {
      console.log(error.message);
      throw error;
    }
  }
);
//credentials - имена полей в форме по типу name, password, email,
// они прокидіваются в диспатч как обьект с полями

export const login = createAsyncThunk("auth/login", async (credentials) => {
  try {
    const { data } = await axios.post("/auth/login", credentials);

    token.set(data.token);
    return data;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
});

export const logout = createAsyncThunk("auth/logout", async () => {
  try {
    await axios.post("/logout");

    token.unset();
  } catch (error) {
    console.log(error.message);
  }
});

export const getUser = createAsyncThunk("auth/current", async (_, thunkAPI) => {
  try {
    const response = await axios.get("/current");

    const { phone, fullName } = response.data;
    return { phone, fullName };
  } catch (error) {
    console.log(error.message);
    throw error;
  }
});

export default api;
