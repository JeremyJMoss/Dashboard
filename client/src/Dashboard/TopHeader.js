import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import DashboardContext from "../Context/dashboard-context";
import classes from "../Styles/TopHeader.module.css";

const TopHeader = () => {
    const ctx = useContext(DashboardContext);

    return (
        <div className={`${classes.links} ${ctx.isDarkMode && classes.dark}`}>
            <button className={classes.darkModeToggle} onClick={ctx.toggleDarkMode}>
                {ctx.isDarkMode ? <i className="fa-solid fa-lightbulb"></i> : <i className="fa-solid fa-lightbulb"></i>}
            </button>
            <button>
                <Link to="/settings" ><i className="fa-solid fa-gears"></i></Link>
            </button>
        </div>
    )
}

export default TopHeader;