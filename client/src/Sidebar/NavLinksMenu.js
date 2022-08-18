import React, { useState } from "react";
import classes from "../Styles/NavLinksMenu.module.css";

const NavLinksMenu = (props) => {
    const [dropDownOpen, setDropDownOpen] = useState(true);
    
    const toggleDropDown = () => {
        setDropDownOpen((prevState) => {
            return !prevState;
        })
    }

    return (
        <section className={classes.navDropDown}>
            <div className={classes.heading}>
                <h3 onClick={toggleDropDown}>{props.heading}</h3>
                <button onClick={toggleDropDown}>{dropDownOpen ? <>&#11167;</> : <>&#11164;</>}</button>
            </div>
            <div className={classes.links}>
                {dropDownOpen && props.children}
            </div>
        </section>
    )
}

export default NavLinksMenu;