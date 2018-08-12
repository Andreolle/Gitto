import React, { Component } from 'react';
import Sidebar from './components/Sidebar';
import RepositoryPage from './components/containers/RepositoryPage';

import { Route, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Sidebar />

        <Switch>
          <Route path='/:repoName' component={RepositoryPage}/>
        </Switch>
      </div>
    );
  }
}

export default App;
