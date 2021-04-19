import React from "react";
import './App.css';
import Header from './components/header/header';
import Navbar from './components/navbar/navbar'
import Profile from "./components/profile/profile";
import Dialogs from "./components/dialogs/dialogs";
import Users from "./components/users/users";
import {Route} from "react-router-dom";
import Footer from "./components/footer/footer";

function App() {
    return (
        <div className='appWrapper'>
            <Header/>
            <div className="appInner">
                <Navbar />
                <div className="contentWrapper">
                    <Route path='/profile' render={()=><Profile />}/>
                    <Route path='/dialogs' render={()=><Dialogs />}/>
                    <Route path='/users' render={()=><Users />}/>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default App;

