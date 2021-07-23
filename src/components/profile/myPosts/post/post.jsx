import React from "react";
import defaultAvatar from '../../../../utils/images/defaultAvatar.jpg'
import styles from '../myPosts.module.css'
import { VscClose } from 'react-icons/vsc';
import { AiOutlineLike } from 'react-icons/ai';

const Post = ({post, deletePost, isOwner, profile}) => {
    return <div className={styles.post}>
        <div className={styles.postAvatarHolder}>
            <img className={styles.postAvatar}
                 src={profile.photos.small || defaultAvatar}
                 alt="postAvatar"/>
        </div>

        <p className={styles.postText}>{post.post}</p>

        <div className={styles.likeSection}>
            <p className={styles.postLikes}>{post.likescount}</p>
            <button className={styles.postLikeButton}><AiOutlineLike/></button>
        </div>
        {
            isOwner &&
            <button className={styles.deleteButton}
                    onClick={ () => {deletePost(post.id)} }><VscClose/></button>
        }

    </div>
}

export default Post