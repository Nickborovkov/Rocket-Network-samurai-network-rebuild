import React from "react";
import {Field, reduxForm} from "redux-form";
import styles from '../myPosts.module.css'
import {maxLengthCreator, required} from "../../../../utils/formHelpers/validators";
import {TextArea} from "../../../../utils/formHelpers/formControls";

let maxLength300 = maxLengthCreator(300)

let AddPostForm = ({addPost}) => {
    let onAddPost = (value) => {
        addPost(value.addUserPost)
    }
    return <div className={styles.myPosts}>
        <AddNewPost onSubmit={onAddPost}/>
    </div>
}

export default AddPostForm

let AddPost = ({handleSubmit}) => {
    return <form onSubmit={handleSubmit}>
        <Field className={styles.textarea}
               component={TextArea}
               type='text'
               placeholder='Enter your post here...'
               name='addUserPost'
               validate={[required, maxLength300]}/>
        <button className={styles.submitButton}>Post</button>
    </form>
}

let AddNewPost = reduxForm({
    form: `addPostForm`
})(AddPost)

