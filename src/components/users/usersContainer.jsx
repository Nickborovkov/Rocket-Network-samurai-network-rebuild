import React from 'react';
import { connect } from "react-redux";
import styles from './users.module.css'
import { follow, getUsers, setCurrentPage, setFollowingProgress, unfollow } from "../../redux/usersReducer";
import Preloader from "../common/preloader/Preloader";
import Users from "./users";

class UsersContainer extends React.Component{
    componentDidMount(){
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }
    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }
    render(){
        return <>
        <div className={styles.users__preloader} >
            {this.props.isFetching ? <Preloader /> : null}
        </div>
            
            <Users totalUsersCount={this.props.totalUsersCount}
                        pageSize = {this.props.pageSize}
                        users = {this.props.users}
                        unfollow = {this.props.unFollow}
                        follow = {this.props.follow}
                        currentPage = {this.props.currentPage}
                        onPageChanged = {this.onPageChanged}
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


export default connect(mapStateToProps, {follow, unfollow, setCurrentPage, setFollowingProgress, getUsers}) (UsersContainer)
