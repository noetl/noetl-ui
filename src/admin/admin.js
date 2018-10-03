import React from "react";
import {NavLink, Redirect, Route, Switch} from "react-router-dom";
import './admin.scss'
import Processes from "./processes/processes";
import ReactTooltip from "react-tooltip";
import Flows from "./flows/flows";
export default ({ match }) => {
  return (
      <div className="admin-page">
        <div className="flow-header">
          <div className="flow-title noselect">
            <h1>NOETL</h1>
          </div>
          <div className="flow-header-panel noselect">
            <div className="menu-group">
              <NavLink className="menu-item" activeClassName="router-link-active" to={`${match.url}/flows` }>flows</NavLink>
              <NavLink className="menu-item" activeClassName="router-link-active" to={`${match.url}/processes` }>processes</NavLink>
              <NavLink className="menu-item" to={`/flowconf` }>editor</NavLink>
            </div>
            <div className="flow-header-panel-buttons">
              <button className="flow-header-panel-buttons run"
                      data-tip data-for='runFlowButtonTooltip'>
                <i className="fas fa-caret-right"></i>
              </button>
              <button className="flow-header-panel-buttons help">
                help
              </button>
              <ReactTooltip id='runFlowButtonTooltip' type='light' effect='solid'>
                <span>RUN flow2</span>
              </ReactTooltip>
            </div>
          </div>
        </div>
        <div className="noetl-container">

          <div className="noetl-paper-wrapper">
            <Switch>
              <Route path={`${match.path}/flows`} component={Flows}/>
              <Route path={`${match.path}/processes`} component={Processes}/>
              <Redirect to={`${match.path}/flows`}/>
            </Switch>

          </div>

        </div>
        <div className="flow-footer noselect">
          <button className="button-logs">support</button>
          <button className="button-logs">contact us</button>
          <button className="button-logs">our team</button>
          <button className="button-logs">terminal</button>
        </div>

      </div>
    )}