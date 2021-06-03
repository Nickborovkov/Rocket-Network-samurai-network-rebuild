import React from 'react';
import { connect } from "react-redux";
import { follow, getUsers, setCurrentPage, setFollowingProgress, toggleIsFetching, unfollow } from "../../redux/usersReducer";
import Preloader from "../common/preloader/Preloader";
import Users from "./users";
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class UsersContainer extends React.Component{
    componentDidMount(){
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.getUsers(pageNumber, this.props.pageSize)
    }
    render(){
        return <>
        <div>
            {!this.props.isFetching 
            ? <Users {...this.props}
                     onPageChanged = {this.onPageChanged}/> 
            : <Preloader />}
        </div>
            
            
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

export default compose(
    connect(mapStateToProps, {follow, unfollow, setCurrentPage, setFollowingProgress, getUsers}),
    withAuthRedirect,
)(UsersContainer)
