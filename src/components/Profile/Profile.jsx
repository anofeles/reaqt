import React from 'react'
import classes from './Profile.module.css'
import MuPost from "./MuPost/MuPost";
import ProfileInfo from "./MuPost/ProfileInfo/ProfileInfo";


function Profile() {
    return (
        <div className={classes.content}>
            <ProfileInfo />
            <MuPost/>
        </div>
    )
}

export default Profile;
