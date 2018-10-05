import React from "react";
import './CreateProjectPopup.scss';
import AppPopup from "../../../../components/app-popup/AppPopup";
import {AppPopupFormInput, AppPopupFormTextarea} from "../../../../components/app-popup/AppPopupFormControls";

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
      title: ''
    };
    this.defaultFunction = () => {
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  componentDidMount() {

  }

  render() {
    const {
      onSubmit = this.defaultFunction,
      onClose = this.defaultFunction
    } = this.props;
    return (
      <AppPopup title="Create new project" onClose={onClose}>
        <div className="app-popup-create-project">
          <div className="app-popup-form-component">
            <AppPopupFormInput
              description="name"
              name="title"
              type="text"
              value={this.state.title}
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

export default CreateProjectPopup;
