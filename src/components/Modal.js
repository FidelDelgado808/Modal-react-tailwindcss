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

	const [imagePosition, setImagePosition] = useState({
		center: 'flex-row, rounded-lg',
		left: 'flex-col rounded-lg',
		right: 'flex-col, rounded-lg',
		onTop: 'flex-wrap',
	});

	const [srcImage, setsrcImage] = useState({
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

				<div
					className={`flex ${
						positionStyle === 'center' ? 'flex-row' : 'flex-col'
					}`}
				>
					{!showSuccess && (
						<div className="flex-1 text-4xl py-2 font-bold capitalize">
							{headingOne}
						</div>
					)}

					{!showSuccess && (
						<div className="bg-blue-500 w-6/12 h-1 mx-auto rounded-lg"></div>
					)}
					{!showSuccess && (
						<div className="flex-1 text-xl py-2">{headingTwo}</div>
					)}
					{!showSuccess && (
						<div>
							<img
								src={`${srcImage.img2}`}
								className={imagePosition[positionStyle]}
							/>
						</div>
					)}
					{!showSuccess && (
						<div className="flex-2 text-lg py-2">{paragraf}</div>
					)}
				</div>

				{!showSuccess && (
					<>
						<form onSubmit={handleSubmit(onSubmit)}>
							<div className="py-2 mb-2">
								<input
									defaultValue={localFormData?.navn}
									className="flex-3 border rounded w-full py-2 px-3 my-2 text-gray-700 leading-tight"
									placeholder="Navn"
									{...register('navn')}
								/>
								{/* Inputs */}
								<div>
									<input
										defaultValue={localFormData?.email}
										className="flex-4 border rounded w-full py-2 px-3 my-2 text-gray-700 leading-tight"
										{...register('email', { required: true })}
										placeholder="E-mail"
										type="email"
									/>

									{errors.email && (
										<span className="flex-5 py-2 px-4 justify-center">
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
									className="flex-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded 
									focus:outline-none focus:shadow-outline"
									type="submit"
									autoComplete="on"
									value={'Submit'}
								/>
							</div>
						</form>
					</>
				)}

				{showSuccess && userData && <Success userData={userData} />}
			</div>

			{showSuccess && <Confetti numberOfPieces={pieces} gravity={0.2} />}
		</div>
	);
}

export default Modal;

// To-Do
// ændre flex-1 flex-2 så det passer og ser godt ud - brug evt if og else sætninger ifelse

// læs op på one-way databinding og databinding generelt
// Få styr på UseEffect
// Confetti loader når siden loader. Den skal loade onSubmit og ikke ved load. {midlertidig løsning fundet}

// Alt skal være dynamisk på siden

// Lav auto aktivring så modal kommer frem efter 10 seks eller når man er på vej ud af siden. Indsæt på App.js
// Jeg kan bruge Coffee og TravelForm som template.
// Sørg for at være konsistent med padding og margin rundt om siden.

// Fix showParagraph i App.js

// Modal design
// input onTop af billede
// Billede on left/right
// billede top, input under billede.
