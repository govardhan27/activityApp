import React from 'react';
import logo from '../img/logo.svg';
import screenshot from '../img/screenshot.png'



const Homepage = ({ setScreen }) => {
	const addActivity = () => {
		setScreen('addActivity');
	};

	return (
		<header className='Hompage'>
			<img src={logo} className='Hompage-logo' alt='logo' />
			<div className='container'>
				<div className='left'>
					<img src={screenshot} className='screenshot' alt='screenshot' />
				</div>
				<div className='right'>
					<p>
						log your daily activites in this fun to use app!
		            </p>
					<button onClick={addActivity}>Start</button>
				</div>
			</div>
		</header>
	)
};

export default Homepage;