import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.css";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { jobReducer } from "./slices/job.js";
import { filterReducer } from "./slices/filter.js";
const store = configureStore({
  reducer: {
    job: jobReducer,
    filter: filterReducer
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
