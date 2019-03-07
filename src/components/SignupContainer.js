import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { registerUser } from "../redux/actions/util/session_api_util";
import Signup from "./Signup";

const mapDispatchToProps = dispatch => ({
    registerUser: (userData) => dispatch(registerUser(userData))
});

const mapStateToProps = state => ({
    errors: state.errors,
    session: state.session
})
const SignupContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(Signup));

export default SignupContainer;