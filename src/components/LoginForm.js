import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleOnChange(e, type) {
        this.setState({
            [type]: e.target.value
        });
    }

    handleSubmit() {
        this.props.loginUser(this.state)
        .then(() => this.props.history.push("/"));
    }

    render() {
        const errors = this.props.errors;
        if (this.props.session.id) {
            return (
                <Redirect to="/"/>
            )
        }
        return (
            <div className="loginform">
                <div className="form-header-container">
                    <h2 className="header">Log In</h2>
                </div>

                <div className="form-input-container">
                    <h3>Email</h3>
                    <input type="email" label="Email" className="form-input" onChange={(e) => this.handleOnChange(e, "email")} value={this.state.email}></input>
                    {errors.email ? <span>{errors.email}</span> : (errors.name ? <span>{errors.name}</span> : "")}

                    <h3>Password</h3>
                    <input type="password" label="Password" className="form-input" onChange={(e) => this.handleOnChange(e, "password")} value={this.state.password}></input>
                    {errors.password ? <span>{errors.password}</span> : ""}

                </div>

                <div className="form-button-container">
                    <div onClick={this.handleSubmit} className="form-button">Log In</div>
                </div>
                <div className="form-bottom-line">Don't have an account? <Link to="/signup">Sign Up</Link> here</div>  
            </div>
        )
    }
}

export default LoginForm;