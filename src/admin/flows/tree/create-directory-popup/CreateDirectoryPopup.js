import React from "react";
import './CreateDirectoryPopup.scss';
import AppPopup from "../../../../components/app-popup/AppPopup";
import {AppPopupFormInput} from "../../../../components/app-popup/AppPopupFormControls";
import {handleInputChange} from "../../../../utils/hendleInputChange";
/**
 * props:
 * onClose: ()=>{}
 * onSubmit: (value)=>{}
 */
class CreateDirectoryPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dirName: ''
    };
    this.defaultFunction = () => {
    };
    this.handleInputChange = handleInputChange(this.setState);
  }

  componentDidMount() {

  }

  render() {
    const {
      onSubmit = this.defaultFunction,
      onClose = this.defaultFunction
    } = this.props;
    return (
      <AppPopup title="Create new directory" onClose={onClose}>
        <div className="app-popup-create-project">
          <div className="app-popup-form-component">
            <AppPopupFormInput
              description="name"
              name="title"
              type="text"
              isFocused={true}
              value={this.state.dirName}
              onChange={this.handleInputChange}/>
          </div>
          <div className="app-popup-buttons">
            <button className="app-popup-button">?</button>
            <button className="app-popup-button cancel-button" onClick={onClose}>Cancel</button>
            <button className="app-popup-button" onClick={() => {
              onSubmit(this.state)
            }}>Create
            </button>
          </div>
        </div>
      </AppPopup>
    );
  }
}

export default CreateDirectoryPopup;
