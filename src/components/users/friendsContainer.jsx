import React from 'react';
import { connect } from "react-redux";
import {follow, getUsers, setCurrentPage, unfollow} from "../../redux/usersReducer";
import Users from "./users";
import { compose } from 'redux';
import {withRouter} from "react-router-dom";

class FriendsContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize, true)
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize, true)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.isAuth !== prevProps.isAuth){
            this.props.history.push('/login')
        }
        if(this.props.currentPage > Math.ceil(this.props.totalUsersCount / this.props.pageSize)){
            this.onPageChanged(1)
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
    }
};

export default compose(
    connect(mapStateToProps, {follow, unfollow, getUsers, setCurrentPage}),
    withRouter,
)(FriendsContainer)
