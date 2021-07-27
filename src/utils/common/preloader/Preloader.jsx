import React from 'react'
import { BiLoader } from 'react-icons/bi';
import styles from './preloader.module.css'


let Preloader = () => {
    return <div>
                <div className={styles.preloader}><BiLoader/></div>
            </div>
}

export default Preloader