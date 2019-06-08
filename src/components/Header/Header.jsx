import React from 'react'
import classes from './Header.module.css'

function Header() {
    return(
        <header className={classes.header}>
            <img src={'https://www.freelogodesign.org/Content/img/logo-ex-7.png'}/>
        </header>
    );
}

export default Header;
