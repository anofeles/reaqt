import React from 'react'
import classes from './Header.module.css'
import {NavLink} from "react-router-dom";

function Header() {
    return(
        <header className={classes.header}>
            <img src={'https://www.freelogodesign.org/Content/img/logo-ex-7.png'}/>
            <div className={classes.loginBlock}>
                <NavLink to={'/login'}>Login</NavLink>
            </div>
        </header>
    );
}

export default Header;
