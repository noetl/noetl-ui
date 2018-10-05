import React from "react";
import './app-popup.scss';
import Modal from "../ModalPopup/ModalPopup";

/**
 * props:
 * title: 'string'
 * maxWidth: 'string' '300px || em || hv'
 * minHeight: 'string' '300px || em || hv'
 * onClose: ()=>{}
 */
class AppPopup extends React.Component {
  constructor(props) {
    super(props);
    this.defaultFunction = () => {
    };
  }

  componentDidMount() {

  }

  render() {
    const {
      maxWidth = '300px',
      minHeight = '100px',
      title = 'please add prop title.',
      onClose = this.defaultFunction,
      children
    } = this.props;
    return (
      <Modal>
        <div className="app-popup" style={{maxWidth, minHeight}}>
          <span className="noselect close" onClick={onClose}>×</span>
          <h3 className="noselect">{title}</h3>
          <div className="popup-container">
            {children}
          </div>
        </div>
      </Modal>
    );
  }
}

export default AppPopup;
