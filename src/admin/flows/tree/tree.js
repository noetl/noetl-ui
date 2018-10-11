import React from "react";
import TreeItem from "./TreeItem";
import './tree.scss';
import CreateProjectPopup from "./create-project-popup/CreateProjectPopup";
import CreateDirectoryPopup from "./create-directory-popup/CreateDirectoryPopup";
import QuestionPopup from "../../../components/question-popup/QuestionPopup";
import {createDirectory, createItem, removeObjectTree, setOpenDirectory} from "./treeDataHendle";

class Tree extends React.Component {
  state = {
    createNewProjectPopup: {
      isOpen: false,
      path: ''
    },
    createNewDirectoryPopup: {
      isOpen: false,
      path: ''
    },
    removeFlowQuestionPopup: {
      isOpen: false,
      path: ''
    },
    removeDirectoryQuestionPopup: {
      isOpen: false,
      path: ''
    },
    model: {
      "name": "root",
      "root": true,
      "isOpen": true,
      "children": [
        {
          "name": "flow1"
        },
        {
          "name": "directory1",
          "isOpen": true,
          "children": [
            {"name": "fewqfewq"},
            {"name": "fewqfewfqew"},
            {"name": "dsaDSA"}
          ]
        },
        {
          "name": "directory2",
          "isOpen": true,
          "children": [
            {"name": "dsa"},
            {"name": "AAAAAA"}
          ]
        }
      ]
    }
  }

  onToggle = (toggled, path) => {
    this.setState(function (state, props) {
      return {...state, model: setOpenDirectory(state.model, path, toggled)};
    });
  }

  // new project
  closeCreateNewProjectPopup = () => {
    this.setState({createNewProjectPopup: {isOpen: false}});
  }

  onCreateProjectEvent = (path) => {
    console.log('onCreateProjectEvent');
    console.log(path);
    this.setState({createNewProjectPopup: {isOpen: true, path}});
  }

  onAcceptCreateProjectPopup = (value) => {
    this.setState(function (state, props) {
      return {
        ...state,
        createNewProjectPopup: {isOpen: false, path: ''},
        model: createItem(state.model, state.createNewProjectPopup.path, value.name)
      };
    });
  }

  // new dir
  closeCreateNewDirectoryPopup = () => {
    this.setState({createNewDirectoryPopup: {isOpen: false}});
  }

  onCreateDirectoryEvent = (path) => {
    console.log('onCreateDirectoryEvent');
    console.log(path);
    this.setState({createNewDirectoryPopup: {isOpen: true, path}});
  }

  onAcceptCreateDirectoryPopup = (value) => {
    this.setState(function (state, props) {
      return {
        ...state,
        createNewDirectoryPopup: {isOpen: false, path: ''},
        model: createDirectory(state.model, state.createNewDirectoryPopup.path, value.name)
      };
    });
  }

  // remove dir
  onRemoveDirectoryEvent = (path) => {
    console.log('onRemoveDirectoryEvent');
    console.log(path);
    this.setState({removeDirectoryQuestionPopup: {isOpen: true, path}});
  }

  onAcceptRemoveDirectory = () => {
    this.setState(function (state, props) {
      return {
        ...state,
        removeDirectoryQuestionPopup: {isOpen: false, path: ''},
        model: removeObjectTree(state.model, state.removeDirectoryQuestionPopup.path)
      };
    });
  }

  closeRemoveDirectoryPopup = () => {
    this.setState({removeDirectoryQuestionPopup: {isOpen: false}});
  }

  // remove flow
  onRemoveFlowEvent = (path) => {
    console.log('onRemoveFlowEvent');
    console.log(path);
    this.setState({removeFlowQuestionPopup: {isOpen: true, path}});
  }
  onAcceptRemoveFlow = () => {
    this.setState(function (state, props) {
      return {
        ...state,
        removeFlowQuestionPopup: {isOpen: false, path: ''},
        model: removeObjectTree(state.model, state.removeFlowQuestionPopup.path)
      };
    });
  }

  closeRemoveFlowPopup = () => {
    this.setState({removeFlowQuestionPopup: {isOpen: false}});
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
        {this.state.createNewProjectPopup.isOpen ?
          <CreateProjectPopup onClose={this.closeCreateNewProjectPopup}
                              onAccept={this.onAcceptCreateProjectPopup}/> : null}
        {this.state.createNewDirectoryPopup.isOpen ?
          <CreateDirectoryPopup onClose={this.closeCreateNewDirectoryPopup}
                                onAccept={this.onAcceptCreateDirectoryPopup}/> : null}
        {this.state.removeDirectoryQuestionPopup.isOpen ?
          <QuestionPopup onAccept={this.onAcceptRemoveDirectory}
                         onCancel={this.closeRemoveDirectoryPopup}>
            <span>Вы действительно хотите удалить эту директорию?
              &nbsp;<strong>{this.state.removeDirectoryQuestionPopup.path}</strong></span>
          </QuestionPopup> : null}
        {this.state.removeFlowQuestionPopup.isOpen ?
          <QuestionPopup onAccept={this.onAcceptRemoveFlow}
                         onCancel={this.closeRemoveFlowPopup}>
            <span>Вы действительно хотите удалить это проэкт?
              &nbsp;<strong>{this.state.removeFlowQuestionPopup.path}</strong></span>
          </QuestionPopup> : null}
      </ul>
    );
  }
}

export default Tree;
