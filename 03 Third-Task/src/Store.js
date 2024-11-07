import { configureStore } from '@reduxjs/toolkit'
import counter from './Components/React-Redux-Slices/counterSlice'
import todoSlice from './Components/React-Redux-Slices/TodoSlice'
export const store = configureStore({
    reducer: {
        counter: counter,
        todo: todoSlice,
    },
})