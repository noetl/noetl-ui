import React from "react";
import './config-type-tabs.scss'
class ConfigTypeTabs extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  scrollHorizontally = (event) => {
    this.myRef.current.scrollLeft -= (event.nativeEvent.wheelDelta * 40 / 100);
    event.preventDefault();
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="config-type-tabs" ref={this.myRef}
           onWheel={this.scrollHorizontally}>
        <div className="flow-tab-wrapper">
          <div className="flow-tab">
            <span className='title'>FLOW BUILDER</span>
          </div>
        </div>
        <div className="flow-tab-wrapper">
          <div className="flow-tab active">
            <span className='title'>YAML</span>
          </div>
        </div>
        <div className="flow-tab-wrapper">
          <div className="flow-tab">
            <span className='title'>JSON</span>
          </div>
        </div>

      </div>
    );
  }
}

export default ConfigTypeTabs;