import React from 'react'
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

function DdialogItem(props) {
    let path = '/Messages/' + props.data_id;
    return (
        <div className={classes.dialog}>
            <NavLink to={path} activeClassName={classes.acrive}>{props.data_name}</NavLink>
        </div>
    );
}

function Meddages(props) {
    return (
        <div className={classes.message}>{props.name}</div>
    );
}

function Dialogs() {
    let userDualog = [
        { id: 1,name: 'kakha'},
        { id: 2,name: 'cira'},
        { id: 3,name: 'gabie'},
        { id: 4,name: 'mari'},
        { id: 5,name: 'ruso'}
    ];
    let userMesages = [
        { id: 1,name: 'hi'},
        { id: 2,name: 'dfgdfs'},
        { id: 3,name: 'gaasdfsadbie'},
        { id: 4,name: 'maasdfasdri'},
        { id: 5,name: 'trhgfhvdbcxv'}
    ];
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_items}>
                {userDualog.map(el => (<DdialogItem data_id={el.id} data_name={el.name}/>))}
            </div>
            <div className={classes.messages}>
                {userMesages.map(el => (<Meddages name={el.name} />))}
            </div>
        </div>
    );
}

export default Dialogs;
