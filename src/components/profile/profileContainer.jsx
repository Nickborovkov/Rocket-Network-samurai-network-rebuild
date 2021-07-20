import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { setUserProfile } from '../../redux/profileReducer';
import Profile from './profile';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';


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
        profile: state.profilePage.profile,        
    }
}

export default compose(
    connect(mapStateToProps, {setUserProfile}),
    withRouter,
    withAuthRedirect,  
)(ProfileContainer)
