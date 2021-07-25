import {createSelector} from "reselect";

export let getAllUsers = (state) => {
    return state.usersPage.users
}

export let getUsersWithPhoto = createSelector(getAllUsers,
    users => {
        return users.filter(user => user.followed)
    })