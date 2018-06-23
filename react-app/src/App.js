import React, { Component } from 'react';
import { Link  } from 'react-router-dom';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { price: 0 };
  }

  getDataFromChild(data, e) {
    console.log(e);
    console.log(data);
  }

  render() {
    return (
      <div className="App">
        <ul>
          <li><Link to="/login">login</Link></li>
          <li><Link to="/index">index</Link></li>
        </ul>
      </div>
    );
  }
}

export default App;
