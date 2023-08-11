import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://banking-5ah7.onrender.com/api";

const tokenHeader = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = ``;
  },
};
const token = {
  set(token) {
    localStorage.setItem("token", token);
  },
  get() {
    return localStorage.getItem("token");
  },
  unset() {
    localStorage.removeItem("token");
  },
};

export const registerUser = createAsyncThunk(
  "auth/register",
  async (credentials) => {
    try {
      const { data } = await axios.post("/auth/register", credentials);
      tokenHeader.set(data.token);
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

    tokenHeader.set(data.token);
    return data;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
});

export const logout = createAsyncThunk("auth/logout", async (user) => {
  try {
    await axios.post("/auth/logout", user);

    tokenHeader.unset();
    console.log(user, "token");
  } catch (error) {
    console.log(error.message);
    throw error;
  }
});

export const getUser = createAsyncThunk(
  "auth/getUser",
  async (_, { getState }) => {
    const { token } = getState().auth.token;

    try {
      if (token) {
        const response = await axios.get("/auth/current");
        return response.data;
      } else {
        throw new Error("No token available");
      }
    } catch (error) {
      console.log(error.message);
      throw error;
    }
  }
);
export default axios;
