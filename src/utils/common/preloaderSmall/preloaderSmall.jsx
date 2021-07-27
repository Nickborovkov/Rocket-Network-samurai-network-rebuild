import styles from './preloaderSmall.module.css'
import React from "react";
import { BiLoader } from 'react-icons/bi';

let PreloaderSmall = () => {
    return (
        <div>
            <p className = {styles.preloaderSmall}><BiLoader/></p>
        </div>
    )
}

export default PreloaderSmall