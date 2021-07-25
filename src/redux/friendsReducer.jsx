import {usersAPI} from "../utils/API/api";

let GET_FRIENDS = `reocketNetwork/friends/GET_FRIENDS`


let initialState = {
    friends: []
}


let friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_FRIENDS:
            return {
                friends: [...action.friends]
            }
        default:
            return state
    }
}

export default friendsReducer


//AC

let getFriends = (friends) =>
    ( {type: GET_FRIENDS, friends} )

//THUNK

export let setFriends = (currentPage, pageSize) => async dispatch => {
    let response = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(getFriends(response.data.items))
}