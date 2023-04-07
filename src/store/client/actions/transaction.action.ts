import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-hot-toast";
import { BASE_URL } from "../../../utils";

const HEADERS = {
    'content-type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('token')}`,
};

export const getProjectAsClient = createAsyncThunk('transaction/getProjectAsClient', async (payload: any) => {
    try {
        const params = {
            Status: payload.status,
            MinPoint: payload.minPoint,
            MaxPoint: payload.maxPoint,
            SortBy: payload.sortBy,
            UserIn: JSON.parse(localStorage.getItem('userData') as any)?.email,
        };

        const response = await axios.post(`${BASE_URL}Transaction/GetProjectAsClient?size=10&page=1`, JSON.stringify(params), { headers: HEADERS });

        toast.success(response.data.errorMessage);
        return { data: response.data };
    } catch (error: any) {
        toast.error(error.response.data.errorMessage);
        throw error;
    }
});


export const getProjectAsWorker = createAsyncThunk('transaction/getProjectAsWorker', async (payload: any) => {
    try {
        const params = JSON.stringify({
            "UserIn": JSON.parse(localStorage.getItem('userData') as any)?.email,
        });
        const response = await axios.post(`${BASE_URL}Transaction/GetProjectAsWorker?size=${payload.perPage}&page=${payload.page}`, params, { headers: HEADERS });
        if (response.data.resultCode === 200) {
            toast.success(response.data.errorMessage);
        } else if (response.data.resultCode === 500) {
            toast.error(response.data.errorMessage);
        }
        return { data: response.data };
    } catch (error: any) {
        toast.error(error.response.data.errorMessage);
        return error;
    }
});

export const getDetailProjectAsWorker = createAsyncThunk('transaction/getDetailProjectAsWorker', async (id: number) => {
    try {
        const response = await axios.get(`${BASE_URL}Transaction/GetDetailProjectAsWorker?id=${id}`, { headers: HEADERS });
        toast[response.data.resultCode === 200 ? 'success' : 'error'](response.data.errorMessage);
        return { data: response.data };
    } catch (error: any) {
        toast.error(error.response.data.errorMessage);
        return error;
    }
});

export const getDetailProjectAsClient = createAsyncThunk('transaction/getDetailProjectAsClient', async (id: number) => {
    try {
        const response = await axios.get(`${BASE_URL}Transaction/GetDetailProjectAsClient?id=${id}`, { headers: HEADERS });
        toast[response.data.resultCode === 200 ? 'success' : 'error'](response.data.errorMessage);
        return { data: response.data };
    } catch (error: any) {
        toast.error(error.response.data.errorMessage);
        return error;
    }
});
