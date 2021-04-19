import React from 'react';
import styles from './navbar.module.css'
import {NavLink} from "react-router-dom";

class Navbar extends React.Component{
    render(){
        return <div className={styles.navbar}>
            <NavLink className={styles.navbar__link} activeClassName={styles.navbar__link_active} to='/profile' >Profile</NavLink>
            <NavLink className={styles.navbar__link} activeClassName={styles.navbar__link_active} to='/dialogs' >Dialogs</NavLink>
            <NavLink className={styles.navbar__link} activeClassName={styles.navbar__link_active} to='/users' >Users</NavLink>
        </div>
    }

}

export default Navbar