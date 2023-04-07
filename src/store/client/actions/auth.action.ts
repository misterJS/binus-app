import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-hot-toast";
import { BASE_URL, HEADERS_AUTH } from "../../../utils";

export const handleLoginThunk = createAsyncThunk(
    'auth/handleLoginThunk',
    async (payload: any, thunkAPI) => {
        try {
            const params = JSON.stringify({
                "Username": payload.email,
                "Password": payload.password,
                "Captcha": payload.captcha
            });
            const response = await axios.post(`${BASE_URL}auth/login`, params, HEADERS_AUTH);

            if (response.data.resultCode === 200) {
                toast.success(response.data.errorMessage);
            } else if (response.data.resultCode === 500) {
                toast.error(response.data.errorMessage);
            }

            return { data: response.data };
        } catch (error: any) {
            toast.error(error.response?.data?.errorMessage || 'Terjadi kesalahan');
            return thunkAPI.rejectWithValue(error);
        }
    }
);


export const handleForgotThunk = createAsyncThunk(
    'auth/handleForgotThunk',
    async (payload: any, thunkAPI) => {
        try {
            const params = JSON.stringify({ Email: payload.email, Captcha: "x" });
            const response = await axios.post(`${BASE_URL}auth/forgotpassword`, params, HEADERS_AUTH);

            if (response.data.resultCode === 200) {
                toast.success(response.data.errorMessage);
            }

            return { data: response.data };
        } catch (error: any) {
            toast.error(error.response?.data?.errorMessage || 'Terjadi kesalahan');
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const handleRegistrationThunk = createAsyncThunk(
    'auth/handleRegistrationThunk',
    async (payload: any, thunkAPI) => {
        try {
            const params = JSON.stringify({
                Email: payload.email,
                FullName: payload.fullName,
                CompanyName: payload.companyName,
                PhoneNo: payload.phoneNumber,
                Username: payload.username,
                Password: payload.password,
                ConfirmPassword: payload.confirmPassword,
                Captcha: 'x'
            });
            const response = await axios.post(`${BASE_URL}auth/register`, params, HEADERS_AUTH);

            if (response.data.resultCode === 200) {
                toast.success(response.data.errorMessage);
            } else if (response.data.resultCode === 500) {
                toast.error(response.data.errorMessage);
            }

            return { data: response.data };
        } catch (error: any) {
            toast.error(error.response?.data?.errorMessage || 'Terjadi kesalahan');
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const handleChangePassword = createAsyncThunk(
    'auth/handleChangePassword',
    async (payload: any, thunkAPI) => {
        try {
            const email = JSON.parse(localStorage.getItem('userData') as any)?.email;
            const params = JSON.stringify({
                Email: email,
                OldPassword: payload.oldPassword,
                Password: payload.password,
                ConfirmPassword: payload.confirmPassword
            });
            const response = await axios.post(`${BASE_URL}auth/changepasswordsubmit`, params, HEADERS_AUTH);

            if (response.data.resultCode === 200) {
                toast.success('success change password');
            } else if (response.data.resultCode === 500) {
                toast.error(response.data.errorMessage);
            }

            return { data: response.data };
        } catch (error: any) {
            toast.error(error.response?.data?.errorMessage || 'Terjadi kesalahan');
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const handleLoginSsoThunk = createAsyncThunk('auth/handleLoginSsoThunk', async (payload) => {
    return {
        data: payload
    }
})

export const handleLogoutThunk = createAsyncThunk('auth/handleLogoutThunk', async () => {
    try {
        const response = await axios.post(`${BASE_URL}signout-callback-oidc`, HEADERS_AUTH);
        toast.success(response.data.errorMessage);
        return { data: response.data };
    } catch (error: any) {
        toast.error(error.response.data.errorMessage);
        return { error: error.response.data };
    }
});