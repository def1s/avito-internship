import React from 'react';
import './styles/index.scss';
import { Navbar } from 'widgets/Navbar';
import { Notifications } from 'features/Notifications';
import { AppRouter } from './providers/router';

const App = () => {
	return (
		<div className={'App'}>
			<Navbar/>

			{/* TODO редиректить с '/' на объявления */}

			<AppRouter/>

			<Notifications/>
		</div>
	);
};

export default App;
