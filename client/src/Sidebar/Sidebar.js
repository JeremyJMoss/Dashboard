import React from "react";
import { useContext } from "react";
import {Link} from "react-router-dom"
import NavLinksMenu from "./NavLinksMenu"
import classes from "../Styles/Sidebar.module.css"
import DashboardContext from "../Context/dashboard-context";

const Sidebar = () => {
    const ctx = useContext(DashboardContext);

    return (
        <nav className={`${classes.navigation} ${ctx.isDarkMode && classes.dark}`}>
            <h1>DashParrot</h1>
            <NavLinksMenu heading="Groups" >
                {ctx.isAdmin && <Link to="/admin/members">Admin</Link>}
                <Link to={`/${ctx.groupInfo.name.toLowerCase()}`} >{ctx.groupInfo.name}</Link>
            </NavLinksMenu>
            <NavLinksMenu heading="Pages">
                
            </NavLinksMenu>
            <NavLinksMenu heading="Apps">
                <Link to="/calendar">Calendar</Link>
                <Link to="/calculator">Calculator</Link>
                <Link to="/weather">Weather</Link>
            </NavLinksMenu>
        </nav>
    );
}

export default Sidebar;