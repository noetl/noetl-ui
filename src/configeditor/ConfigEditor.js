/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
// eslint-disable-next-line import/no-unresolved, import/extensions
import MonacoEditor from './MonacoEditor';
/* eslint-enable import/no-extraneous-dependencies */
import "./configeditor.scss"
// Using with webpack
export default class CodeEditor extends React.Component {
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
    console.log('editorDidMount', monaco);
    this.editor = editor;
  }

  changeEditorValue = () => {
    if (this.editor) {
      this.editor.setValue('// code changed! \n');
    }
  }

  changeBySetState = () => {
    this.setState({ code: '// code changed by setState! \n' });
  }

  render() {
    const { code } = this.state;
    const options = {
      selectOnLineNumbers: true,
      roundedSelection: false,
      readOnly: false,
      cursorStyle: 'line',
      automaticLayout: false,
      tabSize: 2,
    };
    return (
      <div className="app-config-component">
        <div className="app-config-component-header">
          <span className="app-logo">NoETL</span>
          <span className="flow-name">/path/<strong>flow-name</strong></span>
          <button className="app-editor-button diff" onClick={this.changeBySetState}>diff</button>
          <button className="app-editor-button save" onClick={this.changeBySetState}>save</button>
        </div>
        <MonacoEditor
          height="calc(100vh - 60px)"
          language="yaml"
          value={code}
          theme="vs-dark"
          options={options}
          onChange={this.onChange}
          editorDidMount={this.editorDidMount}
        />
      </div>
    );
  }
}

