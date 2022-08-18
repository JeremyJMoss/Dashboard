import React from "react";
import ReactDOM from "react-dom/client";
import DashboardProvider from "./Context/DashboardProvider";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<DashboardProvider>
    <App />
</DashboardProvider> 
);