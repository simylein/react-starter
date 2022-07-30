import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './App.css';
import './index.css';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<StrictMode>
		<Suspense>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Suspense>
	</StrictMode>,
);
