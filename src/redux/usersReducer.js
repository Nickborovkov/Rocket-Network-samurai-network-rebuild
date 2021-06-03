import { usersAPI } from "../API/api"

const FOLLOW = `FOLLOW`
const UNFOLLOW = `UNFOLLOW`
const SET_USERS = `SET-USERS`
const SET_CURRENT_PAGE = `SET-CURRENT-PAGE`
const SET_TOTAL_USER_COUNT = `SET-TOTAL-USERS-COUNT`
const TOGGLE_IS_FETCHING = `TOGGLE-IS-FETCHING`
const TOGGLE_IS_FOLLOWING_PROGRESS = `TOGGLE_IS_FOLLOWING_PROGRESS`


let initialState = {
    users: [],
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
}


let usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return{
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userId){
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userId){
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            }   
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_USER_COUNT:
            return {
                ...state,
                totalUsersCount: action.count
            }
        case TOGGLE_IS_FETCHING: 
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.followingInProgress 
                ? [...state.followingInProgress, action.userId]
                : [state.followingInProgress.filter(id => id !== action.userId)]
            }
        default:
            return state
    }
}


//action creators

export const followSuccess = (userId) => ({type: FOLLOW, userId})
export const unFollowSuccess = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalCount) => ({type: SET_TOTAL_USER_COUNT, count: totalCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const setFollowingProgress = (followingInProgress, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, followingInProgress,userId})

//thunks

export const getUsers = (currentPage, pageSize) => {
    return (disaptch) => {
        disaptch(toggleIsFetching(true));
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            disaptch(toggleIsFetching(false));
            disaptch(setUsers(data.items));
            disaptch(setTotalUsersCount(data.totalCount));
        })
    }
}
export const follow = (userId) => {
    return (disaptch) => {
        disaptch(setFollowingProgress(true, userId))
        usersAPI.followUser(userId).then(data => {
            if(data.resultCode === 0) {
                disaptch(followSuccess(userId))
            }
            disaptch(setFollowingProgress(false,userId))
        })
    }
}
export const unfollow = (userId) => {
    return (disaptch) => {
        disaptch(setFollowingProgress(true,userId))
        usersAPI.unFollowUser(userId).then(data => {
            if(data.resultCode === 0) {
               disaptch(unFollowSuccess(userId))
            }
            disaptch(setFollowingProgress(false,userId))
        }) 
    }
}


export default usersReducer;