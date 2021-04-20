import {connect} from "react-redux";
import Dialogs from "./dialogs";
import {addMessageAC, clearMessageAC, updateMessageTextAC} from "../../redux/dialogsReducer";


let mapStateToProps = (state) => {
    return{
        users: state.dialogsPage.users,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText,
    }
}
let mapDispatchToProps = (dispatch) => {
    return{
        addMessage: () => (dispatch(addMessageAC())),
        clearMessage: () => (dispatch(clearMessageAC())),
        updateMessageText: (text) => (dispatch(updateMessageTextAC(text))),
    }
}


let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer