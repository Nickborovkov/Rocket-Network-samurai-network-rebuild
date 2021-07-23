import React from "react";
import Post from "./post/post";
import AddPostForm from "./addPostForm/AddPostForm";
import styles from './myPosts.module.css'

const MyPosts = ({posts, addPost, deletePost, isOwner, profile}) => {
    return <div className={styles.myPosts}>
        <h2 className={styles.title}>My posts</h2>
        <div>
            {
                isOwner &&
                <AddPostForm addPost={addPost}/>
            }

        </div>
        <div className={styles.postList}>
            {
                posts.map(p => <Post key={p.id}
                                     post={p}
                                     deletePost={deletePost}
                                     isOwner={isOwner}
                                     profile={profile}/>)
            }
        </div>
    </div>
};

export default MyPosts