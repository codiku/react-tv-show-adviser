import "./global.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { DarkModeProvider } from "./contexts/DarkMode/DarkMode";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <DarkModeProvider>
    <App />
  </DarkModeProvider>
);
