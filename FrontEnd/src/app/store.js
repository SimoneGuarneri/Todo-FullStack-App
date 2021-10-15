import { configureStore } from '@reduxjs/toolkit'
import userReducer  from "../features/UserSlice.js"
import todoReducer  from "../features/TodoSlice.js"
import errorReducer from "../features/ErrorSlice.js"

export default configureStore({
  reducer: {
    user: userReducer,
    todo: todoReducer,
    error: errorReducer
  },
})