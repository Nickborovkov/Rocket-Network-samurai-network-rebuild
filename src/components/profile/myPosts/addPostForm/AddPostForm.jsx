import React from "react";
import {Field, reduxForm} from "redux-form";
import styles from '../myPosts.module.css'

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
               component='textarea'
               type='text'
               placeholder='Enter your post here...'
               name='addUserPost'/>
        <button className={styles.submitButton}>Post</button>
    </form>
}

let AddNewPost = reduxForm({
    form: `addPostForm`
})(AddPost)

