// function Person(props) {
// 	return (
// 		<div>
// 			<h2 className='Name' style={{}}>
// 				Name: {props.guy.name}
// 			</h2>
// 			<h3 className='job' style={{ color: props.guy.job ? '' : 'red' }}>
// 				Job: {props.guy.job}
// 			</h3>
// 		</div>
// 	);
// }

// export default Person;

import React, { Component } from 'react';

export default class Person extends Component {
	render(props) {
		return (
			<div>
				<h2 className='Name' style={{}}>
					Name: {this.props.guy.name}
				</h2>
				<h3 className='job' style={{ color: this.props.guy.job ? '' : 'red' }}>
					Job: {this.props.guy.job}
				</h3>
			</div>
		);
	}
}
