import {profileAPI} from "../utils/API/api";


const ADD_POST = `rocketNetwork/profile/ADD_POST`
const DELETE_POST = `rocketNetwork/profile/DELETE_POST`
const SET_USER_PROFILE = `rocketNetwork/profile/SET_USER_PROFILE`
const SET_USER_STATUS = `rocketNetwork/profile/SET_USER_STATUS`
const SAVE_PHOTO_SUCCESS = `rocketNetwork/profile/SAVE_PHOTO_SUCCESS`

let initialState = {
    posts: [
        {id: 1, post: `Till Valhalla`, likescount: 2},
        {id: 2, post: `Just chilling`, likescount: 3},
        {id: 3, post: `Learning some riffs`, likescount: 4},
        {id: 4, post: `Coding`, likescount: 6},
    ],
    profile: undefined,
    userStatus: undefined,
}


let profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {id: state.posts.length + 1,
                    post: action.post, likescount: 0}],
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
        case SET_USER_STATUS:
            return {
                ...state,
                userStatus: action.userStatus
            }
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
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

export const getUserStatus = userStatus =>
    ( { type: SET_USER_STATUS, userStatus } )

export const savePhotoSuccess = photos =>
    ( { type: SAVE_PHOTO_SUCCESS, photos } )

//THUNK
export const setUserProfile = (userId) => async dispatch => {
        let response = await profileAPI.getProfile(userId)
            dispatch(setUsersProfile(response.data))
}

export const setUserStatus = (userId) => async dispatch => {
    let response = await profileAPI.getStatus(userId)
    dispatch(getUserStatus(response.data))
}

export const updateUserStatus = (status) => async dispatch => {
    let response = await profileAPI.updateStatus(status)
    if(response.data.resultCode === 0){
        dispatch(getUserStatus(status))
    }
}

export const updateUserPhoto = (userPhoto) => async dispatch => {
    let response = await profileAPI.changePhoto(userPhoto)
    if(response.data.resultCode === 0){
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}