import React from "react";
import { Link } from "react-router-dom";

const Panel = ({teams}) => {
    
    return (
        <div className="panel-container">
            <Link to="/boards">Boards</Link>
            <Link to="/home">Home</Link>

            <div>
                <span>Teams</span>
                {
                    teams.map((team) => {
                        // team list (drop down)
                    })
                }
                <div></div>
            </div>
        </div>
    )
};

export default Panel;