import React from 'react'
import styles from './users.module.css'
import User from "./user/user";
import Paginator from "../../utils/common/paginator/paginator";
import Preloader from "../../utils/common/preloader/Preloader";


let Users = ({users, isFetching, followingInProgress, follow, unfollow, totalUsersCount, pageSize, currentPage, onPageChanged}) => {
    return <div>
        <h2 className={styles.users__title}>Users</h2>
        {
            isFetching
                ? <Preloader />
                : <div className={styles.users}>
                     {
                         users.map(u => <User key={u.id}
                                             user = {u}
                                             followingInProgress = {followingInProgress}
                                             follow = {follow}
                                             unfollow = {unfollow}
                         />)
                     }
                 </div>
        }

        <Paginator totalItemsCount = {totalUsersCount}
                   pageSize = {pageSize}
                   currentPage = {currentPage}
                   onPageChanged = {onPageChanged}
        />
        </div>
        }

export default Users