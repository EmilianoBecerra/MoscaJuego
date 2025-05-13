import React, { StrictMode } from "react";
import "./style.css";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";


const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
