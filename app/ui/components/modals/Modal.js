import React, {Component} from "react";
import { connect } from "react-redux";
import jQuery from "jquery";
import ModalActions from "../../actions/ModalActions";
import * as modalTypes from "./ModalTypes";
import Alert from "./Alert";
import Confirm from "./Confirm";
import "./modal.scss";

//legacy loading, bootstrap package doesn't yet support es6 modules
window.$ = jQuery;
window.jQuery = jQuery;
require('bootstrap');

const modalClassMap = {};

modalClassMap[modalTypes.ALERT] = Alert;
modalClassMap[modalTypes.CONFIRM] = Confirm;

class Modal extends Component {
    componentDidUpdate(){
        if(this.props.visible){
            $(this.refs.modal).modal("show");
        }else{
            $(this.refs.modal).modal("hide");
        }
    }
    render() {
        var ModalContent = modalClassMap[this.props.type];

        return (
            <div ref="modal" className="modal fade" role="dialog" data-backdrop="static">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <ModalContent hideModal={this.props.hideModal} sendMessageToDevice={this.props.sendMessageToDevice} {...this.props.modalProps}/>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        visible: state.modal.visible,
        type: state.modal.type,
        modalProps: state.modal.modalProps
    };
}

function mapDispatchToProps(dispatch) {
  	return {
          hideModal: () => {
              dispatch(ModalActions.hideModal());
          }
      };
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);