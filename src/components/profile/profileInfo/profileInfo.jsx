import React, {useState} from "react";
import defaultAvatar from '../../../utils/images/defaultAvatar.jpg'
import Preloader from "../../../utils/common/preloader/Preloader";
import styles from './profileInfo.module.css'
import {AiOutlineLink} from 'react-icons/ai';
import ProfileStatus from "./profileStatus/profileStatus";
import cn from 'classnames'
import {AiOutlineDownload} from 'react-icons/ai';


let ProfileInfo = ({profile, userStatus, updateUserStatus, isOwner, updateUserPhoto}) => {

    let [downloadButton, setDownloadButton]= useState(false)
    let showDownloadPhoto = () => {
        setDownloadButton(true)
    }
    let hideDownloadPhoto = () => {
        setDownloadButton(false)
    }

    let onMainPhotoChange = (e) => {
        if (e.target.files.length) {
            updateUserPhoto(e.target.files[0])
        }

    }

    if (!profile) {
        return <Preloader/>
    }
    return <div className={styles.profileInfo}>
        <div className={styles.profileInner}>
            <div className={styles.avatarHolder}>
                <img className={styles.avatar}
                     src={profile.photos.large || defaultAvatar}
                     alt="avatar"
                />
                {
                    isOwner && <div className={styles.downloadHolder}>
                        {
                            downloadButton &&
                            <label className={styles.downLoadButton}><AiOutlineDownload/>
                                <input className={styles.photoInput} type='file'
                                       name='fileInput'
                                       onChange={onMainPhotoChange}/>
                            </label>
                        }



                    </div>

                }
            </div>
            <div className={styles.mainInfoHolder}>
                <div className={styles.infoInner}>
                    <div className={styles.userName}>{profile.fullName}</div>

                    <ProfileStatus userStatus={userStatus}
                                   updateUserStatus={updateUserStatus}
                                   isOwner={isOwner}/>

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

    </div>
}

export default ProfileInfo;

let Contact = ({contactTitle, contactValue}) => {
    return <div className={styles.linkHolder}>
        <p className={styles.linkTitle}>{contactTitle}</p>
        <a className={styles.link} href={contactValue}><AiOutlineLink/></a>
    </div>
}