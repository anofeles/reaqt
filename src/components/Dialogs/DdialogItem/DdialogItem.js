import React from 'react'
import classes from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

function DdialogItem(props) {
    let path = '/Messages/' + props.data_id;
    return (
        <div className={classes.dialog}>
            <NavLink to={path} activeClassName={classes.acrive}>{props.data_name}</NavLink>
        </div>
    );
}


export default DdialogItem;
