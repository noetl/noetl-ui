import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.scss';
import CodeEditor from "./configeditor/ConfigEditor"
import {Redirect, Route, Switch} from "react-router-dom";
import Admin from "./admin/admin";

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
