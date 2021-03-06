import React from 'react'
import classes from './Profile.module.css'
import MuPost from "./MuPost/MuPost";
import ProfileInfo from "./MuPost/ProfileInfo/ProfileInfo";




function Profile(props) {

    return (
        <div className={classes.content}>
            <ProfileInfo />
            <MuPost onPostCheange={props.onPostCheange} newPostText={props.newPostText} profilePage={props.profilePage} addPost={props.addPost}/>
        </div>
    )
}

export default Profile;
