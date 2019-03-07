import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import "../css/form.css";

class SignupForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: "",
            password2: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(e, type) {
        this.setState({
            [type]: e.target.value
        });
    }
    handleSubmit() {
        this.props.registerUser(this.state)
        .then(() => {
            this.props.history.push("/");
        })
    }

    render() {
        const errors = this.props.errors;
        if (this.props.session.id) {
            return <Redirect to="/"/>
        }
        return (
            <div className="signupform">
                <div className="form-header-container">
                    <h2 className="header">Sign Up</h2>
                </div>

                <div className="form-input-container">
                    <h3>Name</h3>
                    <input type="text" label="Name" className="form-input" onChange={(e) => this.handleOnChange(e, "name")} value={this.state.name}></input>
                    {errors.name ? <span>{errors.name}</span> : <span></span>}

                    <h3>Email</h3>
                    <input type="email" label="Email" className="form-input" onChange={(e) => this.handleOnChange(e, "email")} value={this.state.email}></input>
                    {errors.email ? <span>{errors.email}</span> : ""}

                    <h3>Password</h3>
                    <input type="password" label="Password" className="form-input" onChange={(e) => this.handleOnChange(e, "password")} value={this.state.password}></input>
                    {errors.password ? <span>{errors.password}</span> : ""}

                    <h3>Confirm Password</h3>
                    <input type="password" label="Confirm Password" className="form-input" onChange={(e) => this.handleOnChange(e, "password2")} value={this.state.password2}></input>
                    {errors.password2 ? <span>{errors.password2}</span> : ""}
                </div>

                <div className="form-button-container">
                    <div onClick={this.handleSubmit} className="form-button">Submit</div>
                </div>
                <div className="form-bottom-line">Already have an account? <Link to="/login">Log In</Link> here</div    >
            </div>
        )
    }
}

export default SignupForm;