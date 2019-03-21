import axios from "axios";
import { CREATE_TEAM, DELETE_TEAM, GET_ERRORS } from "../actionType";

export const createTeam = (team) => (dispatch) => {
    axios.post("/api/teams/create", team)
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
}