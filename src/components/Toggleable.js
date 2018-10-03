import React, {Component} from 'react';

class Toggleable extends Component {
  constructor(props){
    super(props);
    this.state = { show: true };
    this.toggle = this.toggle.bind(this);
    this.setWrapperRef = this.setWrapperRef.bind(this);
  }


  toggle() {
    this.setState((prevState) => {
      return {show: !prevState.show}
    });
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  render() {
    return <div ref={this.setWrapperRef}
                style={this.state.show?this.props.toggledStyle:this.props.style}
    >{this.props.children(this.state.show, this.toggle)}</div>;
  }
}

export default Toggleable;