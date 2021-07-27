import React from 'react';
import styles from './navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = ({toggleFriendsList}) => {
    return <div className={styles.navbar}>
        <NavLink className={styles.navbar__link}
                 activeClassName={styles.navbar__link_active}
                 to='/profile'>Profile</NavLink>
        <NavLink className={styles.navbar__link}
                 activeClassName={styles.navbar__link_active}
                 to='/dialogs'>Dialogs</NavLink>
        <NavLink className={styles.navbar__link}
                 activeClassName={styles.navbar__link_active}
                 to='/users'
                 onClick={ () => {toggleFriendsList(false)} }>Users</NavLink>
        <NavLink className={styles.navbar__link}
                 activeClassName={styles.navbar__link_active}
                 to='/friends'
                 onClick={ () => {toggleFriendsList(true)} }>Friends</NavLink>
    </div>
}

export default Navbar