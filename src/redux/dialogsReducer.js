const addMessage = `ADD-POST`
const clearMessage = `CLEAR-POST`
const updateMessageText = `UPDATE-MESSAGE-TEXT`

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
        case addMessage:
            return{
                ...state,
                messages: [...state.messages, {id: 6, chat: state.newMessageText}],
                newMessageText: ``,
            }
        case clearMessage:
            return {
                ...state,
                newMessageText: ``
            }
        case updateMessageText:
            return {
                ...state,
                newMessageText: action.messageUpd
            }
        default:
            return  state
    }
}

export const addMessageAC = () =>({type: addMessage})
export const clearMessageAC = () =>({type: clearMessage})
export const updateMessageTextAC = (text) =>({type: updateMessageText, messageUpd: text})

export default dialogsReducer;