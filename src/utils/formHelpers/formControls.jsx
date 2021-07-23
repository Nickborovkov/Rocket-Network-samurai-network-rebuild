import React from "react";
import styles from './formControls.module.css'
import { BiError } from 'react-icons/bi';


export let TextArea = ({input, meta, ...props}) => {
    let hasError = meta.touched && meta.error
    return <div className={`${styles.formBody} ${hasError ? styles.formTextArea : ``}`}>
        <textarea {...input} {...props}></textarea>
        {
            hasError &&
            <div className={styles.formError}>
                <p><BiError/></p>
                <p>{meta.error}</p>
            </div>
        }
    </div>
}

export let Input = ({input, meta, ...props}) => {
    let hasError = meta.touched && meta.error
    return <div className={`${styles.formBody} ${hasError ? styles.formInput : ``}`}>
        <input {...input} {...props}></input>
        {
            hasError &&
            <div className={styles.inpFormError}>
                <p><BiError/>{meta.error}</p>
            </div>
        }
    </div>
}