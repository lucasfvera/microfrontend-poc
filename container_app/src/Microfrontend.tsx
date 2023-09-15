import { useEffect, useState } from 'react';

const MicroFrontend = ({ host, name }: { host: string; name: string }) => {
	const [error, setError] = useState(false);

	useEffect(() => {
		const renderMicroFrontend = () =>
			window[`render${name}`](`${name}-container`);
		const scriptId = `micro-frontend-script-${name}`;

		if (document.getElementById(scriptId)) {
			renderMicroFrontend();
			return;
		}

		fetch(`${host}/asset-manifest.json`)
			.then((res) => res.json())
			.then((manifest) => {
				const script = document.createElement('script');
				script.id = scriptId;
				script.type = 'module';
				script.crossOrigin = '';
				script.src = `${host}${manifest['main.js']}`;
				script.onload = renderMicroFrontend;
				document.head.appendChild(script);
			})
			.catch((err) => {
				console.error(err);
				setError(true);
			});

		return () => window[`unmount${name}`];
	}, []);

	return error ? (
		<p>There was an error while loading the page.</p>
	) : (
		<main id={`${name}-container`} />
	);
};

export default MicroFrontend;
