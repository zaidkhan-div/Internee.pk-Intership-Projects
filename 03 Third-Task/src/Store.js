import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './Components/React-Redux-Slices/Counter'
import { todoSlice } from './Components/React-Redux-Slices/TodoSlice'
export const store = configureStore({
    reducer: {
        counter: counterSlice,
        todo: todoSlice,
    },
})