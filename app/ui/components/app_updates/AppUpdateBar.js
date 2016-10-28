import React, {Component} from "react";
import "./app-update-bar.scss";

class AppUpdateBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            updateDismissed: false
        }
        this.handleDismissClick = this.handleDismissClick.bind(this);
        this.handleInstallClick = this.handleInstallClick.bind(this);
    }
    handleDismissClick(){
        this.setState({
            updateDismissed: true
        });
    }
    handleInstallClick(){
        this.props.installUpdate();
    }
    render() {
        var style = (this.props.updateAvailable && !this.state.updateDismissed) ? {height: "55px", padding: "10px"} : {height: "0", padding: "0"};
        return (
            <div className="app-update-bar" style={style}>
                <span className="text-center">An update is available, and will be installed the next time you restart the app.</span>
                <button className="btn" onClick={this.handleDismissClick}>
                    <i className="fa fa-times"></i>
                    Restart Later
                </button>
                <button className="btn" onClick={this.handleInstallClick}>
                    <i className="fa fa-refresh"></i>
                    Restart Now
                </button>
            </div>
        );
    }
}

export default AppUpdateBar;