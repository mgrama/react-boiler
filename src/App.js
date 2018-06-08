import React, { Component } from 'react';
import './App.css';
import { arr } from './example.js'


class App extends Component {

  render() {
    return (
      <div className="App">
                {arr.map((item, i) =>
                  <li key={item.i}>
                    <div>
                      <p>{i}</p>
                    </div>
                    <div>
                      <h3>{item.name}</h3>
                    </div>
                    <div>
                      <p>{item.century}</p>
                    </div>
                    <div>
                      <p>{item.ekzeget_type.title}</p>
                    </div>
                  </li>
                )}

      </div>
    );
  }
}
export default App;
