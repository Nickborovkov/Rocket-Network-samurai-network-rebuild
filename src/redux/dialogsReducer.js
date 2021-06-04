const ADD_MESSAGE = `ADD-POST`
const CLEAR_MESSAGE = `CLEAR-POST`

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
}

let dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return{
                ...state,
                messages: [...state.messages, {id: 6, chat: action.newMessageBody}],
            }
        case CLEAR_MESSAGE:
            return {
                ...state,
            }
        default:
            return  state
    }
}

export const addMessage = (newMessageBody) =>({type: ADD_MESSAGE, newMessageBody})
export const clearMessage = () =>({type: CLEAR_MESSAGE})

export default dialogsReducer;