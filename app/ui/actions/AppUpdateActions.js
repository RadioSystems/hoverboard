import * as types from "../action_types/AppUpdateActionTypes";

class AppUpdateActions{
    static updateAvailable(){
        return {type: types.APP_UPDATE_AVAILABLE}
    }
    static installUpdate(){
        return {type: types.INSTALL_APP_UPDATE};
    }
}

export default AppUpdateActions;