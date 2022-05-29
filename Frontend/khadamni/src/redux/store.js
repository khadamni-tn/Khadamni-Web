import { configureStore } from '@reduxjs/toolkit'
import authReducer from "./Slices/auth";
import messageReducer from "./Slices/message";

const reducer = {
  auth: authReducer,
  message: messageReducer
}

const store = configureStore({
  reducer: reducer,
  devTools: true,
})

export default store;