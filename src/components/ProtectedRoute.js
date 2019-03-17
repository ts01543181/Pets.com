import React from "react";
import { connect } from "react-redux";
import { Route, Redirect, withRouter } from "react-router-dom";

const mapStateToProps = (state) => ({
    session: state.session
});

const ProtectedRoute = ({ path, session, component: Component }) => (
    <Route path={path} render={(props) => (
        session.id ? <Component {...props}/> : <Redirect to="/login"/>
    )}/>
);

export default withRouter(connect(mapStateToProps)(ProtectedRoute));