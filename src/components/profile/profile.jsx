import React from 'react';
import styles from './profile.module.css'
import MyPosts from "./myPosts/myposts";
import ProfileInfo from "./profileInfo/profileInfo";

let Profile = ({profile, userStatus, updateUserStatus, posts, addPost, deletePost}) => {
    return (
        <div className={styles.profile}>
            <h2 className={styles.title}>Profile</h2>
            <ProfileInfo profile={profile}
                         userStatus={userStatus}
                         updateUserStatus={updateUserStatus}/>
            <MyPosts posts={posts}
                     profile={profile}
                     addPost={addPost}
                     deletePost={deletePost}/>
        </div>
    )
}


export default Profile