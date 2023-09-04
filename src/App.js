import { useState } from 'react';
import './App.css';
import Modal from './components/Modal';
import Button from './components/Button';
import Form from './components/Form';

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
				<h1 className="text-3xl my-4 capitalize md:uppercase">Get 10% off</h1>

				<p className="text-gray-600 px-6 mb-4">
					Save now with Nike promo codes and coupons. Get 10% off for students,
					military personnel, first responders, and medical professionals.
				</p>

				<Button handleClick={openModal} text="Yes, Give Me 10% Off" />
			</div>

			{showModal && (
				<Modal headingOne="My HeadingOne" closeModal={closeModal} />
			)}
		</div>
	);
			}
			export default App;