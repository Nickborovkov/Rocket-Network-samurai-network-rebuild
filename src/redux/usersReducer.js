const follow = `FOLLOW`
const unFollow = `UNFOLLOW`
const setUsers = `SET-USERS`
const setCurrentPage = `SET-CURRENT-PAGE`
const setTotalUsersCount = `SET-TOTAL-USERS-COUNT`

const toggleIsFetching = `TOGGLE-IS-FETCHING`


let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
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
        case toggleIsFetching: 
            return {
                ...state,
                isFetching: action.isFetching
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
export const toggleIsFetchingAC = (isFetching) => ({type: toggleIsFetching, isFetching})


export default usersReducer;