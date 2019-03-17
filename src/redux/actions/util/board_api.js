import axios from "axios";
import { ADD_BOARD, DELETE_BOARD, GET_ERRORS } from "../actionType";

export const addBoard = (board) => dispatch => {
    return axios.post("/api/boards/add", board)
    .then(res => {
        dispatch({
            type: ADD_BOARD,
            payload: res.data
        });
        return Promise.resolve();
    })
    .catch(e => {
        dispatch({
            type: GET_ERRORS,
            payload: e.response.data
        });
        throw new Error();
    }) 
};

export const deleteBoard = board => dispatch => {
    return axios.delete("/api/boards/delete", {data: board.id})
    .then(res => {
        dispatch({
            type: DELETE_BOARD,
            payload: board.id
        });
        return Promise.resolve();
    })
    .catch(e => {
        dispatch({
            type: GET_ERRORS,
            payload: e.response.data
        });
        throw new Error();
    }) 
};
