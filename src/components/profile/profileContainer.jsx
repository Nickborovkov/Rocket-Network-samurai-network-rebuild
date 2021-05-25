import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { usersAPI } from '../../API/api';
import { setUsersProfile } from '../../redux/profileReducer';
import Profile from './profile';


class ProfileContainer extends React.Component{
    componentDidMount(){
        let userId = this.props.match.params.userId
        if(!userId){
            userId = 9398
        }
        usersAPI.getProfile(userId).then(data => {
            this.props.setUsersProfile(data)
        })
    }
    render(){
        return (
            <Profile {...this.props} profile={this.props.profile}/>
            )
    }   
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUsersProfile}) (WithUrlDataContainerComponent)
