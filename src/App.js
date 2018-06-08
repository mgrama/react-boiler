import React, { Component } from 'react';
import './App.css';
import { arr } from './example.js'

const TABLE_COLUMNS = [
  {
    label: 'Имя',
    sort: 'default',
  },
  {
    label: 'Век',
    sort: 'default',
  },
  {
    label: 'Активность',
    sort: 'default',
  },
];

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: [],
      columns: TABLE_COLUMNS
    }
  }

  componentDidMount() {
    const count = this.count;
    const ids = arr.map(function(id) {
      return id.id
    })
    console.log(ids)
    const objs = arr.reduce((sum, i) => ({ ...sum, [i.id]: i }), {});
    console.log(objs)
  }

  renderOptions() {
    const objs = this.state
  }

  render() {
    return (
      <div className="App">
        {this.renderOptions()}
      </div>
    );
  }
}




export default App;
