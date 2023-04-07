import { createSlice } from '@reduxjs/toolkit';
import { getProfiles, getContributionJourney, getListJobPost, getListMission, editProfileDone, editProfile } from '../actions';

interface ProfileState {
  profiles: any;
  contributionJourney: any;
  listJobPost: any;
  listMission: any;
  editProfile: any;
  isLoading: boolean;
  error: any;
}

const initialState: ProfileState = {
  profiles: null,
  contributionJourney: null,
  listJobPost: null,
  listMission: null,
  isLoading: false,
  error: null,
  editProfile: null,
}

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getProfiles.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getProfiles.fulfilled, (state, action) => {
        state.isLoading = false;
        state.profiles = action.payload.data;
      })
      .addCase(getProfiles.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      })
      .addCase(getContributionJourney.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getContributionJourney.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contributionJourney = action.payload.data;
      })
      .addCase(getContributionJourney.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      })
      .addCase(getListJobPost.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getListJobPost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.listJobPost = action.payload.data;
      })
      .addCase(getListJobPost.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      })
      .addCase(getListMission.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getListMission.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.listMission = action.payload.data;
      })
      .addCase(getListMission.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(editProfile.fulfilled, (state, action) => {
        state.editProfile = action.payload.data
        state.isLoading = false
      })
      .addCase(editProfile.rejected, (state, action) => {
        state.editProfile = null
        state.isLoading = false
      })
      .addCase(editProfile.pending, (state) => {
        state.editProfile = null
        state.isLoading = true
      })
      .addCase(editProfileDone.fulfilled, (state) => {
        state.editProfile = null
        state.isLoading = false
      });
  },
});

export default profileSlice.reducer;
