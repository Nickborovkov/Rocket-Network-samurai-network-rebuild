import React from 'react'
import styles from './users.module.css'
import defaultAvatar from './../../assets/images/defaultAvatar.jpg'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import { usersAPI } from '../../API/api'

let Users = (props) => {

    let pagesCount =  Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);            
    }

    return <div>
        <h2 className={styles.users__title}>Users</h2>
        {
            props.users.map(u => <div className={styles.usersWrapper} key={u.id}>
                <NavLink to={'/profile/' + u.id}>
                    <div>
                        <img className={styles.users__avatars} src={u.photos.small != null ? u.photos.small:defaultAvatar} alt="avatar"/> 
                    </div>
                </NavLink>
                
                
                <div className={styles.users__infoWrapper}>
                    <p className={styles.users__property}>{u.name}</p>
                    <p className={styles.users__property}>{u.id}</p>
                    <p className={styles.users__property}>{u.status}</p>
                </div>
                <div>
                    {!u.followed 
                        ? <button className={styles.users__buttonU}
                                onClick={ () => { 
                                    usersAPI.followUser(u.id).then(data => {
                                        if(data.resultCode === 0) {
                                            props.follow(u.id)
                                        }
                                    })
                                } }>Follow</button>
                        : <button className={styles.users__buttonF}
                                onClick={ () => {
                                    usersAPI.unFollowUser(u.id).then(data => {
                                        if(data.resultCode === 0) {
                                           props.unFollow(u.id)
                                        }
                                    })                                   
                                    
                                    
                                } }>UnFollow</button>
                    }
                </div>
            </div>   )
        }
        <div className={styles.users__pages}>
                    {pages.map(p => {
                    return <span className={props.currentPage === p && styles.users__selectedPage}
                    onClick={() => {props.onPageChanged(p)}}>{p}</span>
                })}                
            </div>
        </div>
        }

export default Users