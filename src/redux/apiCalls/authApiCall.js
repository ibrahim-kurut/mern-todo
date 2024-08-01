import { authActions } from "../slices/authSlice"
import axios from "axios";
import { toast } from "react-toastify";


// ============= login user =============
export function LoginUser(userData) {
    // send request to server with username and password
    return async (dispatch) => {
        try {
            const { data } = await axios.post("http://localhost:5000/api/auth/login/", userData)

            dispatch(authActions.loginHandler(data));
            // save user data in local storage for future use
            localStorage.setItem("userInfo", JSON.stringify(data));
        }
        catch (error) {
            // If the user enters the wrong password or email, show an error message on the screen
            toast.error(error.response.data.message);
            console.log(error);
        }
    }
}




