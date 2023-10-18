import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Confetti from 'react-confetti';
import Success from './Success';

function Modal({
	closeModal,
	headingOne,
	headingTwo,
	positionStyle,
	paragraf,
}) {
	const [showSuccess, setShowSuccess] = useState(false);

	const [userData, setUserData] = useState({
		navn: '',
		email: '',
	});

	const [pieces, setPieces] = useState(420);

	const stopConfetti = () => {
		// setTimeout(() => {
		// 	setPieces(0);
		// }, 500);
	};

	useEffect(() => {
		stopConfetti() && handleClick();
	}, []);

	const [ImageSource, setImageSource] = useState({
		img1: 'https://tecdn.b-cdn.net/img/new/slides/041.jpg',
		img2: 'https://media.istockphoto.com/id/960567928/photo/happy-man-drinking-a-cup-of-coffee-at-a-cafe.jpg?s=2048x2048&w=is&k=20&c=bHRrhIWp3Na9GjnNZZk58PbLzJXluXWzlUyNSKdq7tY=',
		img3: 'https://s2.qwant.com/thumbr/700x0/f/e/ce190e7d24f10478eb6f9d867034934af36688d3f29314fb58baa27ec3339e/Facebook_-How-To-Save-Money_-100-Tips-To-Save-Money-Fast.png?u=https%3A%2F%2Fwww.thewaystowealth.com%2Fwp-content%2Fuploads%2F2017%2F03%2FFacebook_-How-To-Save-Money_-100-Tips-To-Save-Money-Fast.png&q=0&b=1&p=0&a=0',
		img4: 'https://media.istockphoto.com/id/486849516/photo/out-of-office.webp?s=2048x2048&w=is&k=20&c=BxrcB14M3x8iV9x3G86q7ssyFdAN4vVSxii6I4_1RRo=',
		img5: 'https://s1.qwant.com/thumbr/0x380/3/3/9e6d735367a604fd6df9add17fb81935e798b261050f8ff5270f1a33c6aa35/4e4e26cae6106d9c7dd6333083599553.png?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F4e%2F4e%2F26%2F4e4e26cae6106d9c7dd6333083599553.png&q=0&b=1&p=0&a=0',
	});

	function handleClick() {
		closeModal();
	}

	function closeModalBgClick(e) {
		if (e.target.id === 'modal-bg') {
			closeModal();
		}
	}

	const handleSubmitData = (successState, userData) => {
		if (!userData || !successState) {
			console.log('userData');
			console.log(userData);
			console.log('successState ' + successState);
		}

		setShowSuccess(successState);
		setUserData({
			navn: userData?.navn,
			email: userData?.email,
		});
	};

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		console.log(data);
		handleSubmitData(true, { navn: data?.navn, email: data?.email });
		localStorage.removeItem('newsLetterFormData');
	};

	watch(
		(['navn', 'email'],
		(formData) => {
			console.log(formData);
			localStorage.setItem('newsLetterFormData', JSON.stringify(formData));
		})
	);

	const getLocalStorageFormData = () => {
		const savedData = localStorage.getItem('newsLetterFormData');
		const formDataObject = JSON.parse(savedData);
		return formDataObject;
	};

	const localFormData = getLocalStorageFormData();

	return (
		<div
			id="modal-bg"
			className="bg-zinc-700/50 absolute inset-0 w-screen h-screen flex justify-center items-center"
			onClick={closeModalBgClick}
		>
			<div className="bg-white p-2 rounded-lg md:w-7/12 w-10/12 max-w-screen-md shadow-xl relative">
				{!showSuccess && (
					<div className="container">
						<img
							alt="img"
							src="https://s1.qwant.com/thumbr/0x380/3/3/9e6d735367a604fd6df9add17fb81935e798b261050f8ff5270f1a33c6aa35/4e4e26cae6106d9c7dd6333083599553.png?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F4e%2F4e%2F26%2F4e4e26cae6106d9c7dd6333083599553.png&q=0&b=1&p=0&a=0"
						></img>
					</div>
				)}
				<div>
					<a
						href="/"
						onClick={closeModal}
						className="absolute relativ top-19 bottom-0 left-5"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.7}
							stroke="currentColor"
							className="w-8 h-8 hover:cursor-pointer"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</a>
				</div>

				{!showSuccess && (
					<div className="absolute inset-0 py-4">
						<div className="text-6xl font-semibold text-slate-50">
							{headingOne}
						</div>

						<form onSubmit={handleSubmit(onSubmit)}>
							{/* Inputs */}
							<div className="py-2 mb-2">
								<input
									defaultValue={localFormData?.navn}
									className="border rounded w-1/2 py-2 px-3 my-2 text-gray-700 leading-tight"
									placeholder="Navn"
									{...register('navn')}
								/>

								<div>
									<input
										defaultValue={localFormData?.email}
										className="border rounded w-1/2 py-2 px-3 my-2 text-gray-700 leading-tight"
										{...register('email', { required: true })}
										placeholder="E-mail"
										type="email"
									/>

									{errors.email && (
										<span className=" py-2 px-4 w-1/2 text-slate-100">
											Du mangler at udfylde et felt.
										</span>
									)}
								</div>
								<div>
									<input
										type="checkbox"
										className="required:border-red-500 mb-2"
										required
									/>
									<span className="text-sm text-slate-100">
										&nbsp; I want awesome to receive newsletters with occasional
										discounts
									</span>
								</div>

								{/* Button */}
								<input
									className=" bg-blue-400 hover:bg-blue-800 text-slate-100 hover:text-slate-200 font-bold py-2 px-4 rounded 
									focus:outline-none focus:shadow-outline"
									type="submit"
									autoComplete="on"
									value={'Submit'}
								/>
							</div>
						</form>
					</div>
				)}

				{showSuccess && userData && (
					<Success userData={userData} closeModal={closeModal} />
				)}
				{showSuccess && <Confetti numberOfPieces={pieces} gravity={0.7} />}
			</div>
		</div>
	);
}

export default Modal;
// error.email kommer forkert frem