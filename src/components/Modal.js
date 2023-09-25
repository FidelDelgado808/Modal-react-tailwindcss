import { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import Success from './Success';
import Form from './Form';
import SkoForm from './SkoForm';
import TravelForm from './TravelForm';
import Coffee from './Coffee';
import Flex from './Flex';

function Modal({
	closeModal,
	headingOne,
	headingTwo,
	

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
		left: 'flex-4 rounded-md',
		right: 'h-auto max-w-full my-9 rounded-md',
	});

	const [srcImage, setsrcImage] = useState({
		img1: 'https://tecdn.b-cdn.net/img/new/slides/041.jpg',
		img2: 'https://media.istockphoto.com/id/960567928/photo/happy-man-drinking-a-cup-of-coffee-at-a-cafe.jpg?s=2048x2048&w=is&k=20&c=bHRrhIWp3Na9GjnNZZk58PbLzJXluXWzlUyNSKdq7tY=',
		img3: 'https://s2.qwant.com/thumbr/700x0/f/e/ce190e7d24f10478eb6f9d867034934af36688d3f29314fb58baa27ec3339e/Facebook_-How-To-Save-Money_-100-Tips-To-Save-Money-Fast.png?u=https%3A%2F%2Fwww.thewaystowealth.com%2Fwp-content%2Fuploads%2F2017%2F03%2FFacebook_-How-To-Save-Money_-100-Tips-To-Save-Money-Fast.png&q=0&b=1&p=0&a=0',
	});

	const [flexSelect, setflexSelect] = useState({
		flexCol: 'flex flex-col',
		flexRow: 'md:flex space-x-4 flex-row'
	});

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
					<div className="flex-1 text-4xl py-2 font-bold capitalize ">
						{headingOne}
					</div>
					<div className="flex-2 bg-blue-500 w-5/12 h-1 mx-auto"></div>

					<div className="flex-3 text-gray-600 py-2 bold mb-2 text-lg">
						{headingTwo}
					</div>
					<div>
						<img
							src={`${srcImage.img1}`}
							className={`${imagePosition.left}`}
							alt="..."
						/>
					</div>
				</div>

				{!showSuccess && (
					<>
						<Flex handleSubmitData={handleSubmitData} />
					</>
				)}

				{showSuccess && userData && <Success userData={userData} />}
			</div>

			{/* confetti if statement */}

			{showSuccess && <Confetti numberOfPieces={pieces} gravity={0.2} />}
		</div>
	);
}

export default Modal;

// To-Do
// Få styr på UseEffect
// Confetti loader når siden loader. Den skal loade onSubmit og ikke ved load. {midlertidig løsning fundet}
// imageposition, hvornår modlen åbnes placeres i app.js

// Alt skal være dynamisk på siden

// Lav auto aktivring så modal kommer frem efter 10 seks eller når man er på vej ud af siden. Indsæt på App.js
// Jeg kan bruge Coffee og TravelForm som template.
// Sørg for at være konsistent med padding og margin rundt om siden.



// Fix showParagraph i App.js