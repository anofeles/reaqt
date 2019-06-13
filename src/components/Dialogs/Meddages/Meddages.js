import React from 'react'
import classes from './../Dialogs.module.css'


function Meddages(props) {
    return (
        <div className={classes.message}>{props.name}</div>
    );
}

export default Meddages;
