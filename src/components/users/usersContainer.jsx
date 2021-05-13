import axios from "axios";
import React from 'react';
import { connect } from "react-redux";
import styles from './users.module.css'
import { follow, setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching, unFollow } from "../../redux/usersReducer";
import Preloader from "../common/preloader/Preloader";
import Users from "./Users";
class UsersContainer extends React.Component{
    componentDidMount(){
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }
    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)           
        })
    }
    render(){
        return <>
        <div className={styles.users__preloader} >
            {this.props.isFetching ? <Preloader /> : null}
        </div>
            
            <Users totalUsersCount={this.props.totalUsersCount}
                        pageSize = {this.props.pageSize}
                        users = {this.props.users}
                        unFollow = {this.props.unFollow}
                        follow = {this.props.follow}
                        currentPage = {this.props.currentPage}
                        onPageChanged = {this.onPageChanged}/>
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
};
// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {dispatch(followAC(userId))},
//         unFollow: (userId) => {dispatch(unFollowAC(userId))},
//         setUsers: (users) => {dispatch(setUsersAC(users))},
//         setCurrentPage: (currentPage) => {dispatch(setCurrentPageAC(currentPage))},
//         setTotalUsersCount: (totalCount) => {dispatch(setTotalUsersCountAC(totalCount))},
//         toggleIsFeching: (isFetched) => {dispatch(toggleIsFetchingAC(isFetched))},
//     }
// };


export default connect(mapStateToProps, {follow, unFollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching}) (UsersContainer)
