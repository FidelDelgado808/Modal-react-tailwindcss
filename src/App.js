import { useState } from 'react';
import './App.css';
import Modal from './components/Modal';
import Button from './components/Button';

function App() {
	const [showModal, setShowModal] = useState(false);

	function openModal() {
		setShowModal(true);
	}
	function closeModal() {
		setShowModal(false);
	}
	return (
		<div className="App w-screen h-screen bg-zinc-300 flex flex-col justify-center items-center">
			<div className="container w-9/12 bg-white px-4 py-10 m-5 rounded-lg">
				<h1 className="text-3xl my-8">Modal pop-up projekt</h1>
				<p>React + Tailwind</p>
				<Button handleClick={openModal} text="Open Modal" />
			</div>
			{showModal && <Modal headingOne="My HeadingOne" closeModal={closeModal} />}
		</div>
	);
}

export default App;