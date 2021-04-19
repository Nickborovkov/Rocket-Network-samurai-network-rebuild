import avatar from './../assets/images/avatar.jpg'

const addPost = `ADD-POST`
const clearPost = `CLEAR-POST`
const updatePostText = `UPDATE-POST-TEXT`


let initialState = {
    posts: [
        {id: 1, post: `Hi`, likescount: 2, avatar: avatar,},
        {id: 2, post: `Wazaaap nigger`, likescount: 3, avatar: avatar,},
        {id: 3, post: `Hi, how are you`, likescount: 4, avatar: avatar,},
        {id: 4, post: `I'm a fucking pro coder`, likescount: 6, avatar: avatar,},
    ]
}


let profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case addPost:
            return state
        case addPost:
            return state
        case addPost:
            return state
        default:
            return state
    }
}

const addPostAC = () => ({type: addPost})
const clearPostAC = () => ({type: clearPost})
const updatePostTextAC = (text) => ({type: updatePostText})

export default profileReducer;