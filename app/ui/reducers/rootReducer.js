import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";
import modalReducer from "./modalReducer";
import movieReducer from "./movieReducer";

const rootReducer = combineReducers({
  movies: movieReducer,
  modal: modalReducer,
  routing: routerReducer
});

export default rootReducer;