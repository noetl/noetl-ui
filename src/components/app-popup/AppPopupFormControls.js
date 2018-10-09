import React from "react";
import './app-popup-controls.scss';
/**
 * @param props:
 * description: 'string'
 */
export const AppPopupFormControl = (props) => (
  <div className="app-popup-form-input">
    <span className="noselect description">{props.description}: </span>
    {props.children}
  </div>
)

/**
 * props:
 * description: 'string'
 * focused: 'bool'
 */
export class AppPopupFormInput extends React.Component{
  componentDidMount(){
    const {isFocused = false} = this.props;
    if(isFocused) {
      setTimeout(()=>{
        this.nameInput.focus();
      });
    }
  }
  render() {
    const props = {...this.props};
    delete props.isFocused;
    return(
      <div className="app-popup-form-input app-popup-form-controls">
        <span className="noselect description">{props.description}: </span>
        <input ref={(input) => { this.nameInput = input; }}
          {...props}/>
      </div>
    );
  }
}

/**
 * props:
 * description: 'string'
 * focused: 'bool'
 */
export class AppPopupFormTextarea extends React.Component{
  componentDidMount(){
    const {isFocused = false} = this.props;
    if(isFocused) {
      setTimeout(()=>{
        this.nameInput.focus();
      });
    }
  }
  render() {
    const props = {...this.props};
    delete props.isFocused;
    return(
      <div className="app-popup-form-input app-popup-form-controls">
        <span className="noselect description">{props.description}: </span>
        <textarea ref={(input) => { this.nameInput = input; }}
               {...props}/>
      </div>
    );
  }
}
