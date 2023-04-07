import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';
import { BASE_URL } from '../../../utils';

const HEADERS = {
    'content-type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('token')}`,
};

const handleResponse = (response: any, successMessage: any) => {
    if (response.status === 200) {
        // toast.success(successMessage);
    } else {
        toast.error(response.data.errorMessage);
    }
};

const makeRequest = async (url: string, successMessage: string) => {
    try {
        const response = await axios.get(url, { headers: HEADERS });
        handleResponse(response, successMessage);
        return { data: response.data };
    } catch (error: any) {
        toast.error(error.response.data.errorMessage);
        return error;
    }
};

export const getProfiles = createAsyncThunk('profile/getProfiles', async () =>
    makeRequest(`${BASE_URL}/auth/profile?email=${JSON.parse(localStorage.getItem('userData') as any)?.email}`, 'Profiles fetched successfully')
);

export const getContributionJourney = createAsyncThunk('profile/getContributionJourney', async () =>
    makeRequest(`${BASE_URL}/auth/ContributionJourney?userid=${JSON.parse(localStorage.getItem('userData') as any)?.id}`, 'Contribution journey fetched successfully')
);

export const getListJobPost = createAsyncThunk('profile/getListJobPost', async () =>
    makeRequest(`${BASE_URL}/auth/UserListJobPost?page=1&size=10&userid=${JSON.parse(localStorage.getItem('userData') as any)?.id}`, 'Job posts fetched successfully')
);

export const getListMission = createAsyncThunk('profile/getListMission', async () =>
    makeRequest(`${BASE_URL}/auth/UserListMission?page=1&size=10&userid=${JSON.parse(localStorage.getItem('userData') as any)?.id}`, 'Missions fetched successfully')
);

export const editProfileDone = createAsyncThunk('profile/editProfileDone', async () => {
    return null;
})

export const editProfile = createAsyncThunk(
    'profile/editProfile',
    async ({ email, username, companyName, major, yearClass, nim, memberSince, fullname, phoneNo, bio, file }: any) => {
        const params = new FormData();
        params.append('Email', email);
        params.append('Username', username);
        params.append('CompanyName', companyName);
        params.append('Major', major);
        params.append('YearClass', yearClass);
        if (nim !== null) {
            params.append('Nim', nim);
        }
        if (memberSince) {
            params.append('MemberSince', memberSince);
        }
        if (fullname !== null) {
            params.append('FullName', fullname);
        }
        if (phoneNo !== null) {
            params.append('PhoneNo', phoneNo);
        }
        if (bio !== null) {
            params.append('Bio', bio);
        }
        if (file !== null) {
            params.append('File', file);
        }
        const response = await axios.post(`${BASE_URL}auth/update`, params, {
            headers: {
                'content-type': 'multipart/form-data',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        }).then(response => {
            return response;
        }).catch((error) => {
            toast.error(error.response.data.errorMessage);
            return error;
        });

        if (response.data.resultCode === 200) {
            toast.success(response.data.errorMessage);
        } else if (response.data.resultCode === 500) {
            toast.error(response.data.errorMessage);
        }

        return {
            data: response.data,
        };
    },
);

