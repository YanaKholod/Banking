import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "smth";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = ``;
  },
};
export const register = createAsyncThunk(
  "auth/register",
  async (credentials) => {
    try {
      const { data } = await axios.post("/users/signup", credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      console.log(error.message);
    }
  }
);
//credentials - имена полей в форме по типу name, password, email,
// они прокидіваются в диспатч как обьект с полями

export const logIn = createAsyncThunk("auth/logIn", async (credentials) => {
  try {
    const { data } = await axios.post("/users/logIn", credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log(error.message);
  }
});

export const logOut = createAsyncThunk("auth/logOut", async () => {
  try {
    await axios.post("/users/logOut");
    token.unset();
  } catch (error) {
    console.log(error.message);
  }
});
export const getUser = createAsyncThunk("auth/getUser", async () => {});
