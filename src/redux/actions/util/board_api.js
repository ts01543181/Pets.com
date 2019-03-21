import axios from "axios";
import { ADD_BOARD, DELETE_BOARD, GET_ERRORS, GET_BOARDS } from "../actionType";

export const getBoards = (creator) => dispatch => {
    axios.get(`/api/boards/get_boards/${creator}`)
    .then(res => {
        dispatch({
            type: GET_BOARDS,
            payload: res.data
        });
    })
}
export const addBoard = (board) => dispatch => {
    axios.post("/api/boards/add", board)
    .then(res => {
        dispatch({
            type: ADD_BOARD,
            payload: res.data
        });
    })
    .catch(e => {
        dispatch({
            type: GET_ERRORS,
            payload: e.response.data
        });
    }) 
};

export const deleteBoard = board => dispatch => {
    axios.delete("/api/boards/delete", {data: board.id})
    .then(res => {
        dispatch({
            type: DELETE_BOARD,
            payload: board.id
        });
    })
    .catch(e => {
        dispatch({
            type: GET_ERRORS,
            payload: e.response.data
        });
    }) 
};
