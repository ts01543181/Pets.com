import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavContainer from "./NavContainer";
import Panel from "./Panel";
import "../css/boards.css";

class Boards extends Component {
    constructor(props) {
        super(props);
        this.createBoard = this.createBoard.bind(this);
        this.createTeam = this.createTeam.bind(this);
    }

    componentDidMount() {
        this.props.getBoards(this.props.session.email);
        this.props.getTeams(this.props.session.email);
    }   

    createTeam() {
        const mockTeam = {
            title: "test team",
            description: "",
            private: false,
            admin: [this.props.session.email],
            members: [this.props.session.email]
        };
        this.props.createTeam(mockTeam, this.props.session.email);
    }
    createBoard() {
        const mockBoard = {
            title: "test",
            team: null,
            private: false,
            theme: "white",
            creator: this.props.session.email
        };
        this.props.addBoard(mockBoard);
    }
    render() {
        return (
            <div className="boards-container">         
                <div className="panel-container">
                    <div className="nav-list-container">
                        <div className="nav-item"><Link to="/boards">Boards</Link></div>
                        <div className="nav-item"><Link to="/home">Home</Link></div>
                    </div>
                    
                    <div className="teams-list-container">
                        <div className="teams teams-list title">Teams</div>
                        {
                            this.props.teams.map((team) => 
                                <div className="teams">{team.title}</div>
                            )
                        }
                        <div className="teams" onClick={this.createTeam}>+ Create a team</div>
                    </div>
                </div>

                <div className="boards-list-outer-container">
                    <div className="boards-title">Personal Boards</div>
                    <div className="boards-list-container">
                        {
                            this.props.boards.map((board) => 
                                <div className="boards"><span>{board.title}</span></div>
                            )
                        }
                        <div className="boards create-button" onClick={this.createBoard}><span>Create New Board</span></div>
                    </div>
                    
                </div>
                
                {
                    // team boards
                }
            </div>
        )
    }
}

export default Boards;