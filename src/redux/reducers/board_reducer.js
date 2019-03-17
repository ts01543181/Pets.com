import { ADD_BOARD, DELETE_BOARD } from "../actions/actionType";

const boardReducer = (state = [{id: "test1"}, {id:"test2"}], action) => {
    Object.freeze(state);
    switch (action.type) {
        case ADD_BOARD:
            return [...state, action.payload];
        case DELETE_BOARD:
            const ind = state.findIndex((e) => e.id === action.payload);
            const copy = [...state];
            copy.splice(ind, 1);
            return copy;
        default:
            return state;
    }
};

export default boardReducer;