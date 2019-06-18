import React from 'react'
import classes from './MuPost.module.css'
import Post from "./post/Post";


function MuPost(props) {
    let postsElements = props.profilePage.post.map(item => <Post key={item.id} message={item.name} like={item.LikeCounts}/>);
    let newPostElemnt = React.createRef();
    let addPost = () => {
        // addPosts(newPostElemnt.current.value);
        // let text = newPostElemnt.current.value;
        // alert(text)
        if(props.profilePage.newPostText != ""){
            props.addPost();
        }
    };

    let onPostCheange = () => {
      let text = newPostElemnt.current.value;
       props.onPostCheange(text)
    };

    return (
        <div className={classes.padding}>
            <h3>my post</h3>
            <div>
                <div>
                    <textarea onChange={onPostCheange} ref={newPostElemnt} value={props.profilePage.newPostText}/>
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
