import * as types from "../action_types/MovieActionTypes";
import initialState from "./initialState";

export default function movieReducer(state = initialState.movies, action) {
    switch (action.type) {
        case types.MOVIES_LOADED:
            var newState = Object.assign([], action.movies);
            return newState;
        default:
            return state;
    }
}