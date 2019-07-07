import React, { useState } from 'react';
import { openDB } from 'idb';

import Homepage from './components/Hompage';
import AddActivity from './components/AddActivity';
import './App.css';

const storeActivity = async ({ title, description }) => {
	// console.log(title, description);

	const dbName = 'diary.lol';
	const storeName = 'activities';
	const version = 1;

	const db = await openDB(dbName, version, {
		upgrade(db) {
			// Create a store of objects
			db.createObjectStore(storeName, { autoIncrement: true });
		},
	});
	// Add multiple articles in one transaction:
	const tx = await db.transaction(storeName, 'readwrite');
	const store = await tx.objectStore(storeName);
	await store.put({ title, description });
	await tx.done;

};

const App = () => {
	const [screen, setScreen] = useState('addActivity');

	return (
		<div className='App'>
			{screen === 'homepage' && <Homepage setScreen={setScreen} />}
			{screen === 'addActivity' && <AddActivity storeActivity={storeActivity} />}
		</div>
	);
};

export default App;
