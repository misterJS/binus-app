import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from 'react-hot-toast';
import { BASE_URL } from "../../../utils";

const handleResponse = (response: any) => {
    if (response.data.resultCode === 200) {
        toast.success(response.data.errorMessage)
    } else if (response.data.resultCode === 500) {
        toast.error(response.data.errorMessage)
    }
    return {
        data: response.data
    }
}

export const getReport = createAsyncThunk('violationManagement/getReport', async (payload: any) => {
    try {
        const response = await axios.get(`${BASE_URL}ViolationManagement/GetReport?page=1&size=10`,
            {
                "headers": {
                    "content-type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                }
            }
        );
        return handleResponse(response);
    } catch (error: any) {
        toast.error(error.response.data.errorMessage);
        return error;
    }
});

export const getDetailViolation = createAsyncThunk('violationManagement/getDetailViolation', async (payload: any) => {
    try {
        const response = await axios.get(`${BASE_URL}ViolationManagement/GetDetailViolation?id=${payload.id}`,
            {
                "headers": {
                    "content-type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                }
            }
        );
        return handleResponse(response);
    } catch (error: any) {
        toast.error(error.response.data.errorMessage);
        return error;
    }
});

export const getViolationAsTarget = createAsyncThunk('violationManagement/getViolationAsTarget', async (payload: any) => {
    const params = {
        "UserIn": payload.userId
    };
    try {
        const response = await axios.post(`${BASE_URL}ViolationManagement/GetViolationAsTarget?page=1&size=10`,
            JSON.stringify(params),
            {
                "headers": {
                    "content-type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                }
            }
        );
        return handleResponse(response);
    } catch (error: any) {
        toast.error(error.response.data.errorMessage);
        return error;
    }
});

export const getViolationAsSender = createAsyncThunk('violationManagement/getViolationAsSender', async (payload: any) => {
    const params = {
        "UserIn": payload.userId
    };
    try {
        const response = await axios.post(`${BASE_URL}ViolationManagement/GetViolationAsSender?page=1&size=10`,
            JSON.stringify(params),
            {
                "headers": {
                    "content-type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                }
            }
        );
        return handleResponse(response);
    } catch (error: any) {
        toast.error(error.response.data.errorMessage);
        return error;
    }
});

export const createResolveReport = createAsyncThunk('violationManagement/createResolveReport', async (payload: any) => {
    const params = {
        "Id": payload.id,
        "UserIn": payload.userIn
    };
    try {
        const response = await axios.post(`${BASE_URL}ViolationManagement/ResolveReport`,
            JSON.stringify(params),
            {
                "headers": {
                    "content-type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                }
            }
        );
        return handleResponse(response);
    } catch (error: any) {
        toast.error(error.response.data.errorMessage);
        return error;
    }
});