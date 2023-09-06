import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Import BrowserRouter, Route, and Routes
import Success from './pages/Success';

const root = document.getElementById('root'); // No need to create a separate root with React 18+

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/success" element={<Success />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>,
	root
);

reportWebVitals();
