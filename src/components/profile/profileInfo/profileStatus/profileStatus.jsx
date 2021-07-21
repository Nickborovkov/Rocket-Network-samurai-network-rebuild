import React, {useEffect, useState} from "react";

let ProfileStatus = ({userStatus, updateUserStatus}) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(userStatus)

    useEffect( () => {
        setStatus(status)
    }, [])

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
            <div>
                <button onClick={activateEditMode}>Edit...</button>
                <p>{userStatus}</p>
            </div>
        }
        {
            editMode &&
                <div>
                    <button onClick={deActivateEditMode}>Save</button>
                    <input type="text"
                           autoFocus
                           value={status}
                           onChange={onStatusUpdate}/>
                </div>

        }
    </div>
}

export default ProfileStatus