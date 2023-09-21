import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const Home = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route index element={<Counter />} />
					<Route path="/about-counter" element={<AboutCounter />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

const Counter = () => {
	const [count, setCount] = useState(0);

	return (
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
			<Link to="/about-counter">Read about the counter</Link>
		</div>
	);
};

const AboutCounter = () => {
	return (
		<>
			<div>It's a simple MFE implementing a counter</div>
			<Link to="/">Go back to the counter</Link>
		</>
	);
};

export default Home;
