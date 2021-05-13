import avatar from './../assets/images/avatar.jpg'

const addPost = `ADD-POST`
const clearPost = `CLEAR-POST`
const updatePostText = `UPDATE-POST-TEXT`

const SET_USER_PROFILE = `set_user_profile`


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
    profile: null
}


let profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case addPost:
            return {
                ...state,
                posts: [...state.posts, {id: 4, post: state.newPostText, likescount: 11, avatar: avatar}],
                newPostText: '',
            }
        case clearPost:
            return {
                ...state,
                newPostText: '',
            }
        case updatePostText:
            return {
                ...state,
                newPostText: action.postTextUpd
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

export const addPostAC = () => ({type: addPost})
export const clearPostAC = () => ({type: clearPost})
export const updatePostTextAC = (text) => ({type: updatePostText, postTextUpd: text})

export const setUsersProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export default profileReducer;