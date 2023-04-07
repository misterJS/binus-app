import { createSlice } from "@reduxjs/toolkit";
import { createUser, getActiveUser, getUserContribution, getUserDetail, getUserJobPosting, getUserPersonalInfo, updatePoint } from "../actions";

const initialState = {
  activeUser: [],
  userPersonalInfo: [],
  userJobPosting: [],
  userDetails: [],
  userContribution: [],
  status: "idle",
  error: null
};

const userManagementSlice = createSlice({
  name: "userManagement",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getActiveUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getActiveUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.activeUser = action.payload.data;
      })
      .addCase(getActiveUser.rejected, (state, action: any) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(getUserPersonalInfo.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getUserPersonalInfo.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.userPersonalInfo = action.payload.data;
      })
      .addCase(getUserPersonalInfo.rejected, (state, action: any) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(getUserJobPosting.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getUserJobPosting.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.userJobPosting = action.payload.data;
      })
      .addCase(getUserJobPosting.rejected, (state, action: any) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(getUserDetail.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getUserDetail.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.userDetails = action.payload.data;
      })
      .addCase(getUserDetail.rejected, (state, action: any) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(createUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.status = "succeeded";
      })
      .addCase(createUser.rejected, (state, action: any) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(getUserContribution.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getUserContribution.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.userContribution = action.payload.data;
      })
      .addCase(getUserContribution.rejected, (state, action: any) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(updatePoint.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updatePoint.fulfilled, (state, action) => {
        state.status = "succeeded";
      })
      .addCase(updatePoint.rejected, (state, action: any) => {
        state.status = "failed";
        state.error = action.error.message;
      })
    }
})

export default userManagementSlice.reducer;