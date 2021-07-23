import React from 'react';
import styles from './dialogs.module.css'
import Message from "./message/message";
import AddMessageForm from "./addMessageForm/addMessageForm";

let Dialogs = ({addMessage, deleteMessage, dialogs}) => {



    let onMessageDelete = (messageId) => {
        deleteMessage(messageId)
    }

    return (
        <div className={styles.dialogs}>
            <h2 className={styles.title}>Dialogs</h2>
            <div className={styles.dialogsHolder}>
                    {
                        dialogs.map( (m) => <Message key={m.id}
                                                     messageText = {m.dialog}
                                                     onMessageDelete = {onMessageDelete}
                                                     message = {m}
                        />)
                    }
            </div>

            <AddMessageForm addMessage={addMessage}/>

        </div>
    )
}

export default Dialogs

