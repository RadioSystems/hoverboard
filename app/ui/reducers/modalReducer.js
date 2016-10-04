import * as types from "../action_types/ModalActionTypes";
import initialState from "./initialState";

export default function modalReducer(state = initialState.modal, action) {
    switch (action.type) {
        case types.SHOW_MODAL:
            return { visible: true, type: action.modalType, modalProps: action.modalProps };
        case types.HIDE_MODAL:
            return { visible: false, type: "ALERT" };
        default:
            return state;
    }
}