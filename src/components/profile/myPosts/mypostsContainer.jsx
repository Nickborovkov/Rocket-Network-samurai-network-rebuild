import {connect} from "react-redux";
import MyPosts from "./myposts";
import {addPostAC, clearPostAC, updatePostTextAC} from "../../../redux/profileReducer";



let mapStateToProps = (state) => {
    return{
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.posts
    }
}
let mapDispatchToProps = (dispatch) => {
    return{
        addPost: () => {dispatch(addPostAC())},
        clearPost: () => {dispatch(clearPostAC())},
        updatePostText: (text) => {dispatch(updatePostTextAC(text))},
    }
}


let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer