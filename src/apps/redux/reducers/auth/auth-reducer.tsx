import { createSlice } from '@reduxjs/toolkit';

interface AuthStateReducer {
    token: string;
    isUserLoggedIn: boolean;
}

const initialState: AuthStateReducer = {
    token: "",
    isUserLoggedIn: false
};

const AuthReducer = createSlice({
    name: "authReducer",
    initialState,
    reducers: {
        login(state) {
            state.isUserLoggedIn = true;
        },
        logout(state) {
            state.isUserLoggedIn = false;
        },
        // checkToken(state) {
        //     const currentToken = retrieveStoredToken();
        //     if (currentToken && currentToken.token) {
        //         state.token = currentToken.token;
        //         state.isUserLoggedIn = true;
        //         axios.defaults.headers.common['Authorization'] = `Bearer ${currentToken.token}`;
        //     } else {
        //         state.token = "";
        //         state.isUserLoggedIn = false;
        //         axios.defaults.headers.common['Authorization'] = "";
        //     }
        // }
    }
})

// const setItemToLocalStorage = (token: string, expiresIn: number) => {
//     const expirationTime = new Date(
//         new Date().getTime() + +expiresIn * 1000
//     );

//     localStorage.setItem('token', token);
//     localStorage.setItem('expiresIn', expirationTime.toISOString());
// }

// const removeItemFromLocalStorage = () => {
//     localStorage.removeItem('token');
//     localStorage.removeItem('expiresIn');
// }

// const calculateRemainingTime = (expirationTime: any) => {
//     const currentTime = new Date().getTime();
//     const adjExpirationTime = new Date(expirationTime).getTime();

//     const remainingDuration = adjExpirationTime - currentTime;

//     return remainingDuration;
// };

// const retrieveStoredToken = () => {
//     const storedToken = localStorage.getItem('token');
//     const storedExpirationDate = localStorage.getItem('expiresIn');

//     const remainingTime = calculateRemainingTime(storedExpirationDate);

//     if (remainingTime <= 3600) {
//         localStorage.removeItem('token');
//         localStorage.removeItem('expiresIn');
//         return null;
//     }

//     return {
//         token: storedToken,
//         duration: storedExpirationDate,
//     };
// };

export const authActions = AuthReducer.actions;
export default AuthReducer.reducer;