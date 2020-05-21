import './App.css';
import  Provider  from 'redux-thunk'

import {
  BrowserRouter as Router,
  Switch,
  Route} from "react-router-dom";
import { store } from './app-redux';

import React, { Component } from 'react';
import Home from '../src/components/Home'

class App extends Component {
  render() {
    return (

      <Provider store={store}>
        <Router>
          <Switch>

            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
