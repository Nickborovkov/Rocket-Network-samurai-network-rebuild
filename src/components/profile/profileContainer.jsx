import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { getStatus, setUserProfile, updateStatus } from '../../redux/profileReducer';
import Profile from './profile';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import Preloader from '../common/preloader/Preloader';


class ProfileContainer extends React.Component{
    componentDidMount(){
        
        let userId = this.props.match.params.userId
        if(!userId){
            userId = 9398
        }
        this.props.setUserProfile(userId)
        this.props.getStatus(userId)
    }
    render(){       
        return <>
                {
                    this.props.profile 
                    ? <Profile {...this.props} 
                               profile={this.props.profile}
                               status = {this.props.status}
                               updateStatus = {this.props.updateStatus}/>
                    : <Preloader />
                }
                </>
            
    }   
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,        
        status: state.profilePage.status,        
    }
}

export default compose(
    connect(mapStateToProps, {setUserProfile, getStatus, updateStatus}),
    withRouter,
    withAuthRedirect,  
)(ProfileContainer)
