import React from "react";
import './App.css';
import Navbar from './components/navbar/navbar'
import {Route} from "react-router-dom";
import Footer from "./components/footer/footer";
import DialogsContainer from "./components/dialogs/dialogsContainer";
import UsersContainer from "./components/users/usersContainer";
// import ProfileContainer from "./components/profile/profileContainer";
import HeaderContainer from "./components/header/headerContainer";
import LoginContainer from "./components/login/loginContainer";


const App = () => (
    <div className='appWrapper'>
        <HeaderContainer/>
        <div className="appInner">
            <Navbar/>
            <div className="contentWrapper">
                {/*<Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>*/}
                <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                <Route path='/users' render={() => <UsersContainer/>}/>
                <Route path='/login' render={() => <LoginContainer/>}/>
            </div>
        </div>
        <Footer/>
    </div>
);

export default App;

