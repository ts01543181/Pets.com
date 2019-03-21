import { ADD_BOARD, DELETE_BOARD, GET_BOARDS } from "../actions/actionType";

const boardReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case ADD_BOARD:
            return [...state, action.payload];
        case DELETE_BOARD:
            const ind = state.findIndex((e) => e.id === action.payload);
            const copy = [...state];
            copy.splice(ind, 1);
            return copy;
        case GET_BOARDS:
            return action.payload
        default:
            return state;
    }
};

export default boardReducer;