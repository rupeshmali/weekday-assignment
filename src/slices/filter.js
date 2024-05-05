import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  experience: null,
  company: "",
  role: [],
  salary: null,
};
const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    addFilter: (state, action) => {
        state[action.payload.name] = action.payload.value
    },
    removeFilter: (state, action) => {},
  },
});

export const { addFilter, removeFilter } = filterSlice.actions
export const filterReducer = filterSlice.reducer
