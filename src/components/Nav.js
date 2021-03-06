import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/nav.css";

class Nav extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.props.logoutUser()
        .then(() => {
            this.props.history.push("/")
        })
    }
    render() {
        return (
            <div className="navbar-container">
                <div className="logo-container"><Link to="/">Hello</Link></div>
                {
                    this.props.session.id ? 
                    <div className="navbar-inner">
                        
                        <button className="session-button" onClick={() => this.handleClick()}>Log Out</button> 
                    </div>
                        :
                    <div className="button-container">
                        <button className="session-button">
                            <Link to="/login">
                                Log In
                            </Link>
                        </button>
                        <button className="session-button">
                            <Link to="/signup">
                                Sign Up
                            </Link>
                        </button>
                        
                    </div>
                }
            </div>
        )
    }
}

export default Nav;