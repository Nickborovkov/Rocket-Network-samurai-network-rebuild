import React from "react";
import Post from "./post/post";
import AddPostForm from "./addPostForm/AddPostForm";

const MyPosts = ({posts, addPost}) => {
    return <div>
        <h2>My posts</h2>
        <div>
            <AddPostForm addPost={addPost}/>
        </div>
        <div>
            {
                posts.map(p => <Post key={p.id} post={p}/>)
            }
        </div>
    </div>
};

export default MyPosts