import {connect} from "react-redux";
import Info from "./info";


let mapStateToProps = (state) => {
    return {
        info: state.profilePage.info
    }
};
let mapDispatchToProps = (dispatch) => {
    return {

    }
};


let InfoContainer = connect(mapStateToProps, mapDispatchToProps) (Info)

export default InfoContainer;