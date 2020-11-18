import React from 'react';

function Person(props) {
	return (
		<div>
			<h2 className='Name' style={{}}>
				Name: {props.guy.name}
			</h2>
			<h3 className='job' style={{ color: props.guy.job ? '' : 'red' }}>
				Job: {props.guy.job}
			</h3>
		</div>
	);
}

export default Person;
