import {authAPI, profileAPI, securityAPI} from "../utils/API/api";
import {stopSubmit} from "redux-form";


const SET_USER_DATA = `rocketNetwork/auth/SET_USER_DATA`
const SET_AUTH_USER = `rocketNetwork/auth/SET_AUTH_USER`
const SET_CURRENT_USER = `rocketNetwork/auth/SET_CURRENT_USER`
const GET_USER_CAPTCHA = `rocketNetwork/auth/GET_USER_CAPTCHA`


let initialState = {
    userId: undefined,
    email: undefined,
    login: undefined,
    isAuth: false,
    authUser: undefined,
    currentUser: 0,
    captcha: undefined
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
        case GET_USER_CAPTCHA:
            return {
                ...state,
                captcha: action.captcha
            }
        default:
            return state;
    }
}

export default authReducer


//AC
const setAuthUserData = (userId, email, login, isAuth) =>
    ( {type: SET_USER_DATA, data: {userId, email, login, isAuth}} )

const setCurrentUSer = currentUser =>
    ( { type: SET_CURRENT_USER, currentUser } )

const getUserCaptcha = (captcha) =>
    ( {type: GET_USER_CAPTCHA, captcha} )


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

export const loginNewUser = (email, login, password, captcha) => async dispatch => {
    let response = await authAPI.loginUser(email, login, password, captcha)

    let errorHandleHelper = () => {
        let errorMeaning = response.data.messages.length > 0
            ? response.data.messages[0]
            : `Unknown error`
        let action = stopSubmit(`loginForm`, {_error: errorMeaning})
        dispatch(action)
    }
    if(response.data.resultCode === 0) {
        dispatch(setAuthUsers())

    }else if(response.data.resultCode === 10){
        dispatch(setUserCaptcha())
        errorHandleHelper()
    }else {
        errorHandleHelper()
    }
    dispatch(getUserCaptcha(null))
}

export const logoutNewUser = () => async dispatch => {
    let response = await authAPI.logoutUser()
    if(response.data.resultCode === 0){
        dispatch(setAuthUserData(null, null, null, false))
    }
}

export const setUserCaptcha = () => async dispatch => {
    let response = await securityAPI.getCaptcha()
    dispatch(getUserCaptcha(response.data.url))
}