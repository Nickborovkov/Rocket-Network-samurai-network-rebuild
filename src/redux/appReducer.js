import {setAuthUsers} from "./authReducer";

let INITIALIZE_APP = `rocketNetwork/app/INITIALIZE_APP`

let initialState = {
    initialization: false
}

let appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZE_APP:
            return {
                ...state,
                initialization: true
            }
        default:
            return state
    }
}

export default appReducer


//AC

const initializeAppSuccess = () =>
    ( { type: INITIALIZE_APP } )


//THUNK

export let initializeApp = () => {
    return (dispatch) => {
        let promise = dispatch(setAuthUsers())
        Promise.all([promise]).then( () => {
            dispatch(initializeAppSuccess())
        } )
    }
}