import { createSlice } from "@reduxjs/toolkit";
import { getMessageList, getMessage, postMessage } from "../actions";

interface ChatState {
  messageList: any[];
  message: any[];
  postMessageResult: any;
  isLoading: boolean;
  error: any;
}

const initialState: ChatState = {
  messageList: [],
  message: [],
  postMessageResult: {},
  isLoading: false,
  error: null,
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMessageList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMessageList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.messageList = action.payload.data;
      })
      .addCase(getMessageList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(getMessage.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMessage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.message = action.payload.data;
      })
      .addCase(getMessage.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(postMessage.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postMessage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.postMessageResult = action.payload.data;
      })
      .addCase(postMessage.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default chatSlice.reducer;

