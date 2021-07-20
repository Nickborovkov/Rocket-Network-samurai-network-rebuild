import styles from './../dialogs.module.css'
import React from "react";

const Message = ({messageText, onMessageDelete, message}) => <div>
    <p className={styles.messageText}>{messageText}</p>
    <button onClick={ () => {onMessageDelete(message.id)} }>Delete message</button>
</div>;

export default Message