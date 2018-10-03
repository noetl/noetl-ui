import React from "react";
import ReactTooltip from 'react-tooltip';

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

  _eventBubbles() {
    const {onToggle} = this.props;

    return {
      onToggle
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
        <div className="item-header-container">
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
                   data-tip data-for='newFlowTooltip'>
                <i className="fas fa-code-branch"></i>
              </div>
              : null}
            {this.isFolder() ?
              <div className="tree-item-panel-icon"
                   data-tip data-for='newFolderTooltip'>
                <i className="fas fa-folder-open"></i>
              </div>
              : null}
            {!node.root && this.isFolder() ?
              <div className="tree-item-panel-icon"
                   v-onclick="removeDirectory();"
                   data-tip data-for='removeFolderRecursiveTooltip'>
                <i className="fas fa-trash-alt"></i>
              </div>
              : null}
            {!node.root && !this.isFolder() ?
              <div className="tree-item-panel-icon"
                   v-onclick="removeProject();"
                   data-tip data-for='removeFlowTooltip'>
                <i className="fas fa-trash-alt"></i>
              </div>
              : null}
            {!node.root && !this.isFolder() ?
              <div className="tree-item-panel-icon"
                   data-tip data-for='toDashboardTooltip'>
                <i className="fas fa-clipboard-check"></i>
              </div>
              : null}
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
        <ReactTooltip id='newFolderTooltip' type='light' effect='solid'>
          <span>New folder</span>
        </ReactTooltip>

        <ReactTooltip id='removeFolderRecursiveTooltip' type='light' effect='solid'>
          <span>Remove folder recursive</span>
        </ReactTooltip>

        <ReactTooltip id='removeFlowTooltip' type='light' effect='solid'>
          <span>Remove flow</span>
        </ReactTooltip>

        <ReactTooltip id='toDashboardTooltip' type='light' effect='solid'>
          <span>to dashboard</span>
        </ReactTooltip>

        <ReactTooltip id='newFlowTooltip' type='light' effect='solid'>
          <span>New flow</span>
        </ReactTooltip>
      </li>
    );
  }
}

export default TreeItem;