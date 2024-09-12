import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { StoreProvider } from 'app/providers/StoreProvider';
import App from './app/App';

const domNode = document.getElementById('root');
const root = createRoot(domNode as HTMLElement);
root.render(
	<StoreProvider>
		<BrowserRouter>
			<ErrorBoundary>
				<App/>
			</ErrorBoundary>
		</BrowserRouter>
	</StoreProvider>
);
