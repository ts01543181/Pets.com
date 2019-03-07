import React, { Component } from "react";
import SignupForm from "./SignupForm";

const Signup = ({ history, registerUser, session, errors }) => {
    return (
        <div className="signup-container">
            <SignupForm history={history} registerUser={registerUser} errors={errors} session={session}/>
        </div>
    )
}

export default Signup;