import { createSlice } from '@reduxjs/toolkit';
import { createRanking, getRankingList, setActiveRanking, setNonActiveRanking, updateRanking } from '../actions';

const initialState = {
  rankingList: [],
  rankingCreate: {},
  rankingUpdate: {},
  loading: false,
  error: null
};

const rankManagementSlice = createSlice({
  name: 'RankManagement',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRankingList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getRankingList.fulfilled, (state, action) => {
        state.loading = false;
        state.rankingList = action.payload.data;
      })
      .addCase(getRankingList.rejected, (state, action: any) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(createRanking.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createRanking.fulfilled, (state, action) => {
        state.loading = false;
        // Add new ranking to the list
        state.rankingCreate = action.payload;
      })
      .addCase(createRanking.rejected, (state, action: any) => {
        state.loading = false;
        state.rankingCreate = action.payload;
        state.error = action.payload;
      })
      .addCase(updateRanking.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateRanking.fulfilled, (state, action) => {
        state.loading = false;
        state.rankingUpdate = action.payload;
      })
      .addCase(updateRanking.rejected, (state, action: any) => {
        state.loading = false;
        state.rankingUpdate = action.payload;
        state.error = action.payload;
      })
      .addCase(setNonActiveRanking.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(setNonActiveRanking.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(setNonActiveRanking.rejected, (state, action: any) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(setActiveRanking.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(setActiveRanking.fulfilled, (state) => {
        state.loading = false;
        // Update the ranking in the list]
      })
      .addCase(setActiveRanking.rejected, (state, action: any) => {
        state.loading = false;
        state.error = action.payload;
      })
  }
});

export default rankManagementSlice.reducer;
