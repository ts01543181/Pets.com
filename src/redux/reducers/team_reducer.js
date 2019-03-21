import { CREATE_TEAM, DELETE_TEAM, GET_TEAM } from "../actions/actionType";

const teamReducer = (state = [], action) => {
    Object.freeze(state);
    switch(action.type) {
        case GET_TEAM:
            return action.payload;
        case CREATE_TEAM:
            return [...state, action.payload];
        case DELETE_TEAM:
            const id = action.payload;
            let copy = state;
            let ind;
            for (let i = 0; i < copy.length; i++) {
                if (copy[i].id === id) {
                    ind = i;
                    break;
                }
            }
            copy.splice(ind, 1);
            return copy;
        default:
            return state;
    }
};

export default teamReducer;