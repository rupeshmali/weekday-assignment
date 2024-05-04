import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.css";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
// const store = configureStore({});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Provider> */}
    <App />
    {/* </Provider> */}
  </React.StrictMode>
);
