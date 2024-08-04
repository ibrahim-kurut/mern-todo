import { todoActions } from "../slices/todoSlice"
import axios from "axios";
import { toast } from "react-toastify";


export function createNewTodo(newTodo) {
    return async (dispatch, getState) => {
        try {
            dispatch(todoActions.addLoading())
            await axios.post('http://localhost:5000/api/todos', newTodo, {
                //* only logged in user can create post
                headers: {
                    Authorization: "Bearer " + getState().auth.user.token,
                    "Content-Type": "application/json"
                }
            });


            dispatch(todoActions.createNewtTodo())

            setTimeout(() => {
                dispatch(todoActions.resetisTodoCreated())
            }, 2000);

        } catch (error) {
            toast.error(error.response.data.message)
            dispatch(todoActions.removeLoading())
        }

    }
}