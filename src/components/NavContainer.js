import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Nav from "./Nav";
import { logoutUser } from "../redux/actions/util/session_api_util";

const mapStateToProps = state => ({
    session: state.session
});
const mapDispatchToProps = dispatch => ({
    logoutUser: () => dispatch(logoutUser())
})
const NavContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(Nav));

export default NavContainer;