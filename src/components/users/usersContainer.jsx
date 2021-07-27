import React from 'react';
import { connect } from "react-redux";
import {follow, getUsers, unfollow} from "../../redux/usersReducer";
import Users from "./users";
import { compose } from 'redux';
import {withRouter} from "react-router-dom";

class UsersContainer extends React.Component {
    getUsersHelper = (currentPage, pageSize, friend) => {
        if(!this.props.toggleFriends){
            this.props.getUsers(currentPage, pageSize)
        }else{
            this.props.getUsers(currentPage, pageSize, friend)
        }
    }

    componentDidMount() {
        this.getUsersHelper(this.props.currentPage, this.props.pageSize, true)
    }

    onPageChanged = (pageNumber) => {
        this.getUsersHelper(pageNumber, this.props.pageSize, true)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.isAuth !== prevProps.isAuth){
            this.props.history.push('/login')
        }
        if(this.props.toggleFriends !== prevProps.toggleFriends){
            this.getUsersHelper(this.props.currentPage, this.props.pageSize, true)
        }
    }

    render() {
        return <Users {...this.props}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
                      onPageChanged={this.onPageChanged}/>
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
        isAuth: state.auth.isAuth,
        toggleFriends: state.usersPage.toggleFriends,
    }
};

export default compose(
    connect(mapStateToProps, {follow, unfollow, getUsers}),
    withRouter,
)(UsersContainer)
