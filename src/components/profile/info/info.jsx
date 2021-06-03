import  React from "react";
import Preloader from "../../common/preloader/Preloader";
import styles from './info.module.css'
import defaultAvatar from './../../../assets/images/defaultAvatar.jpg'
import ProfileStatus from "./status/status";

let Info = (props) => {

    if(!props.profile){
        return <Preloader />
    }else{
       return ( <div>
           <div className={styles.info}>
                <div className={styles.info__column}>
                    <img className={styles.info__avatar} src={!props.profile.photos.large ? defaultAvatar : props.profile.photos.large} alt="avatar" />
                    <ProfileStatus status={props.status}
                                   updateStatus = {props.updateStatus}/>
                </div>
                <div className={styles.info__column}>
                    <div className={styles.info__property}>
                        <p className={styles.info__meaning}>Name</p>
                        <p className={styles.info__meaning}>{props.profile.fullName}</p>
                    </div>
                    <div className={styles.info__property}>
                        <p className={styles.info__meaning}>About me</p>
                        <p className={styles.info__meaning}>{props.profile.aboutMe}</p>
                    </div>
                </div>            
            </div>
            <div className={styles.info__holder}>
                <h3 className={styles.info__subtitle}>Contacts</h3>
                <a href={props.profile.contacts.facebook} className={styles.info__contact}>FACEBOOK</a>
                <a href={props.profile.contacts.twitter} className={styles.info__contact}>TWITTER</a>
                <a href={props.profile.contacts.instagram} className={styles.info__contact}>INSTAGRAM</a>
                <a href={props.profile.contacts.github} className={styles.info__contact}>GITHUB</a>
            </div>
            <div className={styles.info__holder}>
                <h3 className={styles.info__subtitle}>Looking for a job</h3>
                {props.profile.lookingForAJob = true ? <p className={styles.info__work}>Status - <span className={styles.info__span}>&#10003;</span></p> : <p className={styles.info__work}>Status - <span className={styles.info__span}>&#10006;</span></p>}
                <p className={styles.info__description}>Description - {props.profile.lookingForAJobDescription}</p>
            </div>
                
       </div>
            
        ) 
    }        
}

export default Info;