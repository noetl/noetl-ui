import React from "react";
import './TestFlowPopup.scss';
import AppPopup from "../../components/app-popup/AppPopup";
import {
  AppPopupFormControl,
  AppPopupFormInput
} from "../../components/app-popup/AppPopupFormControls";
import MonacoEditor from "../../configeditor/MonacoEditor";
import {set, get} from "../../LocalStorage";
import axios from "axios";
import {BACKEND_URL} from "../../env";
import {createItem} from "../flows/tree/treeDataHendle";

/**
 * props:
 * onClose: ()=>{}
 * onSubmit: (value)=>{}
 */
class TestFlowPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flow: '',
      result: ''
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

  onFlowChange = (newValue, e) => {
    this.setState({flow: newValue});
    set('test_flow', newValue);
  };

  runFlow = () => {
    axios.post(`${BACKEND_URL}/flow/run`,JSON.parse(this.state.flow))
      .then(res => {
        if((typeof res) !=="string"){
          this.setState({result: JSON.stringify(res, null, 2)});
        } else {
          this.setState({result: res});
        }
      })
      .catch(error => {
        this.setState({result: JSON.stringify(error, null, 2)});
      });
  };

  editorFlowDidMount = (editor, monaco) => {
    this.flowEditor = editor;
  };

  editorResultDidMount = (editor, monaco) => {
    this.resultEditor = editor;
  };

  updateDimensions = () => {
    setTimeout(() => {
      this.flowEditor.layout();
      this.resultEditor.layout();
    })
  };

  componentDidMount() {
    this.updateDimensions();
    setTimeout(() => {
      this.flowEditor.setValue(get('test_flow'));
    });
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
    const optionsResult = {
      selectOnLineNumbers: true,
      roundedSelection: true,
      readOnly: true,
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
      onSubmit = () => {
      },
      onClose = () => {
      }
    } = this.props;
    return (
      <AppPopup title="add your config to FLOW label" maxWidth="1200px" onClose={onClose}>
        <div className="app-popup-test-flow">
          <div className="app-popup-form-component">
            <div className="editors_wrapper">
              <AppPopupFormControl description="flow">

                <MonacoEditor
                  height="400px"
                  width="100%"
                  language="json"
                  value={this.state.flow}
                  theme="vs-dark"
                  options={options}
                  onChange={this.onFlowChange}
                  editorDidMount={this.editorFlowDidMount}
                />
              </AppPopupFormControl>
              <AppPopupFormControl description="result">

                <MonacoEditor
                  height="400px"
                  width="100%"
                  language="json"
                  value={this.state.result}
                  theme="vs-dark"
                  options={optionsResult}
                  //onChange={this.onFlowChange}
                  editorDidMount={this.editorResultDidMount}
                />
              </AppPopupFormControl>
            </div>

          </div>
          <div className="app-popup-buttons">
            <button className="app-popup-button">?</button>
            <button className="app-popup-button cancel-button" onClick={onClose}>Cancel</button>
            <button className="app-popup-button" onClick={this.runFlow}>Run</button>
          </div>
        </div>
      </AppPopup>
    );
  }
}

export default TestFlowPopup;
