import React from 'react'
import classes from './MuPost.module.css'
import Post from "./post/Post";


function MuPost() {
    return (
        <div>
            my post

            <div>
                new post
            </div>
            <div className={classes.posts}>
                <Post message={'post'}/>
                <Post message={'post1'}/>
                <Post message={'post2'}/>
                <Post message={'post3'}/>
            </div>
        </div>
    )
}

export default MuPost;
