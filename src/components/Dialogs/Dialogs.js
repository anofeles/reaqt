import React from 'react'
import classes from './Dialogs.module.css'

function Dialogs() {
    return (
      <div className={classes.dialogs}>
          <div className={classes.dialogs_items}>
             <div className={classes.dialog}>dialog</div>
             <div className={classes.dialog}>dialog</div>
             <div className={classes.dialog}>dialog</div>
             <div className={classes.dialog}>dialog</div>
             <div className={classes.dialog}>dialog</div>
             <div className={classes.dialog}>dialog</div>
             <div className={classes.dialog}>dialog</div>
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
