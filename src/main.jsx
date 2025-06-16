import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { LoginProvider } from "./contexts/LoginContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LoginProvider>
      <App />
    </LoginProvider>
  </React.StrictMode>
);
