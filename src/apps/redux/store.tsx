import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/auth/auth-reducer";
import jiraReducer from "./reducers/jira-software/jira-reducer";

const store = configureStore({
    reducer: {
        authReducer,
        jiraReducer
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>
export default store;