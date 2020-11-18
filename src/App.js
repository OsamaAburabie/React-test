import './App.css';
import React from 'react';
import Person from './components/Person';
function App() {
	return (
		<div className='App'>
			<Person guy={{ name: 'osama', job: 'doctor' }} />

			<Person guy={{ name: 'anas', job: '' }} />

			<Person guy={{ name: 'ahmad', job: 'actor' }} />
		</div>
	);
}

export default App;
