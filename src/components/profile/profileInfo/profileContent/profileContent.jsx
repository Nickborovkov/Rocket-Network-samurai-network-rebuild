import styles from "../profileInfo.module.css";
import {AiOutlineLink} from "react-icons/ai";
import React, {useState} from "react";
import cn from "classnames";
import { BsGear } from 'react-icons/bs';
import ProfileEdit from "./profileEdit/profileEdit";

let ProfileContent = ({profile, updateUserProfile}) => {

    let [editMode, setEditMode] = useState(false)
    let activateEditMode = () => {
        setEditMode(true)
    }
    let deActivateEditMode = () => {
        setEditMode(false)
    }

    return <div className={styles.propsHolder}>

        {
            editMode &&
            <ProfileEdit deActivateEditMode={deActivateEditMode}
                         updateUserProfile={updateUserProfile}
                         profile={profile}/>
        }
        <button onClick={activateEditMode}><BsGear/></button>
        <div className={styles.infoRow}>
            <h3 className={styles.infoSubtitle}>Info</h3>
            <p className={styles.infoValue}>{profile.aboutMe}</p>
        </div>

        <div className={styles.infoRow}>
            <h3 className={styles.infoSubtitle}>Professional Skills</h3>
            <p className={styles.infoValue}>{profile.lookingForAJobDescription}</p>
            {
                profile.lookingForAJob
                    ? <p className={cn(styles.infoValue, styles.jobStatus)}>Looking for a job</p>
                    : <p className={cn(styles.infoValue, styles.jobStatus)}>Not looking for a job</p>
            }
        </div>

        <div className={styles.infoRow}>
            <h3 className={styles.infoSubtitle}>Contacts</h3>
            {
                Object.keys(profile.contacts).map(key => {
                    if (!profile.contacts[key]) return null
                    return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
                })
            }
        </div>
    </div>
}

export default ProfileContent

let Contact = ({contactTitle, contactValue}) => {
    return <div className={styles.linkHolder}>
        <p className={styles.linkTitle}>{contactTitle}</p>
        <a className={styles.link} href={contactValue}><AiOutlineLink/></a>
    </div>
}