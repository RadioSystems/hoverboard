import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";
import {Router, hashHistory} from "react-router";
import routes from "./routes";
import configureStore from "./store/ConfigureStore";
import * as mainEvents from "../mainEvents";
import * as modalTypes from "./components/modals/ModalTypes";
import AppUpdateActions from "./actions/AppUpdateActions";
import ModalActions from "./actions/ModalActions";
import "./styles/buttons.scss";

//electronRequire is defined in index.html, it wraps require before webpack'ed script takes over
//this way we can still require in the ipc from electron
const ipc = electronRequire("electron").ipcRenderer; 
const store = configureStore();

render (
    <Provider store={store}>
        <Router history={hashHistory} routes={routes}/>
    </Provider>, document.getElementById("app")
)

//IPC events that have to be monitored here, because its our only global access to the store
ipc.on(mainEvents.APP_READY, (event, arg) => {
    store.dispatch(ModalActions.showAlert("Hoverboard is Ready To Fly!"));
});

ipc.on(mainEvents.APP_UPDATE_AVAILABLE, (event, arg) => {
    store.dispatch(AppUpdateActions.updateAvailable());
});

ipc.on(mainEvents.EXAMPLE_EVENT, (event, arg) => {
    store.dispatch(ModalActions.showAlert("Example Event received by Electron!"));
});