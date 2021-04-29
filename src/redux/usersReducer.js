const follow = `FOLLOW`
const unFollow = `UNFOLLOW`
const setUsers = `SET-USERS`
const setCurrentPage = `SET-CURRENT-PAGE`
const setTotalUsersCount = `SET-TOTAL-USERS-COUNT`


let initialState = {
    users: [],
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 1,
}


let usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case follow:
            return{
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userId){
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case unFollow:
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userId){
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case setUsers:
            return {
                ...state,
                users: [...action.users]
            }   
        case setCurrentPage:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case setTotalUsersCount:
            return {
                ...state,
                totalUsersCount: action.count
            }
        default:
            return state
    }
}


export const followAC = (userId) => ({type: follow, userId})
export const unFollowAC = (userId) => ({type: unFollow, userId})
export const setUsersAC = (users) => ({type: setUsers, users})
export const setCurrentPageAC = (currentPage) => ({type: setCurrentPage, currentPage})
export const setTotalUsersCountAC = (totalCount) => ({type: setTotalUsersCount, count: totalCount})


export default usersReducer;