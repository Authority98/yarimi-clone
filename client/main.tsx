import "./global.css";
// Ensure Wistia global object exists before scripts load
if (typeof window !== 'undefined') {
  window.Wistia = window.Wistia || {};
}

import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");

// Create a root
const root = createRoot(rootElement);

// Render the App component to the root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);