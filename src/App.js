// import './App.css';
import React from 'react';
import Person from './components/Person';
import './style.css';
import Students from './Students';

function App() {
	const Names = Students.map((item) => <Person name={item.name} />);
	return <div className='container'>{Names}</div>;
}

export default App;
