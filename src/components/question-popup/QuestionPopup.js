import React from "react";
import './QuestionPopup.scss';
import AppPopup from "../app-popup/AppPopup";

/**
 * props:
 * onCancel: ()=>{}
 * onAccept: (value)=>{}
 * documentationLink: '#'
 * cancelButtonText: 'string'
 * acceptButtonText: 'Yes'
 */
class QuestionPopup extends React.Component {
  constructor(props) {
    super(props);
    this.defaultFunction = () => {
    };
  }

  componentDidMount() {

  }

  render() {
    const {
      onAccept = this.defaultFunction,
      onCancel = this.defaultFunction,
      documentationLink = '#',
      cancelButtonText = 'No',
      acceptButtonText = 'Yes',
    } = this.props;
    return (
      <AppPopup minHeight="50px" onClose={onCancel}>
        <div className="app-popup-question">
          <div className="app-popup-question-text">
            {this.props.children}
          </div>
          <div className="app-popup-buttons">
            <a href={documentationLink} target="_blank"><button className="app-popup-button">?</button></a>
            <button className="app-popup-button cancel-button" onClick={onCancel}>{cancelButtonText}</button>
            <button className="app-popup-button" onClick={onAccept}>{acceptButtonText}</button>
          </div>
        </div>
      </AppPopup>
    );
  }
}

export default QuestionPopup;
