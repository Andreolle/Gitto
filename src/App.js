import React, { Component } from 'react';
import Sidebar from './components/Sidebar';
import RepositoryPage from './components/containers/RepositoryPage';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Sidebar />
        <RepositoryPage />
      </div>
    );
  }
}

export default App;
