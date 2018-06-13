import React, { Component } from 'react';
import './App.css';
import { arr } from './example.js';
import PropTypes from 'prop-types';

class App extends Component {

  render() {
    let name = this.props.name
    return (
      <div className="App">
        <ol>
          {arr.map((item, i) =>
            <li key={item.i}>  <div>
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
        </ol>
      </div>

    )

    App.propTypes = {
      name: PropTypes.string.isRequired,
      century: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired
    }
  }


}

export default App;
