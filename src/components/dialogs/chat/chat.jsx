import styles from './../dialogs.module.css'
import React from "react";

class Chat extends React.Component{
    render(){
        return <div>
            <p className={styles.dialogs__chat}>{this.props.chat}</p>
        </div>
    }
}
export default Chat