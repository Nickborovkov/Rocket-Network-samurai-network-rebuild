import styles from "../users.module.css";
import {NavLink} from "react-router-dom";
import defaultAvatar from "../../../utils/images/defaultAvatar.jpg";
import React from "react";

let User = ({user, followingInProgress, follow, unfollow}) => {
    return <div className={styles.user}>
            <NavLink to={'/profile/' + user.id}>
                <div>
                    <img className={styles.userAvatar}
                         src={user.photos.small || defaultAvatar}
                         alt="avatar"/>
                </div>
            </NavLink>
            <div className={styles.userInfoWrapper}>
                <p className={styles.userProperty}>{user.name}</p>
                <p className={styles.userProperty}>{user.id}</p>
                <p className={styles.userProperty}>{user.status}</p>
            </div>
            <div>
                {
                    !user.followed
                        ? <button disabled={followingInProgress.some(id => id === user.id)}
                                  className={styles.followButton}
                                  onClick={ () => {follow(user.id)} }>
                            Follow</button>
                        : <button disabled={followingInProgress.some(id => id === user.id)}
                                  className={styles.followButton}
                                  onClick={ () => {unfollow(user.id)} }>
                            UnFollow</button>
                }
            </div>
        </div>
}

export default User