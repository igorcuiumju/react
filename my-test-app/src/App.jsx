import React, { Component } from 'react';
import './App.css';
import Form from './componets/Form.jsx'
import {container} from 'react-bootstrap';

class App extends Component {

  state = {
    mounted: true
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ mounted: false });
    console.log
  }

  render() {
    return (
      <div className="App">
        <Form onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
