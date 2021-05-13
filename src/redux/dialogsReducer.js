const ADD_MESSAGE = `ADD-POST`
const CLEAR_MESSAGE = `CLEAR-POST`
const UPDATE_MESSAGE_TEXT = `UPDATE-MESSAGE-TEXT`

let initialState = {
    users: [
        {id: 1, user: `Mike`},
        {id: 2, user: `Tom`},
        {id: 3, user: `Nick`},
        {id: 4, user: `Elise`},
        {id: 5, user: `Christine`},
        {id: 6, user: `Anna`},
    ],
    messages: [
        {id: 1, chat: `Hi`},
        {id: 2, chat: `Wazaap nigger`},
        {id: 3, chat: `How's your coding skills?`},
        {id: 4, chat: `Do you still have that Ford?`},
        {id: 5, chat: `Hello`},
        {id: 6, chat: `Nice to meet you`},
    ],
    newMessageText: ``
}

let dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return{
                ...state,
                messages: [...state.messages, {id: 6, chat: state.newMessageText}],
                newMessageText: ``,
            }
        case CLEAR_MESSAGE:
            return {
                ...state,
                newMessageText: ``
            }
        case UPDATE_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.messageUpd
            }
        default:
            return  state
    }
}

export const addMessage = () =>({type: ADD_MESSAGE})
export const clearMessage = () =>({type: CLEAR_MESSAGE})
export const updateMessageText = (text) =>({type: UPDATE_MESSAGE_TEXT, messageUpd: text})

export default dialogsReducer;