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
		img4: '',
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

	const [imgPosition, setImgPosition] = useState({
		onTop: '',
	});

	const myCoolStyle = {
		backgroundSize: 'container',
		backgroundRepeat: 'no-repeat',
		zIndex: '2',
	};

	return (
		<div
			id="modal-bg"
			className="absolute inset-0 w-screen h-screen bg-zinc-700/50 flex justify-center items-center"
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

				{!showSuccess && (
					<>
						<form onSubmit={handleSubmit(onSubmit)}>
							<div className="py-2 mb-2">
								<input
									defaultValue={localFormData?.navn}
									className="border rounded w-full py-2 px-3 my-2 text-gray-700 leading-tight"
									placeholder="Navn"
									{...register('navn')}
								/>
								{/* Inputs */}
								<div>
									<input
										defaultValue={localFormData?.email}
										className="border rounded w-full py-2 px-3 my-2 text-gray-700 leading-tight"
										{...register('email', { required: true })}
										placeholder="E-mail"
										type="email"
									/>

									{errors.email && (
										<span className=" py-2 px-4 justify-center">
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
									<span className="text-sm">
										&nbsp; I want awesome to receive newsletters with occasional
										discounts
									</span>
								</div>

								{/* Button */}
								<input
									className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded 
									focus:outline-none focus:shadow-outline"
									type="submit"
									autoComplete="on"
									value={'Submit'}
								/>
							</div>
						</form>
					</>
				)}
				{!showSuccess && (
					<div>
						<img
							src={`${ImageSource.img3}`}
							className={imgPosition[positionStyle]}
							alt="img"
						/>
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
