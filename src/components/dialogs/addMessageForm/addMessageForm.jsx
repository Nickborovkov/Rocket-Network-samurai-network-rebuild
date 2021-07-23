import {Field, reduxForm} from "redux-form";
import styles from "../dialogs.module.css";
import React from "react";
import {TextArea} from "../../../utils/formHelpers/formControls";
import {maxLengthCreator, required} from "../../../utils/formHelpers/validators";

let maxLength500 = maxLengthCreator(500)

let AddMessageForm = ({addMessage}) => {

    let onAddMessage = (values) => {
        addMessage(values.userMessage)
    }

    return <DialogsFormRedux onSubmit={onAddMessage}/>
}

export default AddMessageForm

let DialogsForm = ({handleSubmit}) => {
    return <form onSubmit={handleSubmit}>
        <Field component={TextArea}
               placeholder='Write your message...'
               className={styles.textarea}
               name='userMessage'
               validate={[required, maxLength500]}/>
        <button className={styles.submitButton}>Send</button>
    </form>
}

let DialogsFormRedux = reduxForm({
    form: `dialogsForm`
})(DialogsForm)