import React from 'react';
import { connect } from "react-redux";
import { follow, getUsers, unfollow } from "../../redux/usersReducer";
import Users from "./users";
import { compose } from 'redux';
import {withRouter} from "react-router-dom";
import {getAllUsers} from "../../utils/selectors/usersSelectors";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }
    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.isAuth !== prevProps.isAuth){
            this.props.history.push('/login')
        }
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
        users: getAllUsers(state),
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
        isAuth: state.auth.isAuth,
    }
};

export default compose(
    connect(mapStateToProps, {follow, unfollow, getUsers}),
    withRouter,
)(UsersContainer)
