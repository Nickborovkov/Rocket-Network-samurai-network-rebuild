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


const ProfileContent = ({profile, updateUserProfile, isOwner}) => {

    const [editMode, setEditMode] = useState(false)
    const activateEditMode = () => {
        setEditMode(true)
    }
    const deActivateEditMode = () => {
        setEditMode(false)
    }


    const iconsArray = [<AiFillFacebook/>, <CgWebsite/>, <FaVk/>, <AiFillTwitterSquare/>,
        <AiFillInstagram/>, <AiFillYoutube/>, <AiFillGithub/>, <FaUserAlt/>]

    const result = []

    for(let i = 1; i < iconsArray.length; i++){
        result.push({id:iconsArray.indexOf(iconsArray[i]),
            link: Object.values(profile.contacts)[i],
            icon: iconsArray[i]})
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
                                result.map(contact => {
                                    return <Contact key={contact.id}
                                                    contactUrl={contact.link}
                                                    contactIcon={contact.icon}/>
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

const Contact = ({contactUrl, contactIcon}) => {
    return <a className={styles.link} href={contactUrl}>{contactIcon}</a>
}