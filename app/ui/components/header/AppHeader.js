import React from "react";
import {Link} from "react-router";
import "./app-header.scss";

class AppHeader extends React.Component{
    render(){
        return(
            <header>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#">
                                <img src="./ui/images/react-logo-transparent.png" height="40" width="40"/>
                            </a>
                        </div>
                        <ul className="nav navbar-nav nav-tabs navbar-right">
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/movies">Movies</Link></li>
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
}

export default AppHeader;