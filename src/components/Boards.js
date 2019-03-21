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
        console.log('here')
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
                    <Link to="/boards">Boards</Link>
                    <Link to="/home">Home</Link>

                    <div>
                        <span>Teams</span>
                        <ul>
                            {
                                this.props.teams.map((team) => {
                                    return <li>{team.title}</li>
                                })
                            }
                            <li onClick={this.createTeam}>+ Create a team</li>
                        </ul>
                    </div>
                </div>

                <div className="boards-list-container">
                    <ul>
                        {
                            this.props.boards.map((board) => 
                                <li>{board.title}</li>
                            )
                        }
                        <li onClick={this.createBoard}>+ Create new board...</li>
                    </ul>
                </div>
                
                {
                    // team boards
                }
            </div>
        )
    }
}

export default Boards;