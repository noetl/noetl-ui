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
 * @param props:
 * description: 'string'
 */
export const AppPopupFormInput = (props) => (
  <div className="app-popup-form-input app-popup-form-controls">
    <span className="noselect description">{props.description}: </span>
    <input {...props}/>
  </div>
)

/**
 * @param props:
 * description: 'string'
 */
export const AppPopupFormTextarea = (props) => (
  <div className="app-popup-form-input app-popup-form-controls">
    <span className="noselect description">{props.description}: </span>
    <textarea {...props}/>
  </div>
)
