import {authAPI, profileAPI} from "../utils/API/api";


const SET_USER_DATA = `rocketNetwork/auth/SET_USER_DATA`
const SET_AUTH_USER = `rocketNetwork/auth/SET_AUTH_USER`
const SET_CURRENT_USER = `rocketNetwork/auth/SET_CURRENT_USER`


let initialState = {
    userId: undefined,
    email: undefined,
    login: undefined,
    isAuth: false,
    authUser: undefined,
    currentUser: 0,
}


let authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
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


//AC
export const setAuthUserData = (userId, email, login, isAuth) =>
    ( {type: SET_USER_DATA, data: {userId, email, login, isAuth}} )

export const setCurrentUSer = currentUser =>
    ( { type: SET_CURRENT_USER, currentUser } )


//THUNKS
export const setAuthUsers = () => async dispatch => {
    let response = await authAPI.auth()
    if(response.data.resultCode === 0){
        let {id, email, login} = response.data.data
        dispatch(setAuthUserData(id, email, login, true))
        let profileResponse = await profileAPI.getProfile(response.data.data.id)
        dispatch(setCurrentUSer(profileResponse.data))
    }
}

export const loginNewUser = (email, login, password) => async dispatch => {
    let response = await authAPI.loginUser(email, login, password)
    if(response.data.resultCode === 0) {
        dispatch(setAuthUsers())
    }
}

export const logoutNewUser = () => async dispatch => {
    let response = await authAPI.logoutUser()
    if(response.data.resultCode === 0){
        dispatch(setAuthUserData(null, null, null, false))
    }
}