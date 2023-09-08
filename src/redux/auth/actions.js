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
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/auth/register", credentials);
      tokenHeaders.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "An error occurred"
      );
    }
  }
);
export const login = createAsyncThunk(
  "auth/login",
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/auth/login", user);

      tokenHeaders.set(data.token);

      return data;
    } catch (error) {
      return rejectWithValue(
        (await error.response.data.message) || "An error occurred"
      );
    }
  }
);

export const logout = createAsyncThunk(
  "auth/logout",
  async (user, { rejectWithValue }) => {
    try {
      await axios.post("/auth/logout", user);

      tokenHeaders.unset();
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "An error occurred"
      );
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  "auth/current",
  async (_, { getState, rejectWithValue }) => {
    const { token } = getState().auth;
    token && tokenHeaders.set(token);
    try {
      const response = await axios.get("/auth/current");
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "An error occurred"
      );
    }
  }
);

export const fetchAllUsers = createAsyncThunk(
  "users/all",
  async ({ page = 1, perPage = 10 } = {}, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `/auth/all?page=${page}&perPage=${perPage}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "An error occurred"
      );
    }
  }
);

export const updateCurrentUserCard = createAsyncThunk(
  "auth/updateCurrentUserCard",
  async ({ card, user }, { rejectWithValue }) => {
    try {
      const response = await axios.patch("/auth/change", {
        id: user.id,
        card,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "An error occurred"
      );
    }
  }
);
export const addDeposit = createAsyncThunk(
  "auth/addDeposit",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.patch("/auth/addDeposit", data);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "An error occurred"
      );
    }
  }
);

export const updateTransaction = createAsyncThunk(
  "transactions/addTransaction",
  async (
    { user, selectedCard, transactionInfo, company },
    { rejectWithValue }
  ) => {
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
      return rejectWithValue(
        error.response?.data?.message || "An error occurred"
      );
    }
  }
);

export const makePayment = createAsyncThunk(
  "payments/makePayment",
  async (
    { senderUserId, recipientCardNumber, amount, purpose, senderCardType },
    { rejectWithValue }
  ) => {
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
      return rejectWithValue(
        error.response?.data?.message || "An error occurred"
      );
    }
  }
);

export const fetchUserById = createAsyncThunk(
  "auth/:id",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/auth/userInfo/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "An error occurred"
      );
    }
  }
);

export default axios;
