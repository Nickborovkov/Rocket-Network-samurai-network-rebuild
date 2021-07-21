import React from "react";
import defaultAvatar from '../../../../utils/images/defaultAvatar.jpg'

const Post = ({post}) => {
    return <div>
        <img src={defaultAvatar} alt="postAvatar"/>
        <p>{post.post}</p>
        <p >{post.likescount}</p>
        <button>Like</button>
    </div>
}

export default Post