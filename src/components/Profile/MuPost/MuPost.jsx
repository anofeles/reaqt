import React from 'react'
import classes from './MuPost.module.css'
import Post from "./post/Post";


function MuPost(props) {
    let postsElements = props.state.post.map(item => <Post key={item.id} message={item.name} like={item.LikeCounts}/>);
    let newPostElemnt = React.createRef();
    let addPost = () => {
        // addPosts(newPostElemnt.current.value);
        // let text = newPostElemnt.current.value;
        // alert(text)
        if(newPostElemnt.current.value != ""){
            props.addPost(newPostElemnt.current.value);
        }
        newPostElemnt.current.value = "";
    };


    return (
        <div className={classes.padding}>
            <h3>my post</h3>
            <div>
                <div>
                    <textarea ref={newPostElemnt}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MuPost;
