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

export const fetchAllUsers = createAsyncThunk(
  "users/all",
  async ({ page = 1, perPage = 10 } = {}) => {
    try {
      const response = await axios.get(
        `/auth/all?page=${page}&perPage=${perPage}`
      );
      return response.data;
    } catch (error) {
      console.log(error.message);
      throw error;
    }
  }
);

export const updateCurrentUserCard = createAsyncThunk(
  "auth/updateCurrentUserCard",
  async ({ card, user }) => {
    try {
      const response = await axios.patch("/auth/change", {
        id: user.id,
        card,
      });
      return response.data;
    } catch (error) {
      console.log(error.message);
      throw error;
    }
  }
);

export const updateTransaction = createAsyncThunk(
  "transactions/addTransaction",
  async ({ user, selectedCard, transactionInfo, company }) => {
    try {
      const response = await axios.patch("/auth/transaction", {
        userId: user.id,
        cardId: selectedCard.cardId,
        cardType: selectedCard.cardType,
        amount: transactionInfo.sum,
        purpose: transactionInfo.purpose,
        companyId: company.id,
      });
      return response.data;
    } catch (error) {
      console.log(error.message);
      throw error;
    }
  }
);

export const makePayment = createAsyncThunk(
  "payments/makePayment",
  async ({
    senderUserId,
    recipientCardNumber,
    amount,
    purpose,
    senderCardType,
  }) => {
    try {
      const response = await axios.patch("/auth/makePayment", {
        senderUserId: senderUserId,
        recipientCardNumber: recipientCardNumber,
        amount: amount,
        purpose: purpose,
        senderCardType: senderCardType,
      });
      return response.data;
    } catch (error) {
      console.log(error.message);
      throw error;
    }
  }
);

export const fetchUserById = createAsyncThunk("auth/:id", async (id) => {
  try {
    const response = await axios.get(`/auth/userInfo/${id}`);
    return response.data;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
});

export default axios;
