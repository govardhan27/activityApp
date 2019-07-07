import React, { useState } from 'react';


const AddActivity = ({ storeActivity }) => {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');

	const saveActivity = () => {
		storeActivity({ title, description });
	};

	return (
		<div className='AddActivity'>
			<h2>Activity Title</h2>
			<input onChange={event => setTitle(event.target.value)} />
			<h2>Activity Description</h2>
			<textarea onChange={event => setDescription(event.target.value)} />
			<button onClick={saveActivity}>Start</button>
		</div>
	)
};

export default AddActivity;

