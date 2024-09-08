import React from 'react';
import './styles/index.scss';
import { Navbar } from 'widgets/Navbar';
import { AppRouter } from './providers/router';

const App = () => {
	return (
		<div className={'App'}>
			<Navbar/>
			<AppRouter/>
		</div>
	);
};

export default App;
