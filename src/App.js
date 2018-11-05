import React, { Component } from 'react';
import CodeEditor from "./configeditor/ConfigEditor"
import {Redirect, Route, Switch} from "react-router-dom";
import Admin from "./admin/admin";
import './App.scss';
import './components/tooltip/tooltip.scss';
import Login from "./login/login";
import PrivateRoute from "./authorization/PrivateRoute";


function requireAuth(nextState, replaceState) {
  if (!false){
    replaceState({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

class App extends Component {



  render() {
    return (
      <Switch>
        <Route path='/login' component={Login}/>
        <PrivateRoute path='/admin' component={Admin}/>
        <Redirect to={`/admin`}/>
      </Switch>
    );
  }
}

export default App;
