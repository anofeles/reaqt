import React from 'react'
import classes from './ProfileInfo.module.css'



function ProfileInfo() {
    return (
        <div >
            <div>
                <img src={'https://imgcomfort.com/Userfiles/Upload/images/illustration-geiranger.jpg'}/>
            </div>
            <div className={classes.padding}>
                ava = description
            </div>
        </div>
    )
}

export default ProfileInfo;
