import React from "react";
import './login.scss';
import {handleInputChange} from "../utils/hendleInputChange";
import AppPopup from "../components/app-popup/AppPopup";
import {AppPopupFormInput} from "../components/app-popup/AppPopupFormControls";
import authorization from "../authorization/authorization";
import {Redirect} from "react-router-dom";


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: ''
    };
    this.defaultFunction = () => {
    };
    this.handleInputChange = handleInputChange(this.setState.bind(this));
  }

  onSubmit = () => {
    if(this.state.login==='noetl' && this.state.password==='noetl'){
      authorization.authenticate(() => {
        this.setState(() => ({
          redirectToReferrer: true
        }))
      });
    }

  };

  componentDidMount() {

  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer === true) {
      return <Redirect to={from} />
    }
    return (
      <div className="login_page">
        <AppPopup title="Sign in" hiddenCloseButton={false}>
          <div className="login_page_form">
            <div className="app-popup-form-component">
              <AppPopupFormInput
                autoсomplete="off"
                description="login"
                name="login"
                type="text"
                isFocused={true}
                value={this.state.name}
                onChange={this.handleInputChange}/>
              <AppPopupFormInput
                autoсomplete="off"
                description="password"
                name="password"
                type="password"
                isFocused={false}
                value={this.state.name}
                onChange={this.handleInputChange}/>
            </div>
            <div className="app-popup-buttons">
              <button className="app-popup-button">?</button>
              <button className="app-popup-button sign_in" onClick={this.onSubmit}>Sign in</button>
            </div>
          </div>
        </AppPopup>
      </div>
    );
  }
}

export default Login;
