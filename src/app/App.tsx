import React from 'react';
import './styles/index.scss';
import { Navbar } from 'widgets/Navbar';
import { NotificationsList } from 'entities/NotificationsList';
import { AppRouter } from './providers/router';

const App = () => {
	return (
		<div className={'App'}>
			<Navbar/>

			{/* TODO редиректить с '/' на объявления */}

			<AppRouter/>

			<NotificationsList/>
		</div>
	);
};

export default App;
