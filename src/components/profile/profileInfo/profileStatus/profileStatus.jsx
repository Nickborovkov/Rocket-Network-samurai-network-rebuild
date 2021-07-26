import React, {useEffect, useState} from "react"
import styles from './profileStatus.module.css'
import { AiOutlineEdit } from 'react-icons/ai'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import { AiOutlineCloseCircle } from 'react-icons/ai'

let ProfileStatus = ({userStatus, updateUserStatus, isOwner}) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(userStatus)

    useEffect( () => {
        setStatus(userStatus)
    }, [userStatus])

    let onStatusUpdate = (e) => {
        setStatus(e.target.value)
    }

    let activateEditMode = () => {
        setEditMode(true)
    }
    let deActivateEditMode = () => {
        setEditMode(false)
        updateUserStatus(status)
    }

    return <div>
        {
            !editMode &&
            <div className={styles.savedStatusBlock}>
                <div className={styles.savedStatus}>{userStatus}</div>
                {
                    isOwner &&
                    <button className={styles.statusEditButton}
                            onClick={activateEditMode}><AiOutlineEdit/></button>
                }
            </div>
        }
        {
            editMode &&
                <div className={styles.editStatusBlock}>
                    <input className={styles.editStatus}
                           type="input"
                           autoFocus
                           maxLength={300}
                           value={status}
                           onChange={onStatusUpdate}/>
                    <div>
                        <button className={styles.statusSaveButton}
                                onClick={deActivateEditMode}><AiOutlineCheckCircle/></button>
                        <button className={styles.statusSaveButton}
                                onClick={ () => {
                                    setEditMode(false)
                                    setStatus(userStatus)
                                } }><AiOutlineCloseCircle/></button>
                    </div>
                </div>

        }
    </div>
}

export default ProfileStatus