import React from "react";
import './App.css';
import Header from './components/header/header';
import Navbar from './components/navbar/navbar'
import {Route} from "react-router-dom";
import Footer from "./components/footer/footer";
import DialogsContainer from "./components/dialogs/dialogsContainer";
import UsersContainer from "./components/users/usersContainer";
import ProfileContainer from "./components/profile/profileContainer";


function App() {
    return (
        <div className='appWrapper'>
            <Header/>
            <div className="appInner">
                <Navbar />
                <div className="contentWrapper">
                    <Route path='/profile' render={()=><ProfileContainer />}/>
                    <Route path='/dialogs' render={()=><DialogsContainer />}/>
                    <Route path='/users' render={()=><UsersContainer />}/>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default App;

