import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { setUserProfile } from '../../redux/profileReducer';
import Profile from './profile';


class ProfileContainer extends React.Component{
    componentDidMount(){
        this.props.setUserProfile(this.props.match.params.userId)
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

export default connect(mapStateToProps, {setUserProfile}) (WithUrlDataContainerComponent)
