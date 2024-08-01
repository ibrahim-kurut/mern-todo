import { profileActions } from "../slices/profileSlice"
import axios from "axios";
import { toast } from "react-toastify";


// get user profile

export function getUserProfile(userId) {
    return async (dispatch, getState) => {

        // console.log(getState().auth.user);
        try {
            const { data } = await axios.get(`http://localhost:5000/api/users/profile/${userId}`, {
                headers: {
                    "Authorization": "Bearer " + getState().auth.user.token,

                }
            })
            dispatch(profileActions.setProfile(data))
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }
}