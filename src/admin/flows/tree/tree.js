import React from "react";
import TreeItem from "./TreeItem";
import './tree.scss';
class Tree extends React.Component {
  state = {
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
            {"name": "fewqfewfqewqaaaaaaaaaaaaaaaaaaaafewqfewfqewqaaaaaaaaaaaaaaaaaaaafewqfewfqewqaaaaaaaaaaaaaaaaaaaafewqfewfqewqaaaaaaaaaaaaaaaaaaaafewqfewfqewqaaaaaaaaaaaaaaaaaaaa"},
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

  render() {
    return (
      <ul className="tree-directory tree-directory-root">
        <TreeItem className="item-tree"
                  onToggle={this.onToggle}
                  node={this.state.model}
                  path={this.state.model.name}>
        </TreeItem>
      </ul>
    );
  }
}

export default Tree;