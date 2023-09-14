import { useEffect, useState } from 'react';

const MicroFrontend = ({ host, name }: { host: string; name: string }) => {
	const [error, setError] = useState(false);

	useEffect(() => {
		console.log('1-Running useEffect in MicroF component', host, name);

		const renderMicroFrontend = () => {
			console.log('2-Rendering micro front end', name);
			return window[`render${name}`](`${name}-container`);
		};

		const scriptId = `micro-frontend-script-${name}`;

		console.log(
			'3-DEBUG --- Folder:Microfrontend --- Before checking if',
			'\n\t document.getElementById(scriptId)',
			document.getElementById(scriptId)
		);

		if (document.getElementById(scriptId)) {
			console.log('4-Entering IF statement if script id exists');
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
		<p>There was an error while loading the page</p>
	) : (
		<>
			{console.log('5-Running return in MF component')}
			<main id={`${name}-container`} />
		</>
	);
};

export default MicroFrontend;
