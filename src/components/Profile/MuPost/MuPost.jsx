import React from 'react'
import classes from './MuPost.module.css'
import Post from "./post/Post";



function MuPost() {
    let posts = [
        {id: 1, name: 'post',LikeCounts: 11},
        {id: 2, name: 'post1',LikeCounts: 15}
    ]

    return (
        <div className={classes.padding}>
            <h3>my post</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add</button>
                </div>
            </div>
            <div className={classes.posts}>
                {posts.map(item => <Post message={item.name} like={item.LikeCounts}/>)}
            </div>
        </div>
    )
}

export default MuPost;
