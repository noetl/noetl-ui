import React from "react";
import TreeItem from "./TreeItem";
import './tree.scss';
import CreateProjectPopup from "./create-project-popup/CreateProjectPopup";
import CreateDirectoryPopup from "./create-directory-popup/CreateDirectoryPopup";
import QuestionPopup from "../../../components/question-popup/QuestionPopup";

class Tree extends React.Component {
  state = {
    isOpenCreateNewProjectPopup: false,
    isOpenCreateNewDirectoryPopup: false,
    isOpenRemoveFlowQuestionPopup: false,
    isOpenRemoveDirectoryQuestionPopup: false,
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
// new project
  closeCreateNewProjectPopup = () => {
    this.setState({isOpenCreateNewProjectPopup: false});
  }

  onCreateProjectEvent = () => {
    this.setState({isOpenCreateNewProjectPopup: true});
  }

  // new dir
  closeCreateNewDirectoryPopup = () => {
    this.setState({isOpenCreateNewDirectoryPopup: false});
  }

  onCreateDirectoryEvent = () => {
    this.setState({isOpenCreateNewDirectoryPopup: true});
  }

  // remove dir
  onRemoveDirectoryEvent = (path) => {
    this.setState({isOpenRemoveDirectoryQuestionPopup: true});
  }
  onAcceptRemoveDirectory = () => {
    //
    this.closeRemoveDirectoryPopup();
  }

  closeRemoveDirectoryPopup = () => {
    this.setState({isOpenRemoveDirectoryQuestionPopup: false});
  }

  // remove flow
  onRemoveFlowEvent = (path) => {
    this.setState({isOpenRemoveFlowQuestionPopup: true});
  }
  onAcceptRemoveFlow = () => {
    //
    this.closeRemoveDirectoryPopup();
  }

  closeRemoveFlowPopup = () => {
    this.setState({isOpenRemoveFlowQuestionPopup: false});
  }

  render() {
    return (
      <ul className="tree-directory tree-directory-root">
        <TreeItem className="item-tree"
                  onToggle={this.onToggle}
                  onCreateProjectEvent={this.onCreateProjectEvent}
                  onCreateDirectoryEvent={this.onCreateDirectoryEvent}
                  onRemoveDirectoryEvent={this.onRemoveDirectoryEvent}
                  onRemoveFlowEvent={this.onRemoveFlowEvent}
                  node={this.state.model}
                  path={this.state.model.name}>
        </TreeItem>
        {this.state.isOpenCreateNewProjectPopup ?
          <CreateProjectPopup onClose={this.closeCreateNewProjectPopup}/> : null}
        {this.state.isOpenCreateNewDirectoryPopup ?
          <CreateDirectoryPopup onClose={this.closeCreateNewDirectoryPopup}/> : null}
        {this.state.isOpenRemoveDirectoryQuestionPopup ?
          <QuestionPopup onAccept={this.onAcceptRemoveDirectory}
                         onCancel={this.closeRemoveDirectoryPopup}>
            <span>Вы действительно хотите удалить эту директорию?</span>
          </QuestionPopup> : null}
        {this.state.isOpenRemoveFlowQuestionPopup ?
          <QuestionPopup onAccept={this.onAcceptRemoveFlow}
                         onCancel={this.closeRemoveFlowPopup}>
            <span>Вы действительно хотите удалить это проэкт?</span>
          </QuestionPopup> : null}
      </ul>
    );
  }
}

export default Tree;
