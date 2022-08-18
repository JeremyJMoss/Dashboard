import React from "react";
import { useContext } from "react";
import Sidebar from "./Sidebar/Sidebar";
import classes from "./App.module.css";
import DashboardContext from "./Context/dashboard-context";
import Dashboard from "./Dashboard/Dashboard";
import { BrowserRouter } from "react-router-dom";

const App = () => {
    const ctx = useContext(DashboardContext);

    return (
        <BrowserRouter>
            <div className={`${classes.application} ${ctx.isDarkMode && classes.dark}`}>
                <Sidebar />
                <Dashboard />
            </div>
        </BrowserRouter>
    );
}

export default App;