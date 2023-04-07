import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from 'react-hot-toast'
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

export const getActiveTransaction = createAsyncThunk('transactionManagement/getActiveTransaction', async (payload: any) => {
    const params = {
        "Status": payload.status,
        "UserIn": payload.userIn
    };
    try {
        const response = await axios.post(`${BASE_URL}TransactionManagement/GetActive?page=1&size=10`,
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

export const getApproveTransaction = createAsyncThunk('transactionManagement/getApproveTransaction', async (payload: any) => {
    const params = {
        "Id": payload.id,
        "UserIn": payload.userId
    };
    try {
        const response = await axios.post(`${BASE_URL}TransactionManagement/ApproveProject?page=1&size=10`,
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

export const getRejectTransaction = createAsyncThunk('transactionManagement/getRejectTransaction', async (payload: any) => {
    const params = {
        "Id": payload.id,
        "UserIn": payload.userIn
    };
    try {
        const response = await axios.post(`${BASE_URL}TransactionManagement/RejectProject?page=1&size=10`,
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

export const getDetailTransaction = createAsyncThunk('transactionManagement/getDetailTransaction', async (payload: any) => {
    try {
        const response = await axios.get(`${BASE_URL}TransactionManagement/GetDetail?id=${payload.id}`,
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