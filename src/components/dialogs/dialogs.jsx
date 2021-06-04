import React from 'react';
import styles from './dialogs.module.css'
import User from "./user/user";
import Chat from "./chat/chat";
import Login from "../login/login";
import {Redirect} from "react-router-dom";
import { Field, reduxForm } from 'redux-form';

let Dialogs = (props) => {

    let addNewMessage = (values) => {
        props.addMessage(values.newMessageBody)
    }

        let usersElements = props.users.map((u)=><User id={u.id} key={u.id} user={u.user}/>)
        let chatsElements = props.messages.map((c)=><Chat key={c.id} chat={c.chat}/>)

        if(!props.isAuth) return <Redirect to={'/login'} />

    return (
        <div className={styles.dialogs}>
            <h2 className={styles.dialogs__title}>Dialogs</h2>
            <div className={styles.dialogs__inner}>
                <div className={styles.dialogs__column}>
                    {usersElements}
                </div>
                <div className={styles.dialogs__column}>
                    {chatsElements}
                </div>
            </div>

            <DialogsFormRedux onSubmit = {addNewMessage}/>

        </div>
    )
}

export default Dialogs


let DialogsForm = (props) => {
    return <div>
                <form onSubmit={props.handleSubmit}>
                    <Field  component={`textarea`} 
                            name={`newMessageBody`} 
                            className={styles.dialogs__textarea}
                            placeholder='Write your message...'/>
                    <div className={styles.dialogs__buttonsHolder}>
                        <button className={styles.dialogs__button}>Send</button>
                        {/* <button className={styles.dialogs__button}>Clear</button> */}
                    </div>                
                </form>
    </div>
}

const DialogsFormRedux = reduxForm({
    form: `dialogsAddForm`
})(DialogsForm)