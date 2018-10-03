import React, {Component} from 'react';

class Toggleable extends Component {
  constructor(props){
    super(props);
    this.state = { show: false };
    this.toggle = this.toggle.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
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

  handleClickOutside(event) {
    if (!this.wrapperRef) return;
    const isContein = this.wrapperRef.contains(event.target);
    if (this.wrapperRef && !isContein) {
      this.setState((prevState) => {
        return {show: false}
      });
    }
    if (this.wrapperRef && isContein) {
      this.toggle();
    }
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  render() {
    return <div ref={this.setWrapperRef}
                style={this.state.show?this.props.toggledStyle:this.props.style}
    >{this.props.children(this.state.show)}</div>;
  }
}

export default Toggleable;