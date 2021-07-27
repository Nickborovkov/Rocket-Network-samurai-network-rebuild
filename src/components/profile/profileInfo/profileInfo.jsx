import React from "react";
import Preloader from "../../../utils/common/preloader/Preloader";
import styles from './profileInfo.module.css'
import ProfileStatus from "./profileStatus/profileStatus";
import ProfileAvatar from "./avatarSection/profileAvatar";
import ProfileContent from "./profileContent/profileContent";


const ProfileInfo = ({profile, userStatus, updateUserStatus,
                       isOwner, updateUserPhoto, updateUserProfile}) => {

    if (!profile) {
        return <Preloader/>
    }

    return <div>
        <div className={styles.profileInner}>
            <ProfileAvatar updateUserPhoto={updateUserPhoto}
                           profile={profile}
                           isOwner={isOwner}/>

            <div className={styles.mainInfoHolder}>
                <div>
                    <div className={styles.userName}>{profile.fullName}</div>

                    <ProfileStatus userStatus={userStatus}
                                   updateUserStatus={updateUserStatus}
                                   isOwner={isOwner}/>

                </div>
            </div>
        </div>

        <ProfileContent profile={profile}
                        updateUserProfile={updateUserProfile}
                        isOwner={isOwner}/>

    </div>
}

export default ProfileInfo;

