import './App.scss';
import React from 'react';
import Person from './components/Person';
function App() {
	return (
		<div className='App'>
			<Person guy={{ name: 'osama', job: 'student' }} />

			<Person guy={{ name: 'anas', job: '' }} />

			<Person guy={{ name: 'ahmad', job: 'doctor' }} />
		</div>
	);
}

export default App;
