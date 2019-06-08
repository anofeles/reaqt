import React from 'react'
import classes from './Profile.module.css'
import MuPost from "./MuPost/MuPost";


function Profile() {
    return (
        <div className={classes.content}>
            <div>
                <img src={'https://imgcomfort.com/Userfiles/Upload/images/illustration-geiranger.jpg'}/>
            </div>
            <div>
                ava = description
            </div>
            <MuPost/>
        </div>
    )
}

export default Profile;
