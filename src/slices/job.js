import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    jobs: [],
    companies: [],
    isFetching: false
}
const jobSlice = createSlice({
    name: 'job',
    initialState,
    reducers: {
        setJobs: (state, action) => {
            state.jobs = [...state.jobs, ...action.payload]
            state.isFetching = false
        },
        requestJobs: (state) => {
            state.isFetching = true
        }
    },

})

export const { setJobs, requestJobs } = jobSlice.actions
export const jobReducer = jobSlice.reducer