import React from 'react'
import { connect } from 'react-redux'
import {logoutNewUser, setAuthUsers} from '../../redux/authReducer'
import Header from './header'
import {compose} from "redux";

class HeaderContainer extends React.Component{
    render(){
        return <Header {...this.props}
                       logoutNewUser = {this.props.logoutNewUser}/>
    }
}

const mapStateToProps = (state) => {
    return {
        userId: state.auth.userId,
        email: state.auth.email,
        login: state.auth.login,
        isAuth: state.auth.isAuth,
        currentUser: state.auth.currentUser,
    }
}

export default compose(
    connect(mapStateToProps, {setAuthUsers, logoutNewUser})
)(HeaderContainer)