import React from 'react';

const Activities = ({ activities }) => {
	console.log('activities ', activities);
	return (
		<div className='Activities'>
			<ul className='list'>
				{activities && activities.map((value, index) => {
					return (<li key={index}>{value.title}</li>)
				})}
			</ul>
			<ul className='detail'>
				{activities.map((value, index) => {
					return (<li key={index}>{value.description}</li>)
				})}
			</ul>
		</div>
	)
};

export default Activities;