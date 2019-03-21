import {combineReducers} from 'redux';
import sessionReducer from './session_reducer';
import errorsReducer from './session_errors_reducer';
import boardReducer from "./board_reducer";
import teamReducer from "./team_reducer";

const rootReducer = combineReducers({
  session: sessionReducer,
  errors: errorsReducer,
  boards: boardReducer,
  teams: teamReducer
});

export default rootReducer;