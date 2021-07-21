import React from "react";
import {Field, reduxForm} from "redux-form";

let AddPostForm = ({addPost}) => {
    let onAddPost = (value) => {
        addPost(value.addUserPost)
    }
    return <div>
        <AddNewPost onSubmit={onAddPost}/>
    </div>
}

export default AddPostForm

let AddPost = ({handleSubmit}) => {
    return <form onSubmit={handleSubmit}>
        <Field component='input'
               type='text'
               placeholder='Enter your post here...'
               name='addUserPost'/>
        <button>Post</button>
    </form>
}

let AddNewPost = reduxForm({
    form: `addPostForm`
})(AddPost)

