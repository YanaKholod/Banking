import { createSlice } from "@reduxjs/toolkit";

const infoSlice = createSlice({
  name: "info",
  initialState: { bills: [], error: null },
});
