import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.css";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { jobReducer } from "./slices/job.js";
const store = configureStore({
  reducer: {
    job: jobReducer,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
