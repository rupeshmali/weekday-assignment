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
        },
        appendJobs: (state, action) => {
            state.jobs = [...state.jobs, ...action.payload]
        }
    },

})

export const { setJobs, appendJobs } = jobSlice.actions
export const jobReducer = jobSlice.reducer