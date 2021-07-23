import React, {useEffect, useState} from 'react';
import styles from './header.module.css'
import logo from '../../utils/images/rocket.png'
import defaultAvatar from '../../utils/images/defaultAvatar.jpg'
import PreloaderSmall from "../../utils/common/preloaderSmall/preloaderSmall";
import { BiLogIn } from 'react-icons/bi';
import {NavLink} from "react-router-dom";

let Header = ({currentUser, logoutNewUser, isAuth, login}) => {

    let [logout, setLogout] = useState(false)
    useEffect(() => {
        setLogout(false)
    }, [isAuth])

    let showLogout = () => {
        setLogout(true)
    }
    let hideLogout = () => {
        setLogout(false)
    }

    return <div className={styles.header}>
        <img className={styles.logo}
             src={logo}
             alt="logo"/>
        <p className={styles.name}>Rocket Network</p>

        {
            !isAuth
                ? <NavLink className={styles.login}
                           to={`/login`}>
                    Login <BiLogIn />
            </NavLink>
                : <div>
                    {
                        !currentUser
                            ? <PreloaderSmall/>
                            : <div className={styles.loggedUserBlock}
                                   onMouseEnter={showLogout}
                                   onMouseLeave={hideLogout}>
                                    <NavLink to='/profile'>
                                        <img className={styles.avatar}
                                             src={currentUser.photos.small || defaultAvatar}
                                             alt="avatar"
                                        />
                                    </NavLink>
                                <div className={styles.userBlockInner}>
                                    <p className={styles.userLogin}>{login}</p>
                                    {logout &&
                                    <button className={styles.logoutButton}
                                            onClick={logoutNewUser}>Logout</button>}

                                </div>

                            </div>
                    }
                </div>
        }
    </div>
}

export default Header