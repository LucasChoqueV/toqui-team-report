import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/auth/auth-reducer";

const store = configureStore({
    reducer: {
        authReducer
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>
export default store;