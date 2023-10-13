import './App.css';
import { useState } from 'react';
import Modal from './components/Modal';
import Button from './components/Button';
import RightLeftModal from './components/RightLeftModal';

function App() {
	const [showModal, setShowModal] = useState(false);

	function openModal() {
		setShowModal(true);
	}
	function closeModal() {
		setShowModal(false);
	}

function onMouseLeave(e) {
setShowModal(true);
	
console.log(e);

}
	
	return (
		<div className="App w-screen h-screen bg-zinc-300 flex flex-col justify-center items-center">
			<div
				onMouseLeave={onMouseLeave}
				className="container w-9/12 bg-white px-4 py-10 m-5 rounded-lg"
			>
				<div className="text-3xl my-4 capitalize md:uppercase">
					Get 60 % off
				</div>

				<div className="text-gray-600 px-6 mb-4">Save money! </div>

				<Button onMouseLeave={onMouseLeave} handleClick={openModal} text="Yes, I want 10% Off" />
			</div>

			{showModal && (
				<RightLeftModal
					closeModal={closeModal}
					headingOne="Get 60% off"
					headingTwo="Get an exclusive discount today"
					positionStyle={'left'}
					paragraf={
						'What are you waiting for? We only do this once during a blood moon. More or less. With this 60% off you could buy something nice for that next dateyou got. Or you could simply not. So please do enjoy yourself with your 60% off!'
					}
				/>
			)}
		</div>
	);
}
export default App;

// mangler at få left til at passe
// RightLeftModal kan også være Modal med billede i center ved at skrive flex-col-reverse.
// Den modal hvor text, input etc er ovenpå billedet er sin egen komponent.