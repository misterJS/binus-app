import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { editProfile, editProfileDone, getContributionJourney, getListJobPost, getListMission, getProfiles } from "../../store/client"

export const useProfile = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const profile = useSelector((state: any) => state.client.profile)

    useEffect(() => {
        if (profile.profiles !== null) {
            dispatch(getContributionJourney())
            dispatch(getListJobPost())
            dispatch(getListMission())
        }
    }, [profile.profiles])


    const getProfilesData = () => {
        dispatch(getProfiles())
    }


    useEffect(() => {
        if (profile.editProfile?.resultCode === 200) {
            navigate("/user")
            dispatch(editProfileDone())
        }
    }, [profile.editProfile])

    const editUser = (payload: any) => {
        dispatch(editProfile(payload))
    }

    return {
        getProfilesData,
        editProfile: editUser,
        profile
    }
}