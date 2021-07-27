import {connect} from "react-redux";
import {addMessage, deleteMessage} from "../../redux/dialogsReducer";
import React from 'react';
import Dialogs from "./dialogs";
import { compose } from "redux";
import {withAuthRedirect} from "../../utils/hoc/withAuthRedirect";

class DialogsContainer extends React.Component{
    render(){
        return <Dialogs {...this.props}
                        addMessage = {this.props.addMessage}
                        deleteMessage = {this.props.deleteMessage}
        />
    }
}

const mapStateToProps = (state) => {
    return{
        dialogs: state.dialogsPage.dialogs,
    }
}


export default compose(
    connect(mapStateToProps, {addMessage, deleteMessage}),
    withAuthRedirect,
)(DialogsContainer)