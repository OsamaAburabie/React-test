import React from 'react';

function Person(props) {
	return (
		<div>
			<div className='names'>{props.name}</div>
		</div>
	);
}

export default Person;
