import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { toast } from "react-hot-toast"
import { BASE_URL } from "../../../utils"

export const getMessageList = createAsyncThunk('chat/getMessageList', async (payload: any) => {
    try {
        const response = await axios.get(`${BASE_URL}GoBuzz/GetChatList?page=${payload.page}&size=${payload.perPage}`, {
            "headers": {
                "content-type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            }
        });
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

export const postMessage = createAsyncThunk('chat/postMessage', async (payload: any) => {
    const params = JSON.stringify({
        "Message": payload.message,
        "UserIdTarget": payload.userIdTarget,
        "UserIn": JSON.parse(localStorage.getItem('userData') as any)?.email,
    });
    const response = await axios.post(`${BASE_URL}GoBuzz/PostChat`, params,
        {
            "headers": {
                "content-type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            }
        }
    );
    toast[response.data.resultCode === 200 ? 'success' : 'error'](response.data.errorMessage);
    return {
        data: response.data
    };
});

export const getMessage = createAsyncThunk('chat/getMessage', async (payload: any) => {
    const params = JSON.stringify({
        "UserIn": JSON.parse(localStorage.getItem('userData') as any)?.email,
    });
    const response = await axios.post(`${BASE_URL}GoBuzz/GetChatByUser?page=${payload.page}&size=${payload.perPage}`, params,
        {
            "headers": {
                "content-type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            }
        }
    ).then(response => response)
        .catch((error) => {
            toast.error(error.response.data.errorMessage)
            return error
        })

    if (response.data.resultCode === 500) {
        toast.error(response.data.errorMessage)
    }

    return { data: response.data }
})
