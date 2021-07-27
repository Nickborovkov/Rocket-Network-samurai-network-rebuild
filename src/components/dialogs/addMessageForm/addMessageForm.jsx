import {Field, reduxForm, reset} from "redux-form";
import styles from "../dialogs.module.css";
import React from "react";
import {TextArea} from "../../../utils/formHelpers/formControls";
import {maxLengthCreator, required} from "../../../utils/formHelpers/validators";

const maxLength500 = maxLengthCreator(500)

const AddMessageForm = ({addMessage}) => {

    const onAddMessage = (values, dispatch) => {
        addMessage(values.userMessage)
        dispatch(reset(`dialogsForm`))
    }

    return <DialogsFormRedux onSubmit={onAddMessage}/>
}

export default AddMessageForm

const DialogsForm = ({handleSubmit}) => {
    return <form onSubmit={handleSubmit}>
        <Field component={TextArea}
               placeholder='Write your message...'
               className={styles.textarea}
               name='userMessage'
               validate={[required, maxLength500]}/>
        <button className={styles.submitButton}>Send</button>
    </form>
}

const DialogsFormRedux = reduxForm({
    form: `dialogsForm`
})(DialogsForm)