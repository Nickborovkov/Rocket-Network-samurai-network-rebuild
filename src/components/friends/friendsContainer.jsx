import Friends from "./friends";
import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {setFriends} from "../../redux/friendsReducer";
import {getUsersWithPhoto} from "../../utils/selectors/usersSelectors";

class FriendsContainer extends React.Component{
    componentDidMount() {
        this.props.setFriends()
    }

    render() {
        return <Friends {...this.props}/>
    }
}

const mapStateToProps = (state) => {
    return {
        friends: getUsersWithPhoto(state),
    }
}

export default compose(
    connect(mapStateToProps, {setFriends})
)(FriendsContainer)