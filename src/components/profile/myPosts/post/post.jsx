import styles from './post.module.css'
import React from "react";

class Post extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return <div>
            <img src={this.props.avatar} alt="avatar"/>
            <p>{this.props.post}</p>
            <p>{this.props.likescount}</p>
            <button>Like</button>
        </div>
    }
}

export default Post