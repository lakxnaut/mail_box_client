import { createSlice } from "@reduxjs/toolkit";

const initialState = { inboxData: [] }

const mailDataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        getInboxData(state, action) {
            state.inboxData = action.payload

        }

    }
})

export default mailDataSlice
export const mailDataAction = mailDataSlice.actions