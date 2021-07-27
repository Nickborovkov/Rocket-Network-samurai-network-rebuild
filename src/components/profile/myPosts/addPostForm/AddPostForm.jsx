import React from "react";
import {Field, reduxForm, reset} from "redux-form";
import styles from '../myPosts.module.css'
import {maxLengthCreator, required} from "../../../../utils/formHelpers/validators";
import {TextArea} from "../../../../utils/formHelpers/formControls";

const maxLength300 = maxLengthCreator(300)

const AddPostForm = ({addPost}) => {
    const onAddPost = (value, dispatch) => {
        addPost(value.addUserPost)
        dispatch(reset(`addPostForm`))
    }
    return <div className={styles.myPosts}>
        <AddNewPost onSubmit={onAddPost}/>
    </div>
}

export default AddPostForm

const AddPost = ({handleSubmit}) => {
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

const AddNewPost = reduxForm({
    form: `addPostForm`
})(AddPost)

