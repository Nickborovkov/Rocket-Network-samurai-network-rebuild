import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import {addPost, deletePost, setUserProfile, setUserStatus, updateUserStatus} from '../../redux/profileReducer';
import Profile from './profile';
import { compose } from 'redux';
import {withAuthRedirect} from "../../utils/hoc/withAuthRedirect";


class ProfileContainer extends React.Component{
    componentDidMount(){
        let userId = this.props.match.params.userId
        if(!userId){
            userId = 9398
        }
        this.props.setUserProfile(userId)
        this.props.setUserStatus(userId)
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        let userId = this.props.match.params.userId
        if(!userId){
            userId = 9398
        }
        this.props.setUserProfile(userId)
        this.props.setUserStatus(userId)
    }

    render(){
        return (
            <Profile {...this.props}
                     addPost = {this.props.addPost}
                     deletePost = {this.props.deletePost}
                     updateUserStatus={this.props.updateUserStatus}/>
            )
    }   
}



let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        profile: state.profilePage.profile,
        userStatus: state.profilePage.userStatus,
    }
}

export default compose(
    connect(mapStateToProps, {setUserProfile, setUserStatus, updateUserStatus, addPost, deletePost}),
    withRouter,
    withAuthRedirect,
)(ProfileContainer)
