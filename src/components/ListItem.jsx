import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ListItem extends Component {
	render() {
		const { number, name, century, ekzegetType } = this.props;
		return (
			<li>
				<div>
					<p>{number}</p>
				</div>
				<div>
					<h3>{name}</h3>
				</div>
				<div>
					<p>{century}</p>
				</div>
				<div>
					<p>{ekzegetType}</p>
				</div>
			</li>
		);
	}
}

ListItem.propTypes = {
	number: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
	century: PropTypes.string.isRequired,
	ekzegetType: PropTypes.string.isRequired,
};

export default ListItem;
