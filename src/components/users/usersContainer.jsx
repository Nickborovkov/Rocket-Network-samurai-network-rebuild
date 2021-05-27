import React from 'react';
import { connect } from "react-redux";
import styles from './users.module.css'
import { follow, setCurrentPage, setFollowingProgress, setTotalUsersCount, setUsers, toggleIsFetching, unFollow } from "../../redux/usersReducer";
import Preloader from "../common/preloader/Preloader";
import Users from "./users";
import { usersAPI } from "../../API/api";

class UsersContainer extends React.Component{
    componentDidMount(){
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
            this.props.setTotalUsersCount(data.totalCount)
        })
    }
    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)           
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
                        onPageChanged = {this.onPageChanged}
                        followingInProgress = {this.props.followingInProgress}
                        setFollowingProgress = {this.props.setFollowingProgress}
                        {...this.props}/>
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,

    }
};


export default connect(mapStateToProps, {follow, unFollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, setFollowingProgress}) (UsersContainer)