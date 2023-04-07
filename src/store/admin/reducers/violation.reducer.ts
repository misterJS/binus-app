import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createResolveReport, getDetailViolation, getReport, getViolationAsSender, getViolationAsTarget } from "../actions";

interface ViolationManagementState {
  report: any[];
  detailViolation: any;
  violationAsTarget: any[];
  violationAsSender: any[];
  createResolveReportStatus: "idle" | "loading" | "succeeded" | "failed";
}

const initialState: ViolationManagementState = {
  report: [],
  detailViolation: null,
  violationAsTarget: [],
  violationAsSender: [],
  createResolveReportStatus: "idle",
};

const violationManagementSlice = createSlice({
  name: "violationManagement",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // getReport
      .addCase(getReport.pending, (state) => {})
      .addCase(getReport.fulfilled, (state, action) => {
        state.report = action.payload.data;
      })
      .addCase(getReport.rejected, (state) => {})
      // getDetailViolation
      .addCase(getDetailViolation.pending, (state) => {})
      .addCase(getDetailViolation.fulfilled, (state, action) => {
        state.detailViolation = action.payload.data;
      })
      .addCase(getDetailViolation.rejected, (state) => {})
      // getViolationAsTarget
      .addCase(getViolationAsTarget.pending, (state) => {})
      .addCase(getViolationAsTarget.fulfilled, (state, action) => {
        state.violationAsTarget = action.payload.data;
      })
      .addCase(getViolationAsTarget.rejected, (state) => {})
      // getViolationAsSender
      .addCase(getViolationAsSender.pending, (state) => {})
      .addCase(getViolationAsSender.fulfilled, (state, action) => {
        state.violationAsSender = action.payload.data;
      })
      .addCase(getViolationAsSender.rejected, (state) => {})
      // createResolveReport
      .addCase(createResolveReport.pending, (state) => {
        state.createResolveReportStatus = "loading";
      })
      .addCase(createResolveReport.fulfilled, (state, action) => {
        state.createResolveReportStatus = "succeeded";
        // update the report with the resolved report
        const resolvedReport = action.payload.data;
        const index = state.report.findIndex(
          (report) => report.id === resolvedReport.id
        );
        if (index >= 0) {
          state.report[index] = resolvedReport;
        }
      })
      .addCase(createResolveReport.rejected, (state) => {
        state.createResolveReportStatus = "failed";
      });
  },
});

export default violationManagementSlice.reducer;
