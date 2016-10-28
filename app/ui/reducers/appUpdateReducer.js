import * as types from "../action_types/AppUpdateActionTypes";
import initialState from "./initialState";
import objectAssign from "object-assign";

const ipc = electronRequire("electron").ipcRenderer;

export default function appUpdateReducer(state = initialState.appUpdates, action) {
    switch (action.type) {
        case types.APP_UPDATE_AVAILABLE:
            var newState = objectAssign({}, state);
            newState.updateAvailable = true;
            return newState;
        case types.INSTALL_APP_UPDATE:
            ipc.send(types.INSTALL_APP_UPDATE);
            return state;
        default:
            return state;
    }
}