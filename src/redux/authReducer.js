const SET_USER_DATA = `SET_USER_DATA`
const SET_AUTH_USER = `SET_AUTH_USER`
const SET_CURRENT_USER = `SET_CURRENT_USER`

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    authUser: null,
    currentUser: 0,
}

let authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        case SET_AUTH_USER:
            return {
                ...state,
                authReducer: action.authUser
            }
        case SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.currentUser
            }
        default:
            return state;
    }
}

export default authReducer

export const setAuthUserData = (userId, email, login) => ( {type: SET_USER_DATA, data: {userId, email, login}} )
export const setAuthUser = (authUser) => ( { type: SET_AUTH_USER, authUser } )
export const setCurrentUSer = (currentUser) => ( { type: SET_CURRENT_USER, currentUser } )