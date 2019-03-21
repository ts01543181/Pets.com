import { connect } from "react-redux";
import Boards from "./Boards";
import { addBoard, getBoards } from "../redux/actions/util/board_api";
import { createTeam }from "../redux/actions/util/team_api";

const mapStateToProps = state => ({
    session: state.session,
    boards: state.boards,
    teams: state.teams
});

const mapDispatchToProps = dispatch => ({
    addBoard: (board) => dispatch(addBoard(board)),
    getBoards: (creator) => dispatch(getBoards(creator)),
    createTeam: (team) => dispatch(createTeam(team))
});

const BoardsContainer = connect(mapStateToProps, mapDispatchToProps)(Boards);

export default BoardsContainer;