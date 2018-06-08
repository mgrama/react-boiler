import React, { Component } from 'react';
import './App.css';
import { arr } from './example.js'


class App extends Component {

  render() {
    return (
      <div className="App">
        <table>
          <tr>
            <td>
              <ol>
                {arr.map((item) =>
                <li key={item.id}>
                  <td>
                    <h3>{item.name}</h3>
                  </td>
                  <td>
                    <p>{item.century}</p>
                  </td>
                  <td>
                    <p>{item.ekzeget_type.title}</p>
                  </td>
                </li>
                )}
              </ol>
            </td>
          </tr>

        </table>

      </div>
    );
  }
}
export default App;
