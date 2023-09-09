import Confetti from 'react-confetti';
import { useState, useEffect } from 'react';

export default function Success({ userData }) {
	const [pieces, setPieces] = useState(200);

	const stopConfetti = () => {
		setTimeout(() => {
			setPieces(0);
		}, 3000);
	};

	useEffect(() => {
		stopConfetti();
	}, []);

	return (
		<div className=" h-fit items-center flex justify-center relative">
			<div className="bg-white w-fit rounded-lg w-1/3 font-latoRegular text-gray-700 p-16">
				<h1 className="text-3xl pb-4 font-latoBold">
					Thanks for the email {userData && userData?.navn && userData?.navn}✨
				</h1>
				<p className="text-lg  text-gray-500">
					We have sent you an email over at{' '}
					{userData && userData?.email && userData?.email}. We will get back to
					you as soon as we can!
				</p>
			</div>
			<Confetti gravity={0.2} numberOfPieces={pieces} />
		</div>
	);
}
