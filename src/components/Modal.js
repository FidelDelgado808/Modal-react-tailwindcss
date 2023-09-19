import { useState } from 'react';
import Confetti from 'react-confetti';
import Form from './Form';
import SkoForm from './SkoForm';
import Success from './Success';
import TravelForm from './TravelForm';
import Coffee from './Coffee';
import Flex from './Flex';

function Modal({ closeModal, imagePosition }) {
	const [showSuccess, setShowSuccess] = useState(false);
	const [userData, setUserData] = useState({
		navn: '',
		email: '',
	});
	console.log(imagePosition);
	function handleClick() {
		closeModal();
	}

	function closeModalBgClick(e) {
		if (e.target.id === 'modal-bg') {
			console.log('click modal bg');
			closeModal();
		}
	}

	const handleSubmitData = (successState, userData) => {
		if (!userData || !successState) {
			console.log('userData');
			console.log(userData);
			console.log('successState ' + successState);
		}

		console.log('userData');
		console.log(userData);
		console.log('successState ' + successState);

		setShowSuccess(successState);
		setUserData({
			navn: userData?.navn,
			email: userData?.email,
		});
	};

	return (
		<div
			id="modal-bg"
			className="absolute inset-0 w-screen h-screen bg-zinc-700/50 flex flex-col justify-center items-center"
			onClick={closeModalBgClick}
		>
			<div className="bg-white p-4 m-4 rounded-lg md:w-7/12 w-10/12 max-w-screen-md shadow-2xl relative">
				<a onClick={closeModal} className="absolute right-5 text-xl">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-6 h-6 hover:cursor-pointer"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</a>

				<div className="flex flex-col">
					<div>{/* imagePosition */}</div>
				</div>
				{!showSuccess && (
					<>
						<h2 className="text-4xl py-4 font-bold capitalize ">
							Get 10% off today!
						</h2>
						<div className="bg-blue-500 w-5/12 h-1 mx-auto"></div>
						<p className="text-gray-600 px-8 bold mb-2 text-lg">
							Get an exclusive 10% off today!
						</p>
						<Coffee handleSubmitData={handleSubmitData} />
					</>
				)}
				{showSuccess && userData && <Success userData={userData} />}
			</div>
			{/* confetti if statement */}
		</div>
	);
}

export default Modal;