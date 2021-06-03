import React from 'react'
import {connect} from "react-redux";
import { compose } from 'redux';
import Info from "./info";

class InfoContainer extends React.Component{
    render(){
        return <Info {...this.props}
                profile={this.props.profile}
                status = {this.props.status}
                updateStatus = {this.props.updateStatus}/>
    }
}


let mapStateToProps = (state) => {
    return {
        info: state.profilePage.info,
        status: state.profilePage.status, 
    }
};


export default compose(
   connect(mapStateToProps, {}) 
)(InfoContainer)