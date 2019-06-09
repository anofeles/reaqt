import React from "react"
import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";

function Navbar() {
    return(
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink activeClassName={classes.active} to={'/Profile'}>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink activeClassName={classes.active} to={'/Messages'}>Messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink activeClassName={classes.active} to={'/News'}>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink activeClassName={classes.active} to={'/Music'}>Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink activeClassName={classes.active} to={'/Settings'}>Settings</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;
