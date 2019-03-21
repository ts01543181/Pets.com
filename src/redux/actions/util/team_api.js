import axios from "axios";
import { CREATE_TEAM, DELETE_TEAM, GET_TEAM, GET_ERRORS } from "../actionType";

export const createTeam = (team, creator) => (dispatch) => {
    axios.post("/api/teams/create", {team, creator})
    .then(res => {
        dispatch({
            type: CREATE_TEAM,
            payload: res.data
        });
    })
    .catch(e => {
        dispatch({
            type: GET_ERRORS,
            payload: e.response.data
        })
    })
};

export const getTeams = (email) => (dispatch) => {
    axios.get(`/api/teams/get/${email}`)
    .then(res => {
        dispatch({
            type: GET_TEAM,
            payload: res.data
        });
    })
    .catch(e => {
        dispatch({
            type: GET_ERRORS,
            payload: e.response.data
        });
    });
};
