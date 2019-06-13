import React from 'react'
import classes from './Profile.module.css'
import MuPost from "./MuPost/MuPost";
import ProfileInfo from "./MuPost/ProfileInfo/ProfileInfo";




function Profile(props) {

    return (
        <div className={classes.content}>
            <ProfileInfo />
            <MuPost state={props.state} addPost={props.addPost}/>
        </div>
    )
}

export default Profile;
