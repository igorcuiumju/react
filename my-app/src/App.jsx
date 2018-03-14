import React, { Component } from 'react';
import './App.css';

import IncraseDecrease from './components/IncraseDecrease';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Youtube aplication</h1>

        <IncraseDecrease />
      </div>
    );
  }
}

export default App;
