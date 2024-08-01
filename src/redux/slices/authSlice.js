import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        // If the user info is in Local Storage, get it, or it returns null
        user: localStorage.getItem("userInfo") ?
            JSON.parse(localStorage.getItem("userInfo"))
            :
            null,
        registerMsg: null
    },
    reducers: {
        // ============ login ============
        loginHandler(state, action) {
            state.user = action.payload;
        },
        // ============ logout ============
        logOut(state) {
            state.user = null;
        },
        // ============ register ============
        registerHandler(state, action) {
            state.registerMsg = action.payload;
        }
    }
})


const authReducer = authSlice.reducer
const authActions = authSlice.actions

export { authReducer, authActions }