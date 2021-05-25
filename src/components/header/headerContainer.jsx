import React from 'react'
import { connect } from 'react-redux'
import { usersAPI } from '../../API/api'
import { setAuthUserData, setCurrentUSer } from '../../redux/authReducer'
import Header from './header'

class HeaderContainer extends React.Component{
    componentDidMount(){
        usersAPI.auth().then(data => {
            if(data.resultCode === 0){
                let {id, email, login} = data.data
               this.props.setAuthUserData(id, email, login)
               usersAPI.getProfile(data.data.id).then(data => {
                   this.props.setCurrentUSer(data)
               }) 
            }            
        })
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

export default connect(mapStateToProps, {setAuthUserData, setCurrentUSer}) (HeaderContainer)