import React from "react";
import {NavLink, Redirect, Route, Switch} from "react-router-dom";
import './admin.scss'
import Processes from "./processes/processes";
import Flows from "./flows/flows";
import RunFlowPopup from "./run-flow-popup/RunFlowPopup";
import TestFlowPopup from "./test-flow-popup/TestFlowPopup";
class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenRunFlowPopup: false,
      numberOfGuests: 2
    };
    this.defaultFunction = () => {
    };
  }

  closeRunFlowPopup = ()=>{
    this.setState({isOpenRunFlowPopup: false});
  }
  onClickButtonRun = ()=>{
    this.setState({isOpenRunFlowPopup: true});
  }

  render() {
    const {
      match
    } = this.props;
    return (
      <div className="admin-page">
        <div className="flow-header">
          <div className="flow-title noselect">
            <h1>NOETL</h1>
          </div>
          <div className="flow-header-panel noselect">
            <div className="menu-group">
              <NavLink className="menu-item" activeClassName="router-link-active"
                       to={`${match.url}/flows`}>flows</NavLink>
              <NavLink className="menu-item" activeClassName="router-link-active"
                       to={`${match.url}/processes`}>processes</NavLink>
            </div>
            <div className="flow-header-panel-buttons">
              <button className="flow-header-panel-buttons run"
                      data-tip="RUN flow2" data-place="bottom"
              onClick={this.onClickButtonRun}>
                <i className="fas fa-caret-right"></i>
              </button>
              {this.state.isOpenRunFlowPopup?<TestFlowPopup onClose={this.closeRunFlowPopup}/>:null}
              <button className="flow-header-panel-buttons help">
                ?
              </button>
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
    )
  }
}

export default Admin;
