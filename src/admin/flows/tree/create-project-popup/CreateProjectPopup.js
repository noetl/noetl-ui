import React from "react";
import './CreateProjectPopup.scss';
import AppPopup from "../../../../components/app-popup/AppPopup";
import {AppPopupFormInput, AppPopupFormTextarea} from "../../../../components/app-popup/AppPopupFormControls";
import {handleInputChange} from "../../../../utils/hendleInputChange";

/**
 * props:
 * onClose: ()=>{}
 * onSubmit: (value)=>{}
 */
class CreateProjectPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      name: ''
    };
    this.defaultFunction = () => {
    };
    this.handleInputChange = handleInputChange(this.setState.bind(this));
  }

  onSubmit = () => {
    const {
      onAccept = this.defaultFunction
    } = this.props;

    if (this.state.name !== '') {
      onAccept(this.state);
    }
  }

  componentDidMount() {

  }

  render() {
    const {
      onClose = this.defaultFunction
    } = this.props;
    return (
      <AppPopup title="Create new template" onClose={onClose}>
        <div className="app-popup-create-project">
          <div className="app-popup-form-component">
            <AppPopupFormInput
              description="name"
              name="name"
              type="text"
              isFocused={true}
              value={this.state.name}
              onChange={this.handleInputChange}/>
            <AppPopupFormTextarea
              description="description"
              name="description"
              value={this.state.description}
              onChange={this.handleInputChange}/>
          </div>
          <div className="app-popup-buttons">
            <button className="app-popup-button">?</button>
            <button className="app-popup-button cancel-button" onClick={onClose}>Cancel</button>
            <button className="app-popup-button" onClick={this.onSubmit}>Create
            </button>
          </div>
        </div>
      </AppPopup>
    );
  }
}

export default CreateProjectPopup;
