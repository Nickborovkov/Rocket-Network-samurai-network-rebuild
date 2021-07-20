import React from "react";
import Login from "./login";
import {connect} from "react-redux";
import {compose} from "redux";
import {loginNewUser} from "../../redux/authReducer";

class LoginContainer extends React.Component{
    render() {
        return <Login {...this.props}
                      loginNewUser = {this.props.loginNewUser}/>
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
};

export default compose(
    connect(mapStateToProps, {loginNewUser})
)(LoginContainer)