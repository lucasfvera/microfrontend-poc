import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

let root: ReactDOM.Root;

console.log('Creating window function in ABOUT');
window.renderAbout = (containerId: string) => {
	root = ReactDOM.createRoot(document.getElementById(containerId)!);

	root.render(
		<React.StrictMode>
			<App />
		</React.StrictMode>
	);
};

window.unmountAbout = () => {
	root.unmount();
};
