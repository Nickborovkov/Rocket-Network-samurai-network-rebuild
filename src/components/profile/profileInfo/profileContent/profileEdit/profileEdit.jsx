import React from "react";
import {Field, reduxForm} from "redux-form";
import styles from './profileEdit.module.css'
import { AiFillSave } from 'react-icons/ai';

let ProfileEdit = ({deActivateEditMode, updateUserProfile, profile}) => {

    let onProfileUpdate = (formData) => {
        updateUserProfile(formData).then(()=>{
            deActivateEditMode()
        })
    }
    return <div>
        <ProfileEditFormRedux onSubmit={onProfileUpdate}
                              profile={profile}
                              initialValues={profile}/>
    </div>
}

export default ProfileEdit

let ProfileEditForm = ({handleSubmit, profile}) => {
    return <form className={styles.editForm} onSubmit={handleSubmit}>
        <div>
            <p className={styles.contactTitle}>Full name</p>
            <Field className={styles.input} type='text'
                   component='input'
                   name='fullName'/>
        </div>
        <div>
            <p className={styles.contactTitle}>About me</p>
            <Field className={styles.textarea} type='text'
                   component='textarea'
                   name='aboutMe'/>
        </div>
        <div>
            <p className={styles.contactTitle}>Professional skills</p>
            <Field className={styles.textarea} type='text'
                   component='textarea'
                   name='lookingForAJobDescription'/>
        </div>
        <div>
            <p className={styles.contactTitle}>Are you looking for a job?</p>
            <Field className={styles.checkbox}
                   type='checkbox'
                   component='input'
                    name='lookingForAJob'/>
        </div>
        {
            Object.keys(profile.contacts).map(key => {
                return <div>
                    <p className={styles.contactTitle}>{key}</p>
                    <Field className={styles.input}
                           key={key}
                           component='input'
                           type='text'
                           name={`contacts.` + key}/>
                </div>
            })
        }
        <button className={styles.saveButton}><AiFillSave /></button>
    </form>
}

let ProfileEditFormRedux = reduxForm({
    form: `profileEdit`
})(ProfileEditForm)