import styles from './myposts.module.css'
import React from "react";
import Post from "./post/post";

class MyPosts extends React.Component{
    render(){
        let postsElements = this.props.posts.map((p)=><Post key={p.id} avatar={p.avatar} post={p.post} likescount={p.likescount}/>)

        return <div className={styles.myposts}>
            <h2 className={styles.myposts__title}>My posts</h2>
            <textarea className={styles.myposts__textarea}
                      onChange={onUpdatePostText}
                      value={this.props.newPostText}
                      placeholder='Write something...'></textarea>
            <div className={styles.myposts__buttonsWrapper}>
                <button className={styles.myposts__button} onClick={onAddPost}>Send</button>
            </div>
            {postsElements}
        </div>
    }
}

export default MyPosts