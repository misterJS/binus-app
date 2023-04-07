import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-hot-toast";
import { BASE_URL } from "../../../utils";

export const getProjectList = createAsyncThunk(
    'garden/getProjectList',
    async (payload: any) => {
        const params = {
            Category: payload.category,
            MinPoint: Number(payload.minPoint),
            MaxPoint: Number(payload.maxPoint),
            SortBy: payload.sortBy,
            UserIn: JSON.parse(localStorage.getItem('userData') as any)?.email,
        };
        const response = await axios.post(
            `${BASE_URL}Garden/GetProject?size=${payload.perPage}&page=${payload.page}`,
            JSON.stringify(params),
            {
                "headers": {
                    "content-type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                }
            }
        );
        if (response.data.resultCode === 200) {
            toast.success(response.data.errorMessage);
        } else {
            toast.error(response.data.errorMessage);
        }
        return { data: response.data };
    }
);

export const GetDetailProject = createAsyncThunk(
    'garden/GetDetailProject',
    async (payload: any) => {
        try {
            const response = await axios.get(
                `${BASE_URL}Garden/GetDetailProject?id=${payload?.id}`,
                {
                    "headers": {
                        "content-type": "application/json",
                        "Authorization": `Bearer ${localStorage.getItem('token')}`
                    }
                }
            );
            if (response.data.resultCode === 200) {
                toast.success(response.data.errorMessage);
            } else {
                toast.error(response.data.errorMessage);
            }
            return { data: response.data };
        } catch (error: any) {
            toast.error(error.response.data.errorMessage);
            return error;
        }
    }
);

export const CreateEvidence = createAsyncThunk(
    'garden/CreateEvidence',
    async ({ projectId, file }: any) => {
        const formData = new FormData();
        formData.append('ProjectId', projectId);
        formData.append('File', file);
        formData.append('UserIn', JSON.parse(localStorage.getItem('userData') as any)?.email);

        const response = await axios.post(`${BASE_URL}Garden/Evidence`, formData, {
            "headers": {
                "content-type": "multipart/form-data",
                "Authorization": "Basic Nzk4ODVFODEtQzFCRi00OTkzLTlBMzUtOUQ4RDRBRUExREE3"
            }
        });

        toast[response.data.resultCode === 200 ? 'success' : 'error'](response.data.errorMessage);
        return { data: response.data };
    }
);

export const ApplyProject = createAsyncThunk(
    'garden/ApplyProject',
    async ({ projectId, file }: any) => {
        const formData = new FormData();
        formData.append('ProjectId', projectId);
        formData.append('File', file);
        formData.append('UserIn', JSON.parse(localStorage.getItem('userData') as any)?.email);

        const response = await axios.post(`${BASE_URL}Garden/ApplyProject`, formData, {
            "headers": {
                "content-type": "multipart/form-data",
                "Authorization": "Basic Nzk4ODVFODEtQzFCRi00OTkzLTlBMzUtOUQ4RDRBRUExREE3"
            }
        });

        toast[response.data.resultCode === 200 ? 'success' : 'error'](response.data.errorMessage);
        return { data: response.data };
    }
);

