import React, { Component } from 'react';
import Sidebar from './components/Sidebar';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Sidebar />
        <div className="container">
          <h1>Olá meu chapa</h1>
        </div>
      </div>
    );
  }
}

export default App;
