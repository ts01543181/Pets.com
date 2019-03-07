import { connect } from 'react-redux';
import Login from "./Login";
import { loginUser, logoutUser } from "../redux/actions/util/session_api_util";
import { withRouter } from "react-router-dom";

const mapDispatchToProps = dispatch => ({
    loginUser: (userData) => dispatch(loginUser(userData)),
    logoutUser: () => dispatch(logoutUser())
});
const mapStateToProps = state => ({
    errors: state.errors,
    session: state.session
})
const LoginContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));

export default LoginContainer;