import React from 'react';

class Confirm extends React.Component{
    constructor(props){
        super(props);
        this.handleYesClick = this.handleYesClick.bind(this);
        this.handleNoClick = this.handleNoClick.bind(this);
    }
    handleYesClick(){
        this.props.hideModal();
        this.props.confirmFunction();
    }
    handleNoClick(){
        this.props.hideModal();
        if(typeof(this.props.cancelFunction) === "function"){
            this.props.cancelFunction();
        }
    }
    render(){
        return (
            <div>
                <div className="modal-body">
                    <h4 className="text-center"><b>{this.props.text}</b></h4>
                </div>
                <div className="modal-footer">
                    <div className="row">
                        <div className="col-md-3 col-md-offset-6">
                            <button className="btn btn-default btn-block" onClick={this.handleYesClick}>Yes</button>
                        </div>
                        <div className="col-md-3">
                            <button className="btn btn-default btn-block" onClick={this.handleNoClick}>No</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Confirm;