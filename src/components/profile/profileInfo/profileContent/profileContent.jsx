import styles from "../profileInfo.module.css";
import React, {useState} from "react";
import cn from "classnames";
import { BsGear } from 'react-icons/bs';
import ProfileEdit from "./profileEdit/profileEdit";

import { AiFillFacebook } from 'react-icons/ai';
import { CgWebsite } from 'react-icons/cg';
import { FaVk } from 'react-icons/fa';
import { AiFillTwitterSquare } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import { FaUserAlt } from 'react-icons/fa';


let ProfileContent = ({profile, updateUserProfile, isOwner}) => {

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
        {
            isOwner && !editMode &&
            <button className={styles.editOpenButton} onClick={activateEditMode}><BsGear/></button>
        }
        {
            !editMode && <div>
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
                    <div className={styles.infoRow}>
                        <h3 className={styles.infoSubtitle}>Contacts</h3>
                        <div className={styles.contactsList}>
                            {
                                Object.keys(profile.contacts).map(key => {
                                    if (!profile.contacts[key]) return null
                                    return <Contact key={key} key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
                                })
                            }
                        </div>

                    </div>
                </div>
            </div>

        }
    </div>
}

export default ProfileContent

let Contact = ({contactTitle, contactValue}) => {
    if(contactTitle == `facebook`){
        return <a className={styles.link} href={contactValue}><AiFillFacebook/></a>
    }
    if(contactTitle == `website`){
        return <a className={styles.link} href={contactValue}><CgWebsite/></a>
    }
    if(contactTitle == `vk`){
        return <a className={styles.link} href={contactValue}><FaVk/></a>
    }
    if(contactTitle == `twitter`){
        return <a className={styles.link} href={contactValue}><AiFillTwitterSquare/></a>
    }
    if(contactTitle == `instagram`){
        return <a className={styles.link} href={contactValue}><AiFillInstagram/></a>
    }
    if(contactTitle == `youtube`){
        return <a className={styles.link} href={contactValue}><AiFillYoutube/></a>
    }
    if(contactTitle == `github`){
        return <a className={styles.link} href={contactValue}><AiFillGithub/></a>
    }
    if(contactTitle == `mainLink`){
        return <a className={styles.link} href={contactValue}><FaUserAlt/></a>
    }
}