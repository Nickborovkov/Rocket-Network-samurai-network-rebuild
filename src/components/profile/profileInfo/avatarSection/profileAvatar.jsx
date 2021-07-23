import React, {useState} from "react";
import styles from "../profileInfo.module.css";
import defaultAvatar from "../../../../utils/images/defaultAvatar.jpg";
import {AiOutlineDownload} from "react-icons/ai";

let ProfileAvatar = ({updateUserPhoto, profile, isOwner}) => {

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

    return <div className={styles.avatarHolder}
                onMouseEnter={showDownloadPhoto}
                onMouseLeave={hideDownloadPhoto}>
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
}

export default ProfileAvatar