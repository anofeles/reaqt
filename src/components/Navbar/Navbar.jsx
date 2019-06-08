import React from "react"
import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";

function Navbar() {
    return(
        <nav className={classes.nav}>
            <div>
                <NavLink to={'/Profile'}>Profile</NavLink>
            </div>
            <div>
                <NavLink to={'/Messages'}>Messages</NavLink>
            </div>
            <div>
                <NavLink to={'/News'}>News</NavLink>
            </div>
            <div>
                <NavLink to={'/Music'}>Music</NavLink>
            </div>
            <div>
                <NavLink to={'/Settings'}>Settings</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;
