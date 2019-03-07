import React, { Component } from "react";
import LoginForm from "./LoginForm";

const Login = ({ loginUser, errors, history, session }) => {
    return (
        <div className="login-container">
            <LoginForm loginUser={loginUser} history={history} errors={errors} session={session}/>
        </div>
    )
};

export default Login;