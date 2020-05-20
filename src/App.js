import './App.css';
import { Provider } from 'redux-thunk'

import {
  BrowserRouter as Router,
  Switch,
  Route} from "react-router-dom";
import { store } from './app-redux';

import React, { Component } from 'react';

class App extends Component {
  render() {
    return (

      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="Route Name" component={'Component Name'} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
