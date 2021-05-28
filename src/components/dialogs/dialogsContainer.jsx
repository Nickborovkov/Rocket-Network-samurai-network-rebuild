import {connect} from "react-redux";
import {addMessage, clearMessage, updateMessageText} from "../../redux/dialogsReducer";

import React from 'react';
import Dialogs from "./dialogs";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class DialogsContainer extends React.Component{
    render(){
        return <>
            <Dialogs updateMessageText = {this.props.updateMessageText}
                     addMessage = {this.props.addMessage}
                     clearMessage = {this.props.clearMessage}
                     users = {this.props.users}
                     messages = {this.props.messages}
                     newMessageText = {this.props.newMessageText}
                     isAuth = {this.props.isAuth}/>
        </>
        
    }
}

let mapStateToProps = (state) => {
    return{
        users: state.dialogsPage.users,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText,
    }
}


export default compose(
    connect(mapStateToProps, {addMessage, clearMessage, updateMessageText}),
    withAuthRedirect
)(Dialogs)