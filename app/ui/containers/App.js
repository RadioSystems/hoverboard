import React from "react";
import {connect} from "react-redux";
import AppHeader from "../components/header/AppHeader";
import AppFooter from "../components/footer/AppFooter";
import AppUpdateBar from "../components/app_updates/AppUpdateBar";
import Modal from "../components/modals/Modal";
import AppUpdateActions from "../actions/AppUpdateActions";
import "./app.scss";
import $ from "jquery";

class App extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="app">
                <AppUpdateBar updateAvailable={this.props.updateAvailable} installUpdate={this.props.installUpdate}/>
                <div className="wrapper">
                    <AppHeader device={this.props.device} customer={this.props.customer}/>
                    <div className="content">
                        {this.props.children}
                    </div>
                    <AppFooter />
                </div>
                <Modal />
            </div>
        );
    }
};

function mapStateToProps(state) {
    return {
        updateAvailable: state.appUpdates.updateAvailable
    };
}

function mapDispatchToProps(dispatch){
    return{
        installUpdate: () => {
            dispatch(AppUpdateActions.installUpdate())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);