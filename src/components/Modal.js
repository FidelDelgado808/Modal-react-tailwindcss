import Button from './Button';

function Modal({ closeModal }) {


	function handleClick() {
		closeModal();
	}

	function closeModalBgClick(e) {
		if (e.target.id === "modal-bg") {
			console.log('click modal bg');
			closeModal();
		}
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
					className="absolute right-5 text-xl hover:cursor-pointer">
					X
				</a>

				<h1 className="text-4xl py-8 font-bold">My Awesome Modal</h1>

				<div className="bg-orange-400 w-5/12 h-1 mx-auto mb-8"></div>

				<h2 className="text-2xl italic pb-6">Made with React + Tailwindcss</h2>

				<p className="text-gray-600 px-6 italic">
					Aliquip aute et velit anim culpa nostrud magna irure cupidatat
					incididunt amet sit eiusmod. Qui culpa magna duis fugiat velit quis
					reprehenderit qui quis aliquip pariatur do nostrud. Et ut et duis nisi
					ad duis velit id reprehenderit voluptate. Et non nulla consectetur
					ipsum excepteur id ex ut duis do eiusmod. In sit fugiat est est
					excepteur aliquip.
				</p>
				<Button handleClick={handleClick} text="Click Me" />
			</div>
		</div>
	);
}

export default Modal;
