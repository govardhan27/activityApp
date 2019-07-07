import React, { useState, useEffect } from 'react';
import { openDB } from 'idb';

import Homepage from './components/Hompage';
import AddActivity from './components/AddActivity';
import Activities from './components/Activities';
import './App.css';

//Initialize the IndexedDB
const initDatabase = async () => {
	const dbName = 'diary.lol';
	const version = 1;

	const db = await openDB(dbName, version, {
		upgrade(db) {
			// Create a store of objects
			db.createObjectStore('activities', { autoIncrement: true });
		},
	});
    console.log('initialising the DB!')
	return db;
};

//Retrieve stored data from the IndexedDB 
const initActivities = async () => {
	const db = await initDatabase();
	const tx = await db.transaction('activities', 'readonly');
	const activities = await tx.objectStore('activities').getAll();
	await tx.done;
	console.log('from initActivties ', initActivities)
	return activities;
};

//Store the activities in the IndexedDB
const storeActivity = async ({ title, description }) => {
	const db = await initDatabase();
	// Add multiple articles in one transaction:
	const tx = await db.transaction('activities', 'readwrite');
	const store = await tx.objectStore('activities');
	await store.put({ title, description });
	console.log('storing-- ', title, description);
	await tx.done;
};

const App = () => {
	const [screen, setScreen] = useState('addActivity');
	const [activities, setActivities] = useState([]);

	// React hook helps in handling asynchronous calls
	useEffect(() => {
		(async () => {
			const activities = await initActivities();
			setActivities(activities);
		})();
	})

	return (
		<div className='App'>
			{screen === 'homepage' && <Homepage setScreen={setScreen} />}
			{screen === 'addActivity' && <AddActivity storeActivity={storeActivity} />}
			{screen === 'activities' && <Activities activities={activities} />}
		</div>
	);
};

export default App;
