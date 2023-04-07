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

export const getActiveUser = createAsyncThunk('UserManagement/getActiveUser', async (payload: any) => {
    try {
        const response = await axios.get(`${BASE_URL}UserManagement/GetActive?page=1&size=10`,
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

export const getUserPersonalInfo = createAsyncThunk('UserManagement/getUserPersonalInfo', async (payload: any) => {
    try {
        const response = await axios.get(`${BASE_URL}UserManagement/UserPersonalInfo?email=${JSON.parse(localStorage.getItem('userData') as any)?.email}`,
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

export const getUserJobPosting = createAsyncThunk('UserManagement/getUserJobPosting', async (payload: any) => {
    try {
        const response = await axios.get(`${BASE_URL}UserManagement/UserJobPosting?page=1&size=10&userid=2`,
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

export const getUserDetail = createAsyncThunk('UserManagement/getUserDetail', async (payload: any) => {
    try {
        const response = await axios.get(`${BASE_URL}UserManagement/Detail?email=${payload.email}`,
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

export const createUser = createAsyncThunk(
    'UserManagement/createUser',
    async (payload: any) => {
        const params = {
            Email: payload.category,
            FullName: payload.fullName,
            CompanyName: payload.companyName,
            PhoneNo: payload.phoneNo,
            Username: payload.username,
            Password: payload.password,
            ConfirmPassword: payload.confirmPassword,
            Captcha: "x",
        };
        const response = await axios.post(
            `${BASE_URL}UserManagement/Create`,
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

export const getUserContribution = createAsyncThunk('UserManagement/getUserContribution', async (payload: any) => {
    try {
        const response = await axios.get(`${BASE_URL}UserManagement/UserContribution?page=1&size=10&userid=2`,
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

export const updatePoint = createAsyncThunk('UserManagement/updatePoint', async (payload: any) => {
    try {
        const params = {
            Id: payload.category,
            PointReward: payload.pointReward,
            UserIn: payload.email
        };
        const response = await axios.post(
            `${BASE_URL}UserManagement/UpdatePoint`,
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

export const verifyUser = createAsyncThunk('UserManagement/verifyUser', async (payload: any) => {
    try {
        const params = {
            Id: payload.category,
            UserIn: payload.email
        };
        const response = await axios.post(
            `${BASE_URL}UserManagement/VerifyUser`,
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

export const closeJobPosting = createAsyncThunk('UserManagement/closeJobPosting', async (payload: any) => {
    try {
        const params = {
            Id: payload.category,
            UserIn: payload.email
        };
        const response = await axios.post(
            `${BASE_URL}UserManagement/CloseJobPosting`,
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

export const updateJobPosting = createAsyncThunk('UserManagement/updateJobPosting', async (payload: any) => {
    try {
        const params = {
            Id: payload.id,
            Title: payload.title,
            Description: payload.description,
            ProjectType: payload.projectType,
            ProjectCategoryId: payload.projectCategoryId,
            Gender: payload.gender,
            ProjectAgesId: payload.projectAgesId,
            EducationLevel: payload.educationLevel,
            LocationId: payload.locationId,
            StartDate: payload.startDate,
            EndDate: payload.endDate,
            ContributorNo: payload.contributorNo,
            PointReward: payload.pointReward,
            UserIn: payload.email,
    };
    const response = await axios.post(
        `${BASE_URL}UserManagement/UpdateJobPosting`,
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

export const createReport = createAsyncThunk('UserManagement/createReport', async (payload: any) => {
    try {
        const params = {
            UserType: payload.userType,
            MinPoint: payload.minPoint,
            Transaction: payload.transaction,
            RangeStart: payload.rangeStart,
            RangeEnd: payload.rangeEnd,
            Rank: payload.rank,
            UserIn: payload.email,
    };
    const response = await axios.post(
        `${BASE_URL}MemberReport/Report`,
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