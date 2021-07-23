import React from "react";
import {Field, reduxForm} from "redux-form";

let ProfileEdit = ({deActivateEditMode, updateUserProfile, profile}) => {

    let onProfileUpdate = (formData) => {
        updateUserProfile(formData)
    }
//deActivateEditMode
    return <div>
        <button onClick={onProfileUpdate}>close</button>
        <ProfileEditFormRedux onSubmit={onProfileUpdate}
                              initialValues={profile}/>
    </div>
}

export default ProfileEdit

let ProfileEditForm = ({handleSubmit}) => {
    return <form onSubmit={handleSubmit}>
        <div>
            <Field placeholder='Full name'
                   type='text'
                   component='input'
                   name='fullName'/>
        </div>
        <div>
            <Field placeholder='About me'
                   type='text'
                   component='input'
                   name='aboutMe'/>
        </div>
        <div>
            <Field placeholder='Enter your professional skills...'
                   type='text'
                   component='input'
                   name='lookingForAJobDescription'/>
        </div>
        <div>
            <p>Are you looking for a job?</p>
            <Field
                type='checkbox'
                component='input'
                name='lookingForAJob'/>
        </div>
    </form>
}

let ProfileEditFormRedux = reduxForm({
    form: `profileEdit`
})(ProfileEditForm)