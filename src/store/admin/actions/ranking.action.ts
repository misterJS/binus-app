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

export const getRankingList = createAsyncThunk('RankManagement/getRankingList', async (payload: any) => {
    try {
        const response = await axios.get(`${BASE_URL}RankManagement/GetActive?page=1&size=10`,
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

export const createRanking = createAsyncThunk('RankManagement/create', async (payload: any) => {
    const params = {
        "RankName": payload.rankName,
        "IconPath": payload.iconPath,
        "MinPoint": payload.minPoint,
        "MinProject": payload.minProject,
        "UserIn": JSON.parse(localStorage.getItem('userData') as any).email
    };
    try {
        const response = await axios.post(`${BASE_URL}RankManagement/create`,
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

export const updateRanking = createAsyncThunk('RankManagement/update', async (payload: any) => {
    const params = {
        "Id": payload.id,
        "RankName": payload.rankName,
        "IconPath": payload.iconPath,
        "MinPoint": payload.minPoint,
        "MinProject": payload.minProject,
        "UserIn": JSON.parse(localStorage.getItem('userData') as any).email
    };
    try {
        const response = await axios.post(`${BASE_URL}RankManagement/update`,
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

export const setNonActiveRanking = createAsyncThunk('RankManagement/setNonActive', async (payload: any) => {
    const params = {
        "Id": payload.id,
        "UserIn": JSON.parse(localStorage.getItem('userData') as any).email
    };
    try {
        const response = await axios.post(`${BASE_URL}RankManagement/SetNonActive`,
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

export const setActiveRanking = createAsyncThunk('RankManagement/setActive', async (payload: any) => {
    const params = {
        "Id": payload.id,
        "UserIn": JSON.parse(localStorage.getItem('userData') as any).email
    };
    try {
        const response = await axios.post(`${BASE_URL}RankManagement/SetActive`,
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