import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    jobs: [],
    companies: [],
}
const jobSlice = createSlice({
    name: 'job',
    initialState,
    reducers: {
        setJobs: (state, action) => { 
            state.jobs = action.payload
        }
    },

})

export const { setJobs } = jobSlice.actions
export const jobReducer = jobSlice.reducer