import avatar from './../assets/images/avatar.jpg'

const addPost = `ADD-POST`
const clearPost = `CLEAR-POST`
const updatePostText = `UPDATE-POST-TEXT`


let initialState = {
    info:[
        {id: 1, property: `Name`, meaning: `Ragnar Odinson`},
        {id: 2, property: `Status`, meaning: `Improving myself`},
        {id: 3, property: `City`, meaning: `Moscow`},
        {id: 4, property: `Bithdate`, meaning: `30th Dec 1996`},
        {id: 5, property: `Education`, meaning: `MTUCI`},
    ],
    posts: [
        {id: 1, post: `Hi`, likescount: 2, avatar: avatar},
        {id: 2, post: `Wazaaap nigger`, likescount: 3, avatar: avatar},
        {id: 3, post: `Hi, how are you`, likescount: 4, avatar: avatar},
        {id: 4, post: `I'm a fucking pro coder`, likescount: 6, avatar: avatar},
    ],
    newPostText: ``,
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
        default:
            return state
    }
}

export const addPostAC = () => ({type: addPost})
export const clearPostAC = () => ({type: clearPost})
export const updatePostTextAC = (text) => ({type: updatePostText, postTextUpd: text})

export default profileReducer;