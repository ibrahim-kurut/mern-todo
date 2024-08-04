import { configureStore } from "@reduxjs/toolkit";

import { authReducer } from "./slices/authSlice"
import { profileReducer } from "./slices/profileSlice";
import { todoReducer } from "./slices/todoSlice";

const store = configureStore({
    reducer: {
        auth: authReducer,
        profile: profileReducer,
        todo: todoReducer
    }
})

export default store