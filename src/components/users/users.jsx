import styles from './users.module.css'
import axios from 'axios';
import React from 'react';
import defaultAvatar from './../../assets/images/defaultAvatar.jpg'

class Users extends React.Component{
    constructor(props){
        super(props);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }
    render(){
        return <div>
            <h2 className={styles.users__title}>Users</h2>
            {
                this.props.users.map(u => <div className={styles.usersWrapper} key={u.id}>
                    <img className={styles.users__avatars} src={u.photos.small != null ? u.photos.small:defaultAvatar} alt="avatar"/>
                    <div className={styles.users__infoWrapper}>
                        <p className={styles.users__property}>{u.name}</p>
                        <p className={styles.users__property}>{u.id}</p>
                        <p className={styles.users__property}>{u.status}</p>
                    </div>
                    <div>
                        {u.followed 
                            ? <button className={styles.users__buttonU}
                                      onClick={()=>{this.props.unFollow(u.id)}}>Unfollow</button>
                            : <button className={styles.users__buttonF}
                                      onClick={()=>{this.props.follow(u.id)}}>Follow</button>
                        }
                    </div>
                </div>   )
            }
        </div>
    }
}

export default Users;