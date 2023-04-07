import { createSlice } from "@reduxjs/toolkit";
import { getActiveTransaction, getApproveTransaction, getDetailTransaction, getRejectTransaction } from "../actions";

const initialState = {
    activeTransactions: [],
    approveTransaction: {},
    rejectTransaction: {},
    detailTransaction: {},
    resultCode: null,
    loading: false,
    error: null
  };
  
  export const adminTransactionSlice = createSlice({
    name: 'adminTransaction',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        // getActiveTransaction
        .addCase(getActiveTransaction.pending, (state) => {
          state.loading = true;
          state.error = null;
          state.resultCode = null;
        })
        .addCase(getActiveTransaction.fulfilled, (state, action) => {
          state.loading = false;
          state.activeTransactions = action.payload.data.resultData;
          state.resultCode = action.payload.data.resultCode;
        })
        .addCase(getActiveTransaction.rejected, (state, action: any) => {
          state.loading = false;
          state.error = action.payload;
          state.resultCode = action.payload.data.resultCode;
        })
        // getApproveTransaction
        .addCase(getApproveTransaction.pending, (state) => {
          state.loading = true;
          state.error = null;
          state.resultCode = null;
        })
        .addCase(getApproveTransaction.fulfilled, (state, action) => {
          state.loading = false;
          state.approveTransaction = action.payload.data.resultData;
          state.resultCode = action.payload.data.resultCode;
        })
        .addCase(getApproveTransaction.rejected, (state, action: any) => {
          state.loading = false;
          state.error = action.payload;
          state.resultCode = action.payload.data.resultCode;
        })
        // getRejectTransaction
        .addCase(getRejectTransaction.pending, (state) => {
          state.loading = true;
          state.error = null;
          state.resultCode = null;
        })
        .addCase(getRejectTransaction.fulfilled, (state, action) => {
          state.loading = false;
          state.rejectTransaction = action.payload.data.resultData;
          state.resultCode = action.payload.data.resultCode;
        })
        .addCase(getRejectTransaction.rejected, (state, action: any) => {
          state.loading = false;
          state.error = action.payload;
          state.resultCode = action.payload.data.resultCode;
        })
        // getDetailTransaction
        .addCase(getDetailTransaction.pending, (state) => {
          state.loading = true;
          state.error = null;
          state.resultCode = null;
        })
        .addCase(getDetailTransaction.fulfilled, (state, action) => {
          state.loading = false;
          state.detailTransaction = action.payload.data.resultData;
          state.resultCode = action.payload.data.resultCode;
        })
        .addCase(getDetailTransaction.rejected, (state, action: any) => {
          state.loading = false;
          state.error = action.payload;
          state.resultCode = action.payload.data.resultCode;
        })
    }
  });
  
  export default adminTransactionSlice.reducer;