import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Confetti from 'react-confetti';
import Success from './Success';

function App({ closeModal, headingOne, headingTwo, positionStyle, paragraf }) {
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
		img4: 'https://s2.qwant.com/thumbr/0x380/5/0/09e2ed10b1d5797bb796da4c38262e5a06e9d129cb4c140eeff1c4fff52f59/Vertical-Horizon-104.jpg?u=https%3A%2F%2Fpetapixel.com%2Fassets%2Fuploads%2F2017%2F04%2FVertical-Horizon-104.jpg&q=0&b=1&p=0&a=0',
		img5: 'https://s1.qwant.com/thumbr/0x380/9/c/30fe2233b14c04045e4b8ee28c01c1edb43223c484775833c152c74d5fb5b9/529571.jpg?u=https%3A%2F%2Fgetwallpapers.com%2Fwallpaper%2Ffull%2Fe%2Fe%2F3%2F529571.jpg&q=0&b=1&p=0&a=0',
		img6: '',
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

	const [imgPosition] = useState({
		center: 'rounded-lg',
		right: 'h-full rounded-lg',
		left: 'h-full rounded-md',
	});

	return (
		<div
			id="modal-bg"
			className="absolute inset-0 w-screen h-screen bg-zinc-700/50 flex justify-center items-center"
			onClick={closeModalBgClick}
		>
			<div
				id="modal"
				className="bg-white rounded-lg md:w-7/12 w-10/12 max-w-screen-md shadow-xl relative"
			>
				<a onClick={closeModal} className="absolute right-4 top-1 text-xl">
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
					<div
						className={`flex pt-8
								${positionStyle === 'center' ? 'flex-col-reverse' : ''}
								${positionStyle === 'left' ? 'flex-row-reverse' : ''}
								${positionStyle === 'right' ? 'flex-row' : ''}
						}`}
					>
						<div className="min-w-2/3">
							<div className="text-4xl py-4 font-bold capitalize">
								{headingOne}
							</div>
							<div className="px-8 text-lg">{paragraf}</div>

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
											<span className="py-2 px-4 text-sm">
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
											&nbsp; I want awesome newsletters with occasional
											discounts
										</span>
									</div>

									{/* Button */}
									<input
										className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded 
									focus:outline-none focus:shadow-outline"
										type="submit"
										autoComplete="on"
										value={'Submit'}
									/>
								</div>
							</form>
						</div>

						<div className="h-full w-full max-w-1/4">
							<img
								src={ImageSource.img5}
								className={imgPosition[positionStyle]}
								alt="img"
							/>
						</div>
					</div>
				)}

				{showSuccess && userData && (
					<Success userData={userData} closeModal={closeModal} />
				)}
			</div>
			{showSuccess && <Confetti numberOfPieces={pieces} gravity={0.2} />}
		</div>
	);
}

export default App;
