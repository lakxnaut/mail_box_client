import { createSlice } from "@reduxjs/toolkit";

const initialState = { loginEmail: '' }

const authDetailSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        email(state, action) {
            this.loginEmail = action.payload
            console.log(this.loginEmail);

        }


    }
})

export default authDetailSlice
export const authDetailSliceAction = authDetailSlice.actions