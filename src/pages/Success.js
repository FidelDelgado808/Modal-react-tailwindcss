import { useNavigate } from 'react-router-dom';
import { motion as m } from 'framer-motion';
import Confetti from 'react-confetti';
import { useState, useEffect } from 'react';

export default function Success() {
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
		<div className=" h-screen items-center flex justify-center relative">
			<div className="bg-white rounded-lg w-1/3 font-latoRegular text-gray-700 p-16">
				<h1 className="text-3xl pb-4 font-latoBold">Thanks for the email ✨</h1>
				<p className="text-lg  text-gray-500">
					We have sent you an email over at YOUR MAIL. We will get back to you
					as soon as we can!
				</p>
			</div>
			<Confetti gravity={0.2} numberOfPieces={pieces} />
		</div>
	);
}
