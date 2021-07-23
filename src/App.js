import React, {Suspense} from "react";
import './App.css';
import Navbar from './components/navbar/navbar'
import {Redirect, Route, Switch, withRouter} from "react-router-dom";
import Footer from "./components/footer/footer";
import HeaderContainer from "./components/header/headerContainer";
import ProfileContainer from "./components/profile/profileContainer";
import {compose} from "redux";
import {connect} from "react-redux";
import {initializeApp} from "./redux/appReducer";
import Preloader from "./utils/common/preloader/Preloader";
import Page404 from "./utils/common/404/page404";
let DialogsContainer = React.lazy(() => import("./components/dialogs/dialogsContainer"));
let UsersContainer = React.lazy(() => import("./components/users/usersContainer"));
let LoginContainer = React.lazy(() => import("./components/login/loginContainer"));

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {

        if (!this.props.initialization) return <Preloader/>

        return (
            <div className='appWrapper'>
                <HeaderContainer/>
                <div className="appInner">
                    <Navbar/>
                    <div className="contentWrapper">
                        <Suspense fallback={<Preloader/>}>
                            <Switch>
                                <Route path='/profile/:userId?'
                                       render={() => <ProfileContainer/>}/>
                                <Route path='/dialogs'
                                       render={() => <DialogsContainer/>}/>
                                <Route path='/users'
                                       render={() => <UsersContainer/>}/>
                                <Route path='/login'
                                       render={() => <LoginContainer/>}/>
                                <Route exact path='/'
                                       render={() => <Redirect to='/profile'/>}/>
                                    <Route path='*'
                                           render={() => <Page404/>}/>
                            </Switch>
                        </Suspense>

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

//TODO: `fix captcha showing`
//TODO: `add filters on users list (maybe reselect?)`
//TODO: `Add profile update and make it look normally`
//TODO: `Add default form values`