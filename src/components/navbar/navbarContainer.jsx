import Navbar from "./navbar";
import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {toggleFriendsList} from "../../redux/usersReducer";

class NavbarContainer extends React.Component{
    render() {
        return <Navbar toggleFriendsList={this.props.toggleFriendsList}/>
    }
}


export default compose(
    connect(null, {toggleFriendsList})
)(NavbarContainer)