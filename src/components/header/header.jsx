import React from 'react';
import styles from './header.module.css'
import logo from './../../assets/images/rocket.png'

class Header extends React.Component{
    render(){
        return <div className={styles.header}>
            <img className={styles.header__logo} src={logo} alt="logo"/>
            <p className={styles.header__name}>Rocket Network</p>
        </div>
    }
}

export default Header