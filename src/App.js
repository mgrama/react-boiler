import React, { Component } from 'react';
import './App.css';
import { arr } from './example.js';
import ListItem from './components/ListItem';

class App extends Component {
	render() {
		return (
			<div className="App">
				<ol>
					{arr.map((item, index) => (
						<ListItem
							key={item.id}
							number={index}
							name={item.name}
							century={item.century}
							ekzegetType={item.ekzeget_type.title}
						/>
					))}
				</ol>
			</div>
		);
	}
}

export default App;
