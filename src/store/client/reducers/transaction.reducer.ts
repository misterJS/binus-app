import { createSlice } from "@reduxjs/toolkit";
import {
  getProjectAsClient,
  getProjectAsWorker,
  getDetailProjectAsClient,
  getDetailProjectAsWorker,
} from "../actions";

const initialState = {
  projectsAsClient: [],
  projectsAsWorker: [],
  detailProjectAsClient: null,
  detailProjectAsWorker: null,
  loading: false,
  error: null,
};

const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProjectAsClient.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProjectAsClient.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.projectsAsClient = action.payload.data;
      })
      .addCase(getProjectAsClient.rejected, (state, action: any) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getProjectAsWorker.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProjectAsWorker.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.projectsAsWorker = action.payload.data;
      })
      .addCase(getProjectAsWorker.rejected, (state, action: any) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getDetailProjectAsClient.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getDetailProjectAsClient.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.detailProjectAsClient = action.payload.data;
      })
      .addCase(getDetailProjectAsClient.rejected, (state, action: any) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getDetailProjectAsWorker.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getDetailProjectAsWorker.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.detailProjectAsWorker = action.payload.data;
      })
      .addCase(getDetailProjectAsWorker.rejected, (state, action: any) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default transactionsSlice.reducer;