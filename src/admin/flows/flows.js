import React from "react";
import "./flows.scss";
import Tree from "./tree/tree";
import MonacoEditor from "../../configeditor/MonacoEditor";
import FlowTabs from "./flow-tabs/FlowTabs";
import ConfigTypeTabs from "./config-type-tabs/ConfigTypeTabs";
import Toggleable from "../../components/Toggleable";

class Flows extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code: `workflow:
  version: "1"
  id: "sample-demo"
  description: "Retrieves BTC/USD exchange rate from 3 different exchanges, calculates an average and puts the latter into db."
  context:
    aws:
      access-key: "sdFASDFA"
      secret-key: "ASDASDFASDF"
  tasks:
    retrive-btc-usd:
      description: "Retrieves BTC/USD exchange rate from 3 different exchanges"
      steps:
      - s3:
          action: "directory"
          path: "s3a://datalake/{{ loop.value | strip(\\"https://\\") | \\"/\\" }}"
          validate: "empty"
        context: "aws"
      - rest:
          action: "download"
          url: "{{ .value }}"
          path: 's3a://datalake/{{ loop.value | strip(\\"https://\\") | \\"/\\" }}'
        context: "aws"
    loop:
      - "https://cex.io/api/last_price/BTC/USD"
      - "https://api.bitfinex.com/v1/pubticker/btcusd"
      - "https://api.hitbtc.com/api/2/public/ticker/BTCUSD"

    aggragate-btc-usd:
      description: "Calculate BTC/USD average and display result"
      steps:
      - aggregate:
          action: "average"
          sources:
          - "s3a://datalake/cex.io/api/last_price/BTC/USD/"
          - "s3a://datalake/api.bitfinex.com/v1/pubticker/btcusd/"
          - "s3a://datalake/api.hitbtc.com/api/2/public/ticker/BTCUSD/"
        context: "aws"
      require:
      - "retrive-btc-usd"
`,
    }
  }

  updateDimensions = () => {
    this.editor.layout();
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  onChange = (newValue, e) => {
    console.log('onChange', newValue, e); // eslint-disable-line no-console
  }

  editorDidMount = (editor, monaco) => {
    // eslint-disable-next-line no-console
    //console.log('editorDidMount', editor, editor.getValue(), editor.getModel());
    this.editor = editor;
  }

  changeEditorValue = () => {
    if (this.editor) {
      this.editor.setValue('// code changed! \n');
    }
  }

  changeBySetState = () => {
    this.setState({code: '// code changed by setState! \n'});
  }


  render() {
    const {code} = this.state;
    const options = {
      selectOnLineNumbers: true,
      roundedSelection: false,
      readOnly: false,
      cursorStyle: 'line',
      automaticLayout: false,
      tabSize: 2,
    };
    return (
      <div className="flows-page">
        <div className="flows-menu-component noselect">
          <Toggleable toggledStyle={{height: '30%'}}>
            {
              (toggled, click) => (
                <React.Fragment>
                  <div className="block-control" onClick={click}>
                    <i className={"fas fa-chevron-" + (toggled?'down':'left')}></i>
                    <span>OPEN FLOWS</span>
                  </div>
                  {toggled ?
                    <div className="block-control-wrapper">
                      <div className="open-flows-component">
                        <div className="open-flow-item">
                          <i className="fas fa-code-branch"></i>
                          <span>flow1</span>
                        </div>
                        <div className="open-flow-item active">
                          <i className="fas fa-code-branch"></i>
                          <span>flow2</span>
                        </div>

                        <div className="open-flow-item">
                          <i className="fas fa-code-branch"></i>
                          <span>flow2111111111flow2111111111flow4</span>
                        </div>

                        <div className="open-flow-item">
                          <i className="fas fa-code-branch"></i>
                          <span>flow2111111111flow2111111111flow5</span>
                        </div>

                        <div className="open-flow-item">
                          <i className="fas fa-code-branch"></i>
                          <span>flow2111111111flow2111111111flow6</span>
                        </div>

                        <div className="open-flow-item">
                          <i className="fas fa-code-branch"></i>
                          <span>flow2111111111flow2111111111flow71</span>
                        </div>
                      </div>
                    </div>
                    : null}

                </React.Fragment>
              )
            }
          </Toggleable>
          <Toggleable toggledStyle={{height: '70%'}}>
            {
              (toggled, click) => (
                <React.Fragment>
                  <div className="block-control" onClick={click}>
                    <i className={"fas fa-chevron-" + (toggled?'down':'left')}></i>
                    <span>TEMPLATES</span>
                  </div>
                  {toggled ?
                    <div className="block-control-wrapper">
                      <Tree/>
                    </div>
                    : null}

                </React.Fragment>
              )
            }
          </Toggleable>
        </div>
        <div className="flow">
          <FlowTabs/>
          <MonacoEditor
            width='100%'
            height="calc(100% - 64px)"
            language="yaml"
            value={code}
            theme="vs-dark"
            options={options}
            onChange={this.onChange}
            editorDidMount={this.editorDidMount}
          />
          <ConfigTypeTabs/>
        </div>
      </div>
    );
  }
}

export default Flows;
