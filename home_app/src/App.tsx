import { useState } from 'react';
import './App.css';

const Home = () => {
	const [count, setCount] = useState(0);

	return (
		<>
			<div className="card">
				<button
					className="primary-button"
					onClick={() => setCount((count) => count + 1)}
				>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
		</>
	);
};

export default Home;
