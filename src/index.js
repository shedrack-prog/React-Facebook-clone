import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import store from "./app/store";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignupScreen from "./components/SignupScreen";
import Login from "./components/Login";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="signup" element={<SignupScreen />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
);
