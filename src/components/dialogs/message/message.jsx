import styles from './../dialogs.module.css'
import React from "react";
import { VscClose } from 'react-icons/vsc';

const Message = ({messageText, onMessageDelete, message}) => {
    return <div className={styles.message}>
        <p className={styles.messageText}>{messageText}</p>
        <button className={styles.deleteButton}
                onClick={ () => {onMessageDelete(message.id)} }><VscClose/></button>
    </div>
}

export default Message