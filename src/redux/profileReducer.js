import {profileAPI as usersAPI} from "../utils/API/api";


const ADD_POST = `rocketNetwork/profile/ADD_POST`
const DELETE_POST = `rocketNetwork/profile/DELETE_POST`
const SET_USER_PROFILE = `rocketNetwork/profile/SET_USER_PROFILE`

let initialState = {
    posts: [
        {id: 1, post: `Till Valhalla`, likescount: 2},
        {id: 2, post: `Just chilling`, likescount: 3},
        {id: 3, post: `Learning some riffs`, likescount: 4},
        {id: 4, post: `Coding`, likescount: 6},
    ],
    profile: undefined
}


let profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {id: state.posts.length + 1, post: action.post, likescount: 11}],
                newPostText: '',
            }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state
    }
}

export default profileReducer;


//AC
export const addPost = post =>
    ( { type: ADD_POST, post } )

export const deletePost = postId =>
    ( { type: DELETE_POST, postId } )

export const setUsersProfile = profile =>
    ( { type: SET_USER_PROFILE, profile } )


//THUNK
export const setUserProfile = (userId) => async dispatch => {
        // if(!userId){
        //     userId = 9398
        // }
        let response = await usersAPI.getProfile(userId)
            dispatch(setUsersProfile(response.data))
}