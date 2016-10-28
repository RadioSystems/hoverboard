import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";
import appUpdateReducer from "./appUpdateReducer";
import modalReducer from "./modalReducer";
import movieReducer from "./movieReducer";

const rootReducer = combineReducers({
  appUpdates: appUpdateReducer,
  movies: movieReducer,
  modal: modalReducer,
  routing: routerReducer
});

export default rootReducer;