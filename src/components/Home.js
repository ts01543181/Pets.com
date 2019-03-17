import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavContainer from "./NavContainer";

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="home-container">         
                <div>123</div>
                <ul>
                    {
                        this.props.boards.map((board) => 
                            <li>{board.id}</li>
                        )
                    }
                </ul>
                
            </div>
        )
    }
}

export default Home;