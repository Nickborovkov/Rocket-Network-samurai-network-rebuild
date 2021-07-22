import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import {
    addPost,
    deletePost,
    setUserProfile,
    setUserStatus,
    updateUserPhoto,
    updateUserStatus
} from '../../redux/profileReducer';
import Profile from './profile';
import { compose } from 'redux';
import {withAuthRedirect} from "../../utils/hoc/withAuthRedirect";


class ProfileContainer extends React.Component{
    refreshProfile = () => {
        let userId = this.props.match.params.userId
        if(!userId){
            userId = this.props.currentUserId
        }
        this.props.setUserProfile(userId)
        this.props.setUserStatus(userId)
    }

    componentDidMount(){
        this.refreshProfile()
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.match.params.userId !== prevProps.match.params.userId){
            this.refreshProfile()
        }
    }

    render(){
        return (
            <Profile {...this.props}
                     addPost = {this.props.addPost}
                     deletePost = {this.props.deletePost}
                     updateUserStatus={this.props.updateUserStatus}
                     isOwner={!this.props.match.params.userId}
                     updateUserPhoto={this.props.updateUserPhoto}/>
            )
    }   
}



let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        profile: state.profilePage.profile,
        userStatus: state.profilePage.userStatus,
        currentUserId: state.auth.userId
    }
}

export default compose(
    connect(mapStateToProps, {setUserProfile, setUserStatus, updateUserStatus,
        addPost, deletePost, updateUserPhoto}),
    withRouter,
    withAuthRedirect,
)(ProfileContainer)
