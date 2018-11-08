import React from "react";
import TreeItem from "./TreeItem";
import './tree.scss';
import CreateProjectPopup from "./create-project-popup/CreateProjectPopup";
import CreateDirectoryPopup from "./create-directory-popup/CreateDirectoryPopup";
import QuestionPopup from "../../../components/question-popup/QuestionPopup";
import {createDirectory, createItem, removeObjectTree, setOpenDirectory} from "./treeDataHendle";
import axios from "axios";
import {BACKEND_URL} from "../../../env";

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
      "name": "templates",
      "root": true,
      "isOpen": true,
      "children": []
    }

  }

  componentDidMount() {
    axios.get(`${BACKEND_URL}/flow/dirtree`)
      .then(res => {
        if (res.data.success === undefined) {
          this.setState(function (state, props) {
            return {
              ...state,
              model: res.data
            };
          });
        }
      })
      .catch(error => {
        console.log(error.response)
      });
  }

  onToggle = (toggled, path) => {
    this.setState(function (state, props) {
      return {...state, model: setOpenDirectory(state.model, path, toggled)};
    }, () => {
      axios.post(`${BACKEND_URL}/flow/dirtree`, this.state.model);
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
    axios.post(`${BACKEND_URL}/flow/template`,
      {
        id: `/${this.state.createNewProjectPopup.path}/${value.name}`,
        config: ""
      })
      .then(res => {
        if (res.data.success) {
          this.setState(function (state, props) {
            return {
              ...state,
              createNewProjectPopup: {isOpen: false, path: ''},
              model: createItem(state.model, state.createNewProjectPopup.path, value.name)
            };
          }, () => {
            axios.post(`${BACKEND_URL}/flow/dirtree`, this.state.model);
          });
        }
      })
      .catch(error => {
        console.log(error.response)
      });

  }

  // new dir
  closeCreateNewDirectoryPopup = () => {
    this.setState({createNewDirectoryPopup: {isOpen: false}});
  }

  onCreateDirectoryEvent = (path) => {
    this.setState({createNewDirectoryPopup: {isOpen: true, path}});
  }

  onAcceptCreateDirectoryPopup = (value) => {
    this.setState(function (state, props) {
      return {
        ...state,
        createNewDirectoryPopup: {isOpen: false, path: ''},
        model: createDirectory(state.model, state.createNewDirectoryPopup.path, value.name)
      };
    }, () => {
      axios.post(`${BACKEND_URL}/flow/dirtree`, this.state.model);
    });
  }

  // remove dir
  onRemoveDirectoryEvent = (path) => {
    this.setState({removeDirectoryQuestionPopup: {isOpen: true, path}});
  }

  onAcceptRemoveDirectory = () => {
    let dirPath = '';
    this.setState(function (state, props) {
      dirPath = state.removeDirectoryQuestionPopup.path;
      return {
        ...state,
        removeDirectoryQuestionPopup: {isOpen: false, path: ''},
        model: removeObjectTree(state.model, state.removeDirectoryQuestionPopup.path)
      };
    }, () => {
      axios.delete(`${BACKEND_URL}/flow/templates`, {data: {path: `/${dirPath}/`}});
      axios.post(`${BACKEND_URL}/flow/dirtree`, this.state.model);
    });
  }

  closeRemoveDirectoryPopup = () => {
    this.setState({removeDirectoryQuestionPopup: {isOpen: false}});
  }

  // remove flow
  onRemoveFlowEvent = (path) => {
    this.setState({removeFlowQuestionPopup: {isOpen: true, path}});
  }
  onAcceptRemoveFlow = () => {
    let path = '';
    this.setState(function (state, props) {
      path = state.removeFlowQuestionPopup.path;
      return {
        ...state,
        removeFlowQuestionPopup: {isOpen: false, path: ''},
        model: removeObjectTree(state.model, state.removeFlowQuestionPopup.path)
      };
    }, () => {
      axios.delete(`${BACKEND_URL}/flow/template`, {data: {id: `/${path}`}});
      axios.post(`${BACKEND_URL}/flow/dirtree`, this.state.model);
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
