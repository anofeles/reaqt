import React from 'react'
import classes from './Post.module.css'


function Post(props) {
    return (

        <div className={classes.item}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyFw0m7GxOgbn11wycWvEcaAqr_PxV7nJDhGSKFh9R9THANp_v9A"/>
            <span className={classes.post}>
                {props.message}
            </span>
            <div>
                <span>like: {props.like}</span>
            </div>
        </div>

    )
}

export default Post;
