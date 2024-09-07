import React from 'react';
import './styles/index.scss';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';

const App = () => {
	return (
		<div className={'App'}>
			<Navbar/>
			Hello, avito!
			<AppRouter/>
		</div>
	);
};

export default App;
