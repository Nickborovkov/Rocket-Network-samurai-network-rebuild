import React from 'react';
import styles from './dialogs.module.css'
import User from "./user/user";
import Chat from "./chat/chat";

class Dialogs extends React.Component{
    render(){

        let onMessageChange = (e) => {
            let text = e.target.value
            this.props.updateMessageText(text)
        }
        let onAddMessage = () => {
            this.props.addMessage()
        }
        let onClearMessage = () => {
            this.props.clearMessage()
        }


        let usersElements = this.props.users.map((u)=><User id={u.id} key={u.id} user={u.user}/>)
        let chatsElements = this.props.messages.map((c)=><Chat key={c.id} chat={c.chat}/>)

        return <div className={styles.dialogs}>
            <h2 className={styles.dialogs__title}>Dialogs</h2>
            <div className={styles.dialogs__inner}>
                <div className={styles.dialogs__column}>
                    {usersElements}
                </div>
                <div className={styles.dialogs__column}>
                    {chatsElements}
                </div>
            </div>
            <textarea className={styles.dialogs__textarea}
                      placeholder='Write your message...'
                      value={this.props.newMessageText}
                      onChange={onMessageChange}></textarea>
            <div className={styles.dialogs__buttonsHolder}>
                <button className={styles.dialogs__button}
                        onClick={onAddMessage}>Send</button>
                <button className={styles.dialogs__button}
                        onClick={onClearMessage}>Clear</button>
            </div>

        </div>
    }
}

export default Dialogs