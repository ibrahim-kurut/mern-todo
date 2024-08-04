import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todo",
    initialState: {
        loading: false,
        isTodoCreated: false,
        todos: [],
    },
    reducers: {
        addLoading(state) {
            state.loading = true
        },
        removeLoading(state) {
            state.loading = false
        },
        createNewtTodo(state) {
            state.isTodoCreated = true
            state.loading = false
        },
        resetisTodoCreated(state) {
            state.isTodoCreated = false
        },
        //! delete todo
        deleteTodo(state, action) {
            state.todos = state.todos.filter(todo => todo._id !== action.payload)
        },
    }
})


const todoReducer = todoSlice.reducer

const todoActions = todoSlice.actions

export { todoReducer, todoActions }