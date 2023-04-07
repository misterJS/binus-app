import { createSlice } from "@reduxjs/toolkit";
import { createBanner, deleteBanner, getBannerList, unDeleteBanner, updateBanner } from "../actions";

interface BannerManagementState {
    loading: boolean;
    data: any;
    error: any;
}

const initialState: BannerManagementState = {
    loading: false,
    data: null,
    error: null,
};

const bannerManagementSlice = createSlice({
    name: "BannerManagement",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // get banner list
        builder.addCase(getBannerList.pending, (state) => {
            state.loading = true;
            state.data = null;
            state.error = null;
        });
        builder.addCase(getBannerList.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload.data;
            state.error = null;
        });
        builder.addCase(getBannerList.rejected, (state, action) => {
            state.loading = false;
            state.data = null;
            state.error = action.error;
        });

        // create banner
        builder.addCase(createBanner.pending, (state) => {
            state.loading = true;
            state.data = null;
            state.error = null;
        });
        builder.addCase(createBanner.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload.data;
            state.error = null;
        });
        builder.addCase(createBanner.rejected, (state, action) => {
            state.loading = false;
            state.data = null;
            state.error = action.error;
        });

        // update banner
        builder.addCase(updateBanner.pending, (state) => {
            state.loading = true;
            state.data = null;
            state.error = null;
        });
        builder.addCase(updateBanner.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload.data;
            state.error = null;
        });
        builder.addCase(updateBanner.rejected, (state, action) => {
            state.loading = false;
            state.data = null;
            state.error = action.error;
        });

        // delete banner
        builder.addCase(deleteBanner.pending, (state) => {
            state.loading = true;
            state.data = null;
            state.error = null;
        });
        builder.addCase(deleteBanner.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload.data;
            state.error = null;
        });
        builder.addCase(deleteBanner.rejected, (state, action) => {
            state.loading = false;
            state.data = null;
            state.error = action.error;
        });

        // undelete banner
        builder.addCase(unDeleteBanner.pending, (state) => {
            state.loading = true;
            state.data = null;
            state.error = null;
        });
        builder.addCase(unDeleteBanner.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload.data;
            state.error = null;
        });
        builder.addCase(unDeleteBanner.rejected, (state, action) => {
            state.loading = false;
            state.data = null;
            state.error = action.error;
        });
    },
});

export default bannerManagementSlice.reducer;