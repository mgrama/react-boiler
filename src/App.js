import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { arr } from './example.js'

//const count = 2;

class App extends Component {

  componentDidMount() {
    const count = this.count;
    const ids = arr.map(function(id) {
      return id.id
    })
    console.log(ids)
    const objs = {};
    arr.forEach(function(item) {
        objs[item.id] = item
    })
    console.log(objs)
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
      </div>
    );
  }
}




export default App;
