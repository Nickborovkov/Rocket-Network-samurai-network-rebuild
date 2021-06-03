import React from 'react'
import {connect} from "react-redux";
import { compose } from 'redux';
import { addPost, clearPost, updatePostText } from '../../../redux/profileReducer';
import MyPosts from "./myposts";

class MyPostsContainer extends React.Component{
    render(){
        return <MyPosts {...this.props}/>
    }
}

let mapStateToProps = (state) => {
    return{
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.posts
    }
}

export default compose(
    connect(mapStateToProps, {addPost, clearPost, updatePostText})
)(MyPostsContainer) 

