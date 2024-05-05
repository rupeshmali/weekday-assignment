import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  experience: "",
  company: "",
  role: "",
  salary: "",
};
const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    addFilter: (state, action) => {},
    removeFilter: (state, action) => {},
  },
});

export const { addFilter, removeFilter } = filterSlice.actions
export const filterReducer = filterSlice.reducer
