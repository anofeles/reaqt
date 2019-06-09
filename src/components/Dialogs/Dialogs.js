import React from 'react'
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

function DdialogItem(props) {
    return (
        <div className={classes.dialog}>
            <NavLink to={'/Messages/'+props.data_id+''}> {props.data_name}</NavLink>
        </div>
    );
}

function Dialogs() {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_items}>
               <DdialogItem data_id={'1'} data_name={'kakha'}/>
               <DdialogItem data_id={'2'} data_name={'cira'}/>
               <DdialogItem data_id={'3'} data_name={'gabie'}/>
               <DdialogItem data_id={'4'} data_name={'mari'}/>
               <DdialogItem data_id={'5'} data_name={'ruso'}/>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>message</div>
                <div className={classes.message}>message</div>
                <div className={classes.message}>message</div>
            </div>
        </div>
    );
}

export default Dialogs;
