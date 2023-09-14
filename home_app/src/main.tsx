import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
// import './index.css';

let root: ReactDOM.Root;

console.log('Creating window function in HOME');
window.renderHome = (containerId: string) => {
	root = ReactDOM.createRoot(document.getElementById(containerId)!);

	root.render(
		<React.StrictMode>
			<App />
		</React.StrictMode>
	);
};

window.unmountHome = () => {
	root.unmount();
};
