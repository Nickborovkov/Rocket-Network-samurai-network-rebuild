import React from "react";
import defaultAvatar from '../../../utils/images/defaultAvatar.jpg'
import Preloader from "../../../utils/common/preloader/Preloader";
import styles from '../profile.module.css'
import { AiOutlineLink } from 'react-icons/ai';
import ProfileStatus from "./profileStatus/profileStatus";


let ProfileInfo = ({profile, userStatus, updateUserStatus}) => {

    if (!profile) {
        return <Preloader/>
    }
    return <div className={styles.profileInfo}>
        <div className={styles.profileInner}>
            <div className={styles.avatarHolder}>
                <img className={styles.avatar} src={profile.photos.large || defaultAvatar}
                     alt="avatar"/>
            </div>
            <div className={styles.mainInfoHolder}>
                <div className={styles.infoInner}>
                    <div className={styles.userName}>{profile.fullName}</div>

                    <ProfileStatus userStatus={userStatus}
                                   updateUserStatus={updateUserStatus}/>

                </div>
            </div>
        </div>
        <div className={styles.propsHolder}>
            <div className={styles.infoRow}>
                <h3 className={styles.infoSubtitle}>Info</h3>
                <p className={styles.infoValue}>{profile.aboutMe}</p>
            </div>
            <div className={styles.infoRow}>
                <h3 className={styles.infoSubtitle}>Professional Skills</h3>
                {
                    profile.lookingForAJob
                        ? <p className={styles.infoValue}>Looking for a job</p>
                        : <p className={styles.infoValue}>Not looking for a job</p>
                }
                <p className={styles.infoValue}>{profile.lookingForAJobDescription}</p>
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

    </div>
}

export default ProfileInfo;

let Contact = ({contactTitle, contactValue}) => {
    return <div className={styles.linkHolder}>
        <p className={styles.linkTitle}>{contactTitle}</p>
        <a className={styles.link} href={contactValue}><AiOutlineLink /></a>
    </div>
}