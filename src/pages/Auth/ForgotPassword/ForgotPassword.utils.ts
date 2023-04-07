import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import toast from 'react-hot-toast'
import { useNavigate } from "react-router-dom"
import { handleForgotThunk } from "../../../store/client"


export const useForgotPasswordSetup = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const auth = useSelector((state: any) => state.client.auth)

    useEffect(() => {
        if (auth.loading === false) {
            if (auth?.loginState.resultCode === 200) {
                navigate('/confirmation')
            }
        }
    }, [auth.loading])


    const handleForgot = (data: any) => {
        dispatch(handleForgotThunk(data))
    }

    return {
        handleForgot
    }

}