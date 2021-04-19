import React from 'react';
import styles from './footer.module.css'

class Footer extends React.Component{
    render(){
        return <div className={styles.footer}>
            <p className={styles.footer__text}>Mady by Nick Borovkov</p>
        </div>
    }
}

export default Footer