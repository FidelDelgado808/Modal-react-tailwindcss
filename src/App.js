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
				<div className="text-3xl my-4 capitalize md:uppercase">
					Get 60 % off
				</div>

				<div className="text-gray-600 px-6 mb-4">Save money!</div>

				<Button handleClick={openModal} text="Yes, Give Me 10% Off" />
			</div>

			{showModal && (
				<Modal
					headingOne="Get 60% off"
					headingTwo="Get an exclusive 60% off today. Sign-up down below 👇🏽"
					positionStyle={"right"}
					paragraf={" With this you can save a lot of money"}
					closeModal={closeModal}

				/>
			)}
		</div>
	);
}
export default App;
