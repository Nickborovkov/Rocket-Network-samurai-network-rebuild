import React from 'react';
import styles from './profile.module.css'
import MyPostsContainer from "./myPosts/mypostsContainer";
import InfoContainer from "./info/infoContainer";

let Profile = (props) => {
    return (
        <div className={styles.profile}>
            <h2 className={styles.profile__title}>Profile</h2>
            <InfoContainer profile={props.profile}/>
            <MyPostsContainer />
        </div>
    )
}


export default Profile