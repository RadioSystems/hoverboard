import React from "react";

class Alert extends React.Component{
    render(){
        return (
            <div>
                <div className="modal-body">
                    <h4 className="text-center"><b>{this.props.text}</b></h4>
                </div>
                <div className="modal-footer">
                    <div className="row">
                        <div className="col-md-3 col-md-offset-9">
                            <button className="btn btn-default btn-block" onClick={this.props.hideModal}>Ok</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Alert;