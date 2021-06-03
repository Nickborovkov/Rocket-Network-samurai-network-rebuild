import { profileAPI, usersAPI } from '../API/api'
import avatar from './../assets/images/avatar.jpg'

const ADD_POST = `ADD_POST`
const CLEAR_POST = `CLEAR_POST`
const UPDATE_POST_TEXT = `UPDATE_POST_TEXT`
const SET_USER_PROFILE = `SET_USER_PROFILE`

const SET_STATUS = `SET_STATUS`


let initialState = {
    info:[
        {id: 1, property: `Name:`, meaning: `Nick Borovkov`},
        {id: 2, property: `Status:`, meaning: `Improving myself`},
        {id: 3, property: `City:`, meaning: `SinCity`},
        {id: 4, property: `Bithdate:`, meaning: `30th Dec 1996`},
        {id: 5, property: `Education:`, meaning: `MTUCI`},
    ],
    posts: [
        {id: 1, post: `Hi`, likescount: 2, avatar: avatar},
        {id: 2, post: `Just chilling`, likescount: 3, avatar: avatar},
        {id: 3, post: `Learning some riffs`, likescount: 4, avatar: avatar},
        {id: 4, post: `I'm a fucking pro coder`, likescount: 6, avatar: avatar},
    ],
    newPostText: ``,
    profile: null,
    status: ``,
}


let profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {id: 4, post: state.newPostText, likescount: 11, avatar: avatar}],
                newPostText: '',
            }
        case CLEAR_POST:
            return {
                ...state,
                newPostText: '',
            }
        case UPDATE_POST_TEXT:
            return {
                ...state,
                newPostText: action.postTextUpd
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state
    }
}

export default profileReducer;

//action crators

export const addPost = () => ({type: ADD_POST})
export const clearPost = () => ({type: CLEAR_POST})
export const updatePostText = (text) => ({type: UPDATE_POST_TEXT, postTextUpd: text})
export const setUsersProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setUserStatus = (status) => ({type: SET_STATUS, status})

//thunks

export const setUserProfile = (userId) => {
    return (dispatch) => {
        usersAPI.getProfile(userId).then(data => {
            dispatch(setUsersProfile(data))
        })
    }
}
export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setUserStatus(response.data))
        })
    }
}
export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
        .then(response => {
            if(response.data.resultCode === 0){
                dispatch(setUserStatus(status))
            }            
        })
    }
}