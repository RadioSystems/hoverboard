import React, {Component} from "react";
import {connect} from "react-redux";
import ModalActions from "../actions/ModalActions";
import * as events from "../../mainEvents.js";

const ipc = electronRequire("electron").ipcRenderer; 

class HomePage extends Component{
    constructor(props){
        super(props);
        this.handleExampleClick = this.handleExampleClick.bind(this);
    }
    handleExampleClick(){
        this.props.showConfirm("Send Example Event?", this.props.sendExampleEvent);
    }
    render(){
        return (
            <div className="home-page">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="text-center">Welcome to Hoverboard!</h2>
                        <br/>
                        <h3 className="text-center">A React-Redux-Electron Starter App</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                        <p>
                            This starter app gives you all the tools necessary to get an electron app built with react-redux off the ground. You can view it in action by clicking on the  
                            <b> Movies</b> tab above. It uses a mock API to simulate retrieving a list of movies. To see an example event sent to electron, click on the test button below.
                            Simply peruse the app code, and when you are comfortable, removing the existing components, routes, and actions, and wire up your own!
                        </p>
                        <br/>
                        <p>To see what an app update could look like uncomment the bottom block of code in the <b>configureSquirrelUpdates()</b> function of main.js</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <h3 className="text-center">Hot Module Reloading</h3>
                    </div>
                    <div className="col-md-8 col-md-offset-2">
                        <p>If you're running in dev mode, make a change to the HomePage component to see Hot Module Reloading in action</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <h3 className="text-center">Send An Example Event to the Electron Process?</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 col-md-offset-4">
                        <button className="btn btn-default btn-block" onClick={this.handleExampleClick}>
                            <i className="fa fa-gears"></i>
                            Example Event
                        </button>
                    </div>
                </div>
            </div>
        );
    }
};

function mapStateToProps(state) {
    return {
        movies: state.movies
    };
}

function mapDispatchToProps(dispatch){
    return{
        showConfirm: (message, confirmFunction, cancelFunction) => {
            dispatch(ModalActions.showConfirm(message, confirmFunction, cancelFunction));
        },
        sendExampleEvent: () => {
            ipc.send(events.EXAMPLE_EVENT);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);