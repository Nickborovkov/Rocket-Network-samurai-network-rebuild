import {setAuthUsers} from "./authReducer";


const INITIALIZE_APP = `rocketNetwork/app/INITIALIZE_APP`


const initialState = {
    initialization: false
}

const appReducer = (state = initialState, action) => {
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

export const initializeApp = () => {
    return (dispatch) => {
        const promise = dispatch(setAuthUsers())
        Promise.all([promise]).then( () => {
            dispatch(initializeAppSuccess())
        } )
    }
}