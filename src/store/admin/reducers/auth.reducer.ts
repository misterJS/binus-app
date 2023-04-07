import { createSlice } from "@reduxjs/toolkit"
import { handleChangePassword, handleForgotThunk, handleLoginSsoThunk, handleLoginThunk, handleLogoutThunk, handleRegistrationThunk } from "../actions";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        userData: '',
        loginState: '',
        logoutState: '',
        loginSso: false,
        loading: false
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(handleLoginThunk.fulfilled, (state, action) => {
                state.loginState = action.payload.data
                state.logoutState = ''
                state.loginSso = false
                localStorage.setItem('token', action.payload.data.returnValue.token)
                localStorage.setItem('userData', JSON.stringify(action.payload.data.returnValue))
                state.loading = false
            })
            .addCase(handleLoginThunk.rejected, (state, action) => {
                state.loginState = action.error.message || 'no error'
                localStorage.removeItem('token')
                localStorage.removeItem('userData')
                state.loading = false
            })
            .addCase(handleLoginThunk.pending, (state) => {
                state.loading = true
            })
            .addCase(handleLogoutThunk.fulfilled, (state, action) => {
                state.logoutState = action.payload.data
                state.loginState = ''
                localStorage.removeItem('token')
                localStorage.removeItem('userData')
                state.loginSso = false
                state.loading = false
            })
            .addCase(handleLogoutThunk.rejected, (state, action) => {
                state.logoutState = action.error.message || 'no error'
                state.loading = false
            })
            .addCase(handleLogoutThunk.pending, (state) => {
                state.loading = true
            })
            .addCase(handleForgotThunk.fulfilled, (state, action) => {
                state.loginState = action.payload.data
                state.loginSso = false
                state.loading = false
            })
            .addCase(handleForgotThunk.rejected, (state, action) => {
                state.loginState = action.error.message || 'no data'
                state.loading = false
            })
            .addCase(handleForgotThunk.pending, (state) => {
                state.loading = true
            })
            .addCase(handleRegistrationThunk.fulfilled, (state, action) => {
                state.loginState = action.payload.data
                state.loginSso = false
                localStorage.setItem('token', action.payload.data.returnValue.token)
                localStorage.setItem('userData', JSON.stringify(action.payload.data.returnValue))
                state.loading = false
            })
            .addCase(handleRegistrationThunk.rejected, (state, action) => {
                state.loginState = action.error.message || 'no error'
                localStorage.removeItem('token')
                localStorage.removeItem('userData')
                state.loading = false
            })
            .addCase(handleRegistrationThunk.pending, (state) => {
                state.loading = true
            })
            .addCase(handleChangePassword.fulfilled, (state, action) => {
                state.loginState = action.payload.data
                state.loginSso = false
                state.loading = false
            })
            .addCase(handleChangePassword.rejected, (state, action) => {
                state.loginState = action.error.message || 'no error'
                state.loading = false
            })
            .addCase(handleChangePassword.pending, (state) => {
                state.loading = true
            })
            .addCase(handleLoginSsoThunk.fulfilled, (state, action: any) => {
                state.loginState = action.payload.data
                state.loginSso = true
                localStorage.setItem('token', action.payload.data.access_token)
                localStorage.setItem('userData', action.payload.data.client_info)
                state.loading = false
            })
            .addCase(handleLoginSsoThunk.rejected, (state, action) => {
                state.loginState = action.error.message || 'no error'
                localStorage.removeItem('token')
                localStorage.removeItem('userData')
                state.loading = false
            })
            .addCase(handleLoginSsoThunk.pending, (state) => {
                state.loading = true
            });
    },
});

export default authSlice.reducer