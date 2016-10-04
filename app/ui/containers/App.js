import React from "react";
import {connect} from "react-redux";
import AppHeader from "../components/header/AppHeader";
import AppFooter from "../components/footer/AppFooter";
import Modal from "../components/modals/Modal";
import "./app.scss";
import $ from "jquery";

class App extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="app">
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
    };
}

export default connect(mapStateToProps)(App);