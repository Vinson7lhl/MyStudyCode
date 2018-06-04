import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Hello, IsLogin } from './components/hello_world/hello_world';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = { price: 0 }
  }

  getDataFromChild(data, e) {
    console.log(e);
    console.log(data);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Hello diyClick={this.getDataFromChild}></Hello>
        <IsLogin isWelcome={true} />
      </div>
    );
  }
}

export default App;
