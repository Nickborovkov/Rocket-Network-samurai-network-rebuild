import axios from "axios";
import React from 'react';
import { connect } from "react-redux";
import { followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unFollowAC } from "../../redux/usersReducer";
import Users from "./Users";


class UsersContainer extends React.Component{
    componentDidMount(){
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)           
        })
    }
    render(){
        return <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize = {this.props.pageSize}
                      users = {this.props.users}
                      unFollow = {this.props.unFollow}
                      follow = {this.props.follow}
                      currentPage = {this.props.currentPage}
                      onPageChanged = {this.onPageChanged}/>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {dispatch(followAC(userId))},
        unFollow: (userId) => {dispatch(unFollowAC(userId))},
        setUsers: (users) => {dispatch(setUsersAC(users))},
        setCurrentPage: (currentPage) => {dispatch(setCurrentPageAC(currentPage))},
        setTotalUsersCount: (totalCount) => {dispatch(setTotalUsersCountAC(totalCount))},
    }
};


export default connect(mapStateToProps, mapDispatchToProps) (UsersContainer)