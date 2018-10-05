import ReactDOM from "react-dom";
import React from "react";
import './modal.scss';
const modalRoot = document.getElementById('modal-root');

/**
 * props:
 * isBackground: true || false
 * backgroundClick: ()=>{}
 * backgroundColor: '#212121 || rgb || rgba'
 */
class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
    this.backgroundDefaultClick = ()=>{};
  }

  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render() {
    const {
      isBackground = true,
      backgroundColor = 'rgba(255, 255, 255, 0.12)',
      backgroundClick = this.backgroundDefaultClick
    } = this.props;
    return ReactDOM.createPortal(
      <div className="smart-popup-template">
        {isBackground?<div className="bg" style={{backgroundColor}} onClick={backgroundClick}></div>:null}
        <div className="popup-body">
          <div className="popup-content">
            {this.props.children}
          </div>
        </div>
      </div>,
      this.el,
    );
  }
}

export default Modal;
