import React from "react";
import './App.css';
import Navbar from './components/navbar/navbar'
import {Route, withRouter} from "react-router-dom";
import Footer from "./components/footer/footer";
import DialogsContainer from "./components/dialogs/dialogsContainer";
import UsersContainer from "./components/users/usersContainer";
import ProfileContainer from "./components/profile/profileContainer";
import HeaderContainer from "./components/header/headerContainer";
import LoginContainer from "./components/login/loginContainer";
import {compose} from "redux";
import {connect} from "react-redux";
import {initializeApp} from "./redux/appReducer";
import Preloader from "./utils/common/preloader/Preloader";


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {

        if(!this.props.initialization) return <Preloader/>

        return (
            <div className='appWrapper'>
                <HeaderContainer/>
                <div className="appInner">
                    <Navbar/>
                    <div className="contentWrapper">
                        <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                        <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                        <Route path='/users' render={() => <UsersContainer/>}/>
                        <Route path='/login' render={() => <LoginContainer/>}/>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}


let mapStateToProps = (state) => {
    return {
        initialization: state.app.initialization
    }
}


export default compose(
    connect(mapStateToProps, {initializeApp}),
    withRouter,
)(App)

//TODO: `lazy loading + sub`
//TODO: `encapsulate some components`
//TODO: `add filters on users list (maybe reselect?)`
//TODO: `add initialization`
//TODO: `add captcha`
//TODO: `add stopSubmit`
//TODO: `add formControls + errors handling`
//TODO: `add status`
//TODO: `redux-ducks`
//TODO: `image loading, status renew`
//TODO: `redirect to profile when `/``
//TODO: `404 page`
//TODO: `add icons`

