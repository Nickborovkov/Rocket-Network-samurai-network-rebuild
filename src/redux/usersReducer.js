import {usersAPI} from "../utils/API/api";
import {followReducerHelper} from "../utils/helpers/followReducerHelper";


const FOLLOW = `rocketNetwork/users/FOLLOW`
const UNFOLLOW = `rocketNetwork/users/UNFOLLOW`
const SET_USERS = `rocketNetwork/users/SET-USERS`
const SET_CURRENT_PAGE = `rocketNetwork/users/SET-CURRENT-PAGE`
const SET_TOTAL_USER_COUNT = `rocketNetwork/users/SET-TOTAL-USERS-COUNT`
const TOGGLE_IS_FETCHING = `rocketNetwork/users/TOGGLE-IS-FETCHING`
const TOGGLE_IS_FOLLOWING_PROGRESS = `rocketNetwork/users/TOGGLE_IS_FOLLOWING_PROGRESS`
const TOGGLE_FRIENDS = `rocketNetwork/users/TOGGLE_FRIENDS`


const initialState = {
    users: [],
    pageSize: 18,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
    toggleFriends: false
}


const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return{
                ...state,
                users: followReducerHelper(state.users, action.userId, {followed: true})
            }
        case UNFOLLOW:
            return {
                ...state,
                users: followReducerHelper(state.users, action.userId, {followed: false})
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
        case TOGGLE_FRIENDS:
            return {
                ...state,
                toggleFriends: action.toggleFriends
            }
        default:
            return state
    }
}

export default usersReducer;


//AC
export const followSuccess = userId =>
    ( { type: FOLLOW, userId } )

export const unFollowSuccess = userId =>
    ( { type: UNFOLLOW, userId } )

const setUsers = users =>
    ( { type: SET_USERS, users } )

export const setCurrentPage = currentPage =>
    ( { type: SET_CURRENT_PAGE, currentPage } )

const setTotalUsersCount = totalCount =>
    ( { type: SET_TOTAL_USER_COUNT, count: totalCount } )

const toggleIsFetching = isFetching =>
    ( { type: TOGGLE_IS_FETCHING, isFetching } )

const setFollowingProgress = (followingInProgress, userId) =>
    ( { type: TOGGLE_IS_FOLLOWING_PROGRESS, followingInProgress,userId } )

export const toggleFriendsList = (toggleFriends) =>
    ( { type: TOGGLE_FRIENDS, toggleFriends } )


//THUNKS
export const getUsers = (currentPage, pageSize, friend) => async disaptch => {
    disaptch(toggleIsFetching(true));
    const response = await usersAPI.getUsers(currentPage, pageSize, friend)
    disaptch(setCurrentPage(currentPage))
    disaptch(toggleIsFetching(false));
    disaptch(setUsers(response.data.items));
    disaptch(setTotalUsersCount(response.data.totalCount));
}

let toggleFollow = async (dispatch, userId, apiType, dispatchType) => {
    dispatch(setFollowingProgress(true, userId))
    const response = await apiType(userId)
    if(response.data.resultCode === 0) {
        dispatch(dispatchType(userId))
    }
    dispatch(setFollowingProgress(false,userId))
}

export const follow = userId => async disaptch => {
    await toggleFollow(disaptch, userId, usersAPI.followUser, followSuccess)
}

export const unfollow = userId => async disaptch => {
    await toggleFollow(disaptch, userId, usersAPI.unFollowUser, unFollowSuccess)
}