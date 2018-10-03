import React from "react";
import './flow-tabs.scss'
class FlowTabs extends React.Component {
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
      <div className="flow-tabs noselect" ref={this.myRef}
           onWheel={this.scrollHorizontally}>
        <div className="flow-tab-wrapper">
          <div className="flow-tab">
            <i className="fas fa-code-branch"></i>
            <span className='title'>flow1</span>
            <button className='close'>
              <i className="fas fa-times"></i>
            </button>
          </div>
        </div>
        <div className="flow-tab-wrapper">
          <div className="flow-tab active">
            <i className="fas fa-code-branch"></i>
            <span className='title'>flow2</span>
            <button className='close'>
              <i className="fas fa-times"></i>
            </button>
          </div>
        </div>
        <div className="flow-tab-wrapper">
          <div className="flow-tab ">
            <i className="fas fa-code-branch"></i>
            <span className='title'>flow2111111111flow2111111111flow4</span>
            <button className='close'>
              <i className="fas fa-times"></i>
            </button>
          </div>
        </div>
        <div className="flow-tab-wrapper">
          <div className="flow-tab">
            <i className="fas fa-code-branch"></i>
            <span className='title'>flow2111111111flow2111111111flow5</span>
            <button className='close'>
              <i className="fas fa-times"></i>
            </button>
          </div>
        </div>
        <div className="flow-tab-wrapper">
          <div className="flow-tab">
            <i className="fas fa-code-branch"></i>
            <span className='title'>flow2111111111flow2111111111flow6</span>
            <button className='close'>
              <i className="fas fa-times"></i>
            </button>
          </div>
        </div>
        <div className="flow-tab-wrapper">
          <div className="flow-tab">
            <i className="fas fa-code-branch"></i>
            <span className='title'>flow2111111111flow2111111111flow7</span>
            <button className='close'>
              <i className="fas fa-times"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default FlowTabs;