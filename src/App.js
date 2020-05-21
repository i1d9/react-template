import React, { Component } from 'react';
import Home from './components/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { store } from './app-redux';
import { Provider } from 'react-redux';
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
