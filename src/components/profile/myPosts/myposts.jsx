import React from "react";
import Post from "./post/post";

class MyPosts extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){

        let postsElements = this.props.posts.map((p)=><Post key={p.id} avatar={p.avatar} post={p.post} likescount={p.likescount}/>)

        return <div>
            {postsElements}
        </div>
    }
}

export default MyPosts