import React from 'react'
import { connect } from 'react-redux'
import {logoutNewUser, setAuthUsers} from '../../redux/authReducer'
import Header from './header'

class HeaderContainer extends React.Component{
    componentDidMount(){
        this.props.setAuthUsers()
    }
    render(){
        return <Header {...this.props}
                       logoutNewUser = {this.props.logoutNewUser}/>
    }
}

let mapStateToProps = (state) => {
    return {
        userId: state.auth.userId,
        email: state.auth.email,
        login: state.auth.login,
        isAuth: state.auth.isAuth,
        currentUser: state.auth.currentUser,
    }
}

export default connect(mapStateToProps, {setAuthUsers, logoutNewUser}) (HeaderContainer)