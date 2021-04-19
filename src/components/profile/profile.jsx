import React from 'react';
import styles from './profile.module.css'
import MyPosts from "./myPosts/myposts";

class Profile extends React.Component{
    render(){
        return <div>
            <MyPosts />
        </div>
    }   
}

export default Profile