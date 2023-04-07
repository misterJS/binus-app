import { createSlice } from '@reduxjs/toolkit';
import { getProjectList, GetDetailProject, CreateEvidence, ApplyProject } from '../actions';

interface ProjectState {
  projectList: any[];
  projectDetail: any;
  isLoading: boolean;
  error: string | null;
}

const initialState: ProjectState = {
  projectList: [],
  projectDetail: {},
  isLoading: false,
  error: null,
};

const gardenSlice = createSlice({
  name: 'garden',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // getProjectList actions
      .addCase(getProjectList.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getProjectList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.projectList = action.payload.data;
      })
      .addCase(getProjectList.rejected, (state, action: any) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // GetDetailProject actions
      .addCase(GetDetailProject.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(GetDetailProject.fulfilled, (state, action) => {
        state.isLoading = false;
        state.projectDetail = action.payload.data;
      })
      .addCase(GetDetailProject.rejected, (state, action: any) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // CreateEvidence actions
      .addCase(CreateEvidence.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(CreateEvidence.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(CreateEvidence.rejected, (state, action: any) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // ApplyProject actions
      .addCase(ApplyProject.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(ApplyProject.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(ApplyProject.rejected, (state, action: any) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default gardenSlice.reducer;