import { combineReducers } from "redux";
import addRequestReducer from "./addRequestReducer";

const rootReducer = combineReducers({
  addRequest: addRequestReducer
});

export default rootReducer;
