import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://banking-5ah7.onrender.com/api";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = ``;
  },
};

export const registerUser = createAsyncThunk(
  "auth/register",
  async (credentials) => {
    try {
      const { data } = await axios.post("/auth/register", credentials);
      token.set(data.token);
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

export const logout = createAsyncThunk("auth/logout", async (user) => {
  try {
    await axios.post("/auth/logout", user);

    token.unset();
  } catch (error) {
    console.log(error.message);
  }
});

export const getUser = createAsyncThunk("auth/current", async (_, thunkAPI) => {
  console.log("action");
  try {
    console.log("try");
    const response = await axios.get("/auth/current");

    const { phone, fullName } = response.data;
    return { phone, fullName };
  } catch (error) {
    console.log(error.message);
    throw error;
  }
});

export default axios;
