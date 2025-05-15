import React, { StrictMode } from "react";
import "./style.css";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Manual from "./componentes/Manual.jsx";


const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/manual" element={<Manual />} />
    </Routes>
  </BrowserRouter>
);
