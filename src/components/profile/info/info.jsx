import  React from "react";
import Preloader from "../../common/preloader/Preloader";
import styles from './info.module.css'

let Info = (props) => {

    if(!props.profile){
        return <Preloader />
    }else{
       return ( <div>
           <div className={styles.info}>
                <div className={styles.info__column}>
                    <img src={props.profile.photos.large} alt="avatar" />
                </div>
                <div className={styles.info__column}>
                    <div className={styles.info__property}>
                        <p className={styles.info__meaning}>Name</p>
                        <p className={styles.info__meaning}>{props.profile.fullName}</p>
                    </div>
                    <div className={styles.info__property}>
                        <p className={styles.info__meaning}>Status</p>
                        <p className={styles.info__meaning}>{props.profile.aboutMe}</p>
                    </div>
                </div>            
            </div>
                <h3>Contacts</h3>
                <p>{props.profile.contacts.facebook}</p>
                <p>{props.profile.contacts.twitter}</p>
                <p>{props.profile.contacts.instagram}</p>
                <p>{props.profile.contacts.github}</p>
                <h3>Looking for a job</h3>
                    {props.profile.lookingForAJob = true ? <p>true</p> : <p>false</p>}
                    <p>{props.profile.lookingForAJobDescription}</p>
       </div>
            
        ) 
    }        
}

export default Info;