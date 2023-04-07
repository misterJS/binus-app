import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { handleLoginSsoThunk, handleRegistrationThunk } from "../../../store/client"

export const useRegistrationSetup = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const auth = useSelector((state: any) => state.client.auth)

    useEffect(() => {
        if (auth.loading === false) {
            if (auth?.loginState.resultCode === 200) {
                navigate('/')
            }
        }

    }, [auth?.loading])


    const handleRegister = (data: any) => {
        console.log(data);

        dispatch(handleRegistrationThunk(data))
    }

    const handleLoginSso = (data: any) => {
        dispatch(handleLoginSsoThunk())
    }

    return {
        handleRegister,
        handleLoginSso
    }
}