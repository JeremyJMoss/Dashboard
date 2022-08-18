import React, { useContext } from "react";
import DashboardContext from "../Context/dashboard-context";
import classes from "../Styles/Dashboard.module.css";
import TopHeader from "./TopHeader";
import Weather from "../Applications/Weather";
import Calendar from "../Applications/Calendar";
import Calculator from "../Applications/Calculator";
import { Route, Routes } from "react-router-dom";

const Dashboard = () => {
    const ctx = useContext(DashboardContext);

    return (
            <section className={`${classes.dashboard} ${ctx.isDarkMode && classes.dark}`}>
                <TopHeader />
                <Routes>
                    <Route path="/" element={"HomePage"}/>
                    <Route path="/settings" element={"Settings"}/>
                    <Route path="/admin/members" element={"Admin"}/>
                    <Route path={`/${ctx.groupInfo.name.toLowerCase()}`} element={ctx.groupInfo.name}/>
                    <Route path="/calendar" element={<Calendar/>}/>
                    <Route path="/calculator" element={<Calculator/>}/>
                    <Route path="/weather" element={<Weather/>}/>
                </Routes>
            </section>
    )
}

export default Dashboard;
