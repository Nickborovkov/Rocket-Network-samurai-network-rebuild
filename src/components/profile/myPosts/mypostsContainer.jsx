import {connect} from "react-redux";
import MyPosts from "./myposts";



let mapStateToProps = (state) => {
    return{
        posts: state.profilePage.posts
    }
}
let mapDispatchToProps = (dispatch) => {
    return{

    }
}


let myPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)