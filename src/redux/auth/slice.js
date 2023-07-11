import { createSlice } from "@reduxjs/toolkit";

// для запису токена
const initialState = {
    token: null,
};

const authReducer = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken: (state, {payload}) => {
             state.token = payload;   
        }
    },

});

export const {setToken} = authReducer.actions;
export default authReducer.reducer;