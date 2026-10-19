import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BakeryProvider } from "./context/BakeryContext.jsx";
import "./index.css";
import { ToastProvider } from "./context/ToastContext.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
  <BakeryProvider>
    <ToastProvider>
      <App />
    </ToastProvider>
  </BakeryProvider>
</React.StrictMode>
);
