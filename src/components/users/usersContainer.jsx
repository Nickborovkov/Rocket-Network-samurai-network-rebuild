import React from 'react';
import { connect } from "react-redux";
import { follow, getUsers, unfollow } from "../../redux/usersReducer";
import Users from "./users";
import { compose } from 'redux';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }
    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return <Users {...this.props}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
                      onPageChanged={this.onPageChanged}/>
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

export default compose(
    connect(mapStateToProps, {follow, unfollow, getUsers}),
)(UsersContainer)
