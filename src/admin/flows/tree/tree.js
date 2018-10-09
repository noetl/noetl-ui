import React from "react";
import TreeItem from "./TreeItem";
import './tree.scss';
import CreateProjectPopup from "./create-project-popup/CreateProjectPopup";
class Tree extends React.Component {
  state = {
    isOpenCreateNewProjectPopup: false,
    model: {
      "name": "root",
      "root": true,
      "isOpen": true,
      "children": [
        {
          "name": "fewqfew"
        },
        {
          "name": "fewqfeqwf",
          "isOpen": true,
          "children": [
            {"name": "fewqfewq"},
            {"name": "fewqfewfqew"},
            {"name": "dsaDSA"}
          ]
        },
        {
          "name": "fewqfewqfe",
          "isOpen": true,
          "children": [
            {"name": "dsa"},
            {"name": "AAAAAA"}
          ]
        }
      ]
    }
  }

  onToggle = (node, toggled, path) => {
    if (node.children) {
      node.isOpen = toggled;
    }
    //this.forceUpdate();
    this.setState(function (state, props) {
      return {...state}
    });
  }

  closeCreateNewProjectPopup = ()=>{
    this.setState({isOpenCreateNewProjectPopup: false});
  }

  onCreateProjectEvent = () => {
    this.setState({isOpenCreateNewProjectPopup: true});
  }

  render() {
    return (
      <ul className="tree-directory tree-directory-root">
        <TreeItem className="item-tree"
                  onToggle={this.onToggle}
                  onCreateProjectEvent={this.onCreateProjectEvent}
                  node={this.state.model}
                  path={this.state.model.name}>
        </TreeItem>
        {this.state.isOpenCreateNewProjectPopup?<CreateProjectPopup onClose={this.closeCreateNewProjectPopup}/>:null}
      </ul>
    );
  }
}

export default Tree;
