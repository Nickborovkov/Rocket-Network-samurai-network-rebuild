import styles from './../dialogs.module.css'
import React from "react";
import {NavLink} from "react-router-dom";

class User extends React.Component{
    render(){

        let path = `/dialogs/` + this.props.id

        return <div className={styles.dialogs__user}>
            <NavLink className={styles.dialogs__user} to={path}>{this.props.user}</NavLink>
        </div>
    }
}

export default User