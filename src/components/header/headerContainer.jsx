import React from 'react'
import { connect } from 'react-redux'
import { setAuthUserData, setAuthUsers, setCurrentUSer } from '../../redux/authReducer'
import Header from './header'

class HeaderContainer extends React.Component{
    componentDidMount(){
        this.props.setAuthUsers()
    }
    render(){
        return <Header {...this.props}/>
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

export default connect(mapStateToProps, {setAuthUsers}) (HeaderContainer)