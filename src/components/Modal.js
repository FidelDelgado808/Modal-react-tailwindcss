import { useState } from 'react';
import Form from './Form';

function Modal({ closeModal }) {
	function handleClick() {
		closeModal();
	}

	function closeModalBgClick(e) {
		if (e.target.id === 'modal-bg') {
			console.log('click modal bg');
			closeModal();
		}
	}

	function ChangeContent() {
		const [show, setShow] = useState(false);
	}

	return (
		<div
			id="modal-bg"
			className="absolute top-0 left-0 w-screen h-screen bg-zinc-700/50 flex flex-col justify-center items-center"
			onClick={closeModalBgClick}
		>
			<div className="bg-white p-4 m-4 rounded-lg md:w-7/12 w-10/12 max-w-screen-md shadow-2xl relative">
				<a
					onClick={closeModal}
					className="absolute right-5 text-xl hover:cursor-pointer"
				>
					<p className="font-bold">X</p>
				</a>

				<h2 className="text-4xl py-8 font-bold capitalize">
					Get 10% off today!
				</h2>
				<div className="bg-blue-500 w-5/12 h-1 mx-auto mb-8"></div>
				<p className="text-gray-600 px-6 italic">
					Get an exclusive 10% off today! Sign-up to secure your 10% off.
				</p>

				<Form />
			</div>
		</div>
	);
}

export default Modal;
