import React from "react";
import packageInfo from "../../../package.json";
import "./app-footer.scss";

const AppFooter = () => {
    return (
        <footer className="app-footer">
            <span className="text-left"><b>App Version: </b> {packageInfo.version}</span>
            <span className="text-right">&copy; [Your Company Name]. All Rights Reserved</span>
        </footer>
    );
};

export default AppFooter;
