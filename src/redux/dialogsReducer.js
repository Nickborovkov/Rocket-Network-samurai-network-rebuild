const ADD_MESSAGE = `rocketNetwork/dialogs/ADD-POST`
const DELETE_MESSAGE = `rocketNetwork/dialogs/DELETE_MESSAGE`


const initialState = {
    dialogs: [
        {id: 1, dialog: `Hi`},
        {id: 2, dialog: `What's up`},
        {id: 3, dialog: `Suffering with JS`},
        {id: 4, dialog: `What's the weather?`},
    ],
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return{
                ...state,
                dialogs: [...state.dialogs, {id: state.dialogs.length + 1, dialog: action.message}],
            }
        case DELETE_MESSAGE:
            return {
                ...state,
                dialogs: state.dialogs.filter(m => m.id !== action.messageId)
            }
        default:
            return  state
    }
}

export default dialogsReducer;


//AC
export const addMessage = message =>
    ( { type: ADD_MESSAGE, message } )

export const deleteMessage = messageId =>
    ( { type: DELETE_MESSAGE, messageId } )

