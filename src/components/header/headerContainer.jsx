import axios from 'axios'
import React from 'react'
import { connect } from 'react-redux'
import { setAuthUserData, setCurrentUSer } from '../../redux/authReducer'
import Header from './header'

class HeaderContainer extends React.Component{
    componentDidMount(){
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        }).then(response => {
            if(response.data.resultCode === 0){
                let {id, email, login} = response.data.data
               this.props.setAuthUserData(id, email, login)
               axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${response.data.data.id}`).then(response => {
                   this.props.setCurrentUSer(response.data)
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