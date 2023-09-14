import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import MicroFrontend from './Microfrontend';
import ErrorBoundary from './ErrorBoundary';

function App() {
	return (
		<BrowserRouter>
			<NavBar />
			<div className="layout">
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

const Home = () => (
	<ErrorBoundary fallback={<div>Something went wrong...</div>}>
		<MicroFrontend host={'http://localhost:5174'} name="Home" />
	</ErrorBoundary>
);
const About = () => (
	<ErrorBoundary fallback={<div>Something went wrong...</div>}>
		<MicroFrontend host={'http://localhost:5175'} name="About" />
	</ErrorBoundary>
);

const Header = () => (
	<h1 className="hero-header">Container App for Micro Frontend</h1>
);

const NavBar = () => {
	return (
		<div className="navbar">
			<NavLink className={'nav-link'} to="/">
				Home
			</NavLink>
			<NavLink className={'nav-link'} to="/about">
				About
			</NavLink>
		</div>
	);
};

export default App;
