import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="home-container">
                {
                    this.props.session.id ? 
                    <span>Hello, {this.props.session.name}</span> 
                    
                    
                    :
                    <span>Please <Link to="/login">Log In</Link> to enable our service!</span>
                }
            </div>
        )
    }
}

export default Home;