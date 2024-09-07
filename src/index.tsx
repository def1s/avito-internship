import App from './app/App';
import { createRoot } from 'react-dom/client';
import { StoreProvider } from 'app/providers/StoreProvider';
import { BrowserRouter } from 'react-router-dom';

const domNode = document.getElementById('root');
const root = createRoot(domNode as HTMLElement);
root.render(
	<StoreProvider>
		<BrowserRouter>
			<App/>
		</BrowserRouter>
	</StoreProvider>
);
