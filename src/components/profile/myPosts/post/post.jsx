import styles from './post.module.css'
import React from "react";

class Post extends React.Component{
    render(){
        return <div className={styles.post}>
            <img className={styles.post__avatar} src={this.props.avatar} alt="avatar"/>
            <p className={styles.post__text}>{this.props.post}</p>
            <div className={styles.post__likesWrapper}>
                <p className={styles.post__likes}>{this.props.likescount}</p>
                <button className={styles.post__button}>Like</button>
            </div>
        </div>
    }
}

export default Post