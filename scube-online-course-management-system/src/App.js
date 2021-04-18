import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import Homepage from './components/Homepage';
import Login from './components/Login';
import Register from './components/Register';
import Welcome from './components/Welcome';

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={Welcome} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/home" component={Homepage} />
      <Route exact path="/register" component={Register} />
    </Switch>
  )
}