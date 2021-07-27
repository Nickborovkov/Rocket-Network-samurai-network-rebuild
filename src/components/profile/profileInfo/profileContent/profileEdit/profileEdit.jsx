import React from "react";
import {Field, reduxForm} from "redux-form";
import styles from './profileEdit.module.css'
import { AiFillSave } from 'react-icons/ai';

const ProfileEdit = ({deActivateEditMode, updateUserProfile, profile}) => {

    const onProfileUpdate = (formData) => {
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

const ProfileEditForm = ({handleSubmit, profile}) => {
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
                return <div key={key}>
                    <p className={styles.contactTitle}>{key}</p>
                    <Field className={styles.input}
                           component='input'
                           type='text'
                           name={`contacts.` + key}/>
                </div>
            })
        }
        <button className={styles.saveButton}><AiFillSave /></button>
    </form>
}

const ProfileEditFormRedux = reduxForm({
    form: `profileEdit`
})(ProfileEditForm)