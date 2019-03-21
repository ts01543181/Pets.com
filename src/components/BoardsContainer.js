import { connect } from "react-redux";
import Boards from "./Boards";
import { addBoard, getBoards } from "../redux/actions/util/board_api";
import { createTeam, getTeams }from "../redux/actions/util/team_api";

const mapStateToProps = state => ({
    session: state.session,
    boards: state.boards,
    teams: state.teams
});

const mapDispatchToProps = dispatch => ({
    addBoard: (board) => dispatch(addBoard(board)),
    getBoards: (creator) => dispatch(getBoards(creator)),
    createTeam: (team, creator) => dispatch(createTeam(team, creator)),
    getTeams: (email) => dispatch(getTeams(email))
});

const BoardsContainer = connect(mapStateToProps, mapDispatchToProps)(Boards);

export default BoardsContainer;