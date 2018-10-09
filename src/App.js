import React, { Component } from 'react';
import CodeEditor from "./configeditor/ConfigEditor"
import {Redirect, Route, Switch} from "react-router-dom";
import Admin from "./admin/admin";
import './App.scss';
import './components/tooltip/tooltip.scss';
class App extends Component {
  render() {
    return (
      <Switch>
        <Route path='/admin' component={Admin}/>
        {/* Оба /roster и /roster/:number начинаются с /roster */}
        <Route path='/flowconf' component={CodeEditor}/>
        <Redirect to={`/admin`}/>
      </Switch>
    );
  }
}

export default App;
