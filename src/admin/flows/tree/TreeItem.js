import React from "react";

class TreeItem extends React.Component {
  state = {}
  isFolder = () => {
    const {node} = this.props;
    return node.children;
  }
  setOpen = (open) => {
    if (this.isFolder) {
      //this.props.model.isOpen = open
    }
  }
  toggle = () => {
    if (this.isFolder()) {
      const {node, onToggle} = this.props;
      const {isOpen} = node;

      if (onToggle) {
        onToggle(node, !isOpen, this.props.path);
      }
    }
  }

  createProjectEvent = () => {
    const {node, onCreateProjectEvent} = this.props;

    if (onCreateProjectEvent) {
      onCreateProjectEvent(node, this.props.path);
    }
  }

  _eventBubbles() {
    const {onToggle, onCreateProjectEvent} = this.props;

    return {
      onToggle,
      onCreateProjectEvent
    };
  }

  toDashboard = () => {

  }
  sortByDirectories = (array) => {
    let copy = [...array];
    copy.sort(function (a, b) {
      if (a.children === undefined && b.children !== undefined)
        return 1;
      else return 0;
    });
    return copy;
  }

  render() {
    let {node, path} = this.props;
    return (
      <li>
        <div className="item-tree-container">
          <div className="item-tree-header-container">
            {this.isFolder() ?
              <div className={"fas-tree-directory " + (node.isOpen ? "fa-folder-open" : "fa-folder")}
                   onClick={this.toggle}>
              </div>
              : null}
            {!this.isFolder() ?
              <div className="fas-tree-directory fa-code-branch">
              </div>
              : null}
            <div className={"fas-tree-directory " + (this.isFolder() ? "bold" : "")}
                 onClick={this.toggle}>
              {node.name}
            </div>

            <div className="tree-item-panel">
              {this.isFolder() ?
                <div className="tree-item-panel-icon"
                     data-tip="New flow" onClick={this.createProjectEvent}>
                  <i className="fas fa-code-branch"></i>
                </div>
                : null}
              {this.isFolder() ?
                <div className="tree-item-panel-icon"
                     data-tip="New folder">
                  <i className="fas fa-folder-open"></i>
                </div>
                : null}
              {!node.root && this.isFolder() ?
                <div className="tree-item-panel-icon"
                     v-onclick="removeDirectory();"
                     data-tip="Remove folder recursive">
                  <i className="fas fa-trash-alt"></i>
                </div>
                : null}
              {!node.root && !this.isFolder() ?
                <div className="tree-item-panel-icon"
                     v-onclick="removeProject();"
                     data-tip="Remove flow">
                  <i className="fas fa-trash-alt"></i>
                </div>
                : null}
              {!node.root && !this.isFolder() ?
                <div className="tree-item-panel-icon"
                     data-tip="Open flow for edit">
                  <i className="far fa-edit"></i>
                </div>
                : null}
            </div>
          </div>
        </div>
        {node.isOpen && this.isFolder() ?
          <ul className="tree-directory">
            {
              this.sortByDirectories(node.children).map((node) => {
                return (
                  <TreeItem
                    className="item-tree"
                    {...this._eventBubbles()}
                    key={path + '/' + node.name}
                    node={node}
                    path={path + '/' + node.name}>
                  </TreeItem>
                )
              })
            }
          </ul>
          : null}
      </li>
    );
  }
}

export default TreeItem;
