import styles from './myposts.module.css'
import React from "react";
import Post from "./post/post";
import { Field, reduxForm } from 'redux-form';

class MyPosts extends React.Component{
    render(){
        let onAddPost = () =>{
            this.props.addPost()
        }
        let onClearPost = () =>{
            this.props.clearPost()
        }
        let onUpdatePostText = (e) =>{
            let text = e.target.value;
            this.props.updatePostText(text)
        }
        let addNewPost = (values) => {
            this.props.addPost(values.newPostBody)
        }

        let postsElements = this.props.posts.map((p)=><Post key={p.id} avatar={p.avatar} post={p.post} likescount={p.likescount}/>)

        return <div className={styles.myposts}>
            <h2 className={styles.myposts__title}>My posts</h2>
            <ProfileFormRedux onSubmit={addNewPost}/>
            {postsElements}
        </div>
    }
}

export default MyPosts

let ProfileForm = (props) => {
    return <div>
                <form onSubmit={props.handleSubmit}>
                    <Field className={styles.myposts__textarea}
                            component={`textarea`}
                            placeholder='Write something...'
                            name={`newPostBody`}
                            />
            <div className={styles.myposts__buttonsWrapper}>
                <button className={styles.myposts__button}>Send</button>
            </div>
        </form>
    </div>
}

const ProfileFormRedux = reduxForm({
    form: `addPostForm`
})(ProfileForm)