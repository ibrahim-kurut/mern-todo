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

// Delete Post
export function deleteTodoHandle(todoId) {
    return async (dispatch, getState) => {
        try {
            const { data } = await axios.delete(`http://localhost:5000/api/todos/${todoId}`, {
                // only a logged in user can delete this todo
                headers: {
                    Authorization: "Bearer " + getState().auth.user.token,
                }
            });
            dispatch(todoActions.deleteTodo(data.todoId))
            toast.success(data.message)
        } catch (error) {
            console.log(error);
            // toast.error(error.response.data.message);
        }
    }
}