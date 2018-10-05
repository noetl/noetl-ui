import React from "react";
import './RunFlowPopup.scss';
import AppPopup from "../../components/app-popup/AppPopup";
import {
  AppPopupFormControl,
  AppPopupFormInput
} from "../../components/app-popup/AppPopupFormControls";
import MonacoEditor from "../../configeditor/MonacoEditor";

/**
 * props:
 * onClose: ()=>{}
 * onSubmit: (value)=>{}
 */
class RunFlowPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      context: `aws:
  access-key: "sdFASDFA"
  secret-key: "ASDASDFASDF"`,
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

  onChange = (newValue, e) => {
    this.setState({ context: newValue});
  }

  editorDidMount = (editor, monaco) => {
    this.editor = editor;
  }

  updateDimensions = () => {
    this.editor.layout();
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }
  render() {
    const options = {
      selectOnLineNumbers: true,
      roundedSelection: false,
      readOnly: false,
      cursorStyle: 'line',
      automaticLayout: false,
      tabSize: 2,
      fontSize: 12,
      lineNumbersMinChars: 3,
      scrollbar: {
        horizontalScrollbarSize: 4,
        verticalScrollbarSize: 4
      },
      minimap: {
        enabled: false
      }
    };
    const {
      onSubmit = this.defaultFunction,
      onClose = this.defaultFunction
    } = this.props;
    return (
      <AppPopup title="RUN: flow2" maxWidth="600px" onClose={onClose}>
        <div className="app-popup-create-project">
          <div className="app-popup-form-component">
            <AppPopupFormInput
              description="process name"
              name="title"
              type="text"
              value={this.state.title}
              onChange={this.handleInputChange}/>
            <AppPopupFormControl description="context">
              <MonacoEditor
                height="300px"
                width="100%"
                language="yaml"
                value={this.state.context}
                theme="vs-dark"
                options={options}
                onChange={this.onChange}
                editorDidMount={this.editorDidMount}
              />
            </AppPopupFormControl>
          </div>
          <div className="app-popup-buttons">
            <button className="app-popup-button">?</button>
            <button className="app-popup-button cancel-button" onClick={onClose}>Cancel</button>
            <button className="app-popup-button" onClick={() => {
              onSubmit(this.state)
            }}>Run
            </button>
          </div>
        </div>
      </AppPopup>
    );
  }
}

export default RunFlowPopup;
