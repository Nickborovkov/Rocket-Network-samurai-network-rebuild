import React from 'react';
import styles from './dialogs.module.css'
import Message from "./chat/message";
import {Field, reduxForm} from "redux-form";

let Dialogs = ({addMessage, deleteMessage, dialogs}) => {

    let onAddMessage = (values) => {
        addMessage(values.userMessage)
    }

    let onMessageDelete = (messageId) => {
        deleteMessage(messageId)
    }

    return (
        <div className={styles.dialogs}>
            <h2 className={styles.title}>Dialogs</h2>
            <div className={styles.inner}>
                <div className={styles.dialogs__column}>
                    {
                        dialogs.map( (m) => <Message key={m.id}
                                                     messageText = {m.dialog}
                                                     onMessageDelete = {onMessageDelete}
                                                     message = {m}
                        />)
                    }
                </div>
            </div>

            <DialogsFormRedux onSubmit={onAddMessage}/>
        </div>
    )
}

export default Dialogs

let DialogsForm = ({handleSubmit}) => {
    return <form onSubmit={handleSubmit}>
        <Field component='textarea'
               placeholder='Write your message...'
               className={styles.dialogs__textarea}
               name='userMessage'/>
               <button className={styles.dialogs__button}>Send</button>
    </form>
}

let DialogsFormRedux = reduxForm({
    form: `dialogsForm`
})(DialogsForm)