import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-hot-toast";
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

export const getBannerList = createAsyncThunk('BannerManagement/getBannerList', async (payload: any) => {
    try {
        const response = await axios.get(`${BASE_URL}BannerManagement/GetActive?page=1&size=10`,
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

export const createBanner = createAsyncThunk('BannerManagement/create', async (payload: any) => {
    const formData = new FormData();
    formData.append("BannerName", payload.bannerName);
    formData.append("File", payload.file);
    formData.append("UserIn", JSON.parse(localStorage.getItem('userData') as any).email);

    try {
        const response = await axios.post(`${BASE_URL}BannerManagement/Create`,
            formData,
            {
                headers: {
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

export const updateBanner = createAsyncThunk('BannerManagement/update', async (payload: any) => {
    const formData = new FormData();
    formData.append('Id', payload.id);
    formData.append('BannerName', payload.bannerName);
    formData.append('File', payload.file);
    formData.append('UserIn', JSON.parse(localStorage.getItem('userData') as any).email);

    try {
        const response = await axios.post(`${BASE_URL}BannerManagement/Update`,
            formData,
            {
                "headers": {
                    "content-type": "multipart/form-data",
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

export const deleteBanner = createAsyncThunk('BannerManagement/delete', async (payload: any) => {
    const params = {
        "Id": payload.id,
        "UserIn": JSON.parse(localStorage.getItem('userData') as any).email
    };
    try {
        const response = await axios.post(`${BASE_URL}BannerManagement/Delete`,
            params,
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

export const unDeleteBanner = createAsyncThunk('BannerManagement/unDelete', async (payload: any) => {
    const params = {
        "Id": payload.id,
        "UserIn": JSON.parse(localStorage.getItem('userData') as any).email
    };
    try {
        const response = await axios.post(`${BASE_URL}BannerManagement/UnDelete`,
            params,
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