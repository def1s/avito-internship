import React from 'react';
import './styles/index.scss';
import { Navbar } from 'widgets/Navbar';
import { AppRouter } from './providers/router';

const App = () => {
	return (
		<div className={'App'}>
			<Navbar/>

			{/* TODO редиректить с '/' на объявления */}

			<AppRouter/>
		</div>
	);
};

export default App;
